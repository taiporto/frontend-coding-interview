import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Photo } from "../Photo";
import { MOCK_PEXEL_RESPONSE } from "../__fixtures__/photos";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { FavoriteAction } from "../../constants";
import * as setFavoritePhotosModule from "../../utils/setFavoritePhotos";

const mockedPhoto = MOCK_PEXEL_RESPONSE.photos[0];

const mockedUserName = 'testUser';
const mockGetUserName = vi.fn(() => mockedUserName);

vi.mock('@/context/AuthContext', () => ({
    useAuthContext: () => ({
        getUserName: mockGetUserName
    })
}));

const setFavoritePhotosSpy = vi.spyOn(setFavoritePhotosModule, 'setFavoritePhotos');

const setup = () => render(<Photo photo={mockedPhoto} />);


describe('<Photo />', () => {
    it('should render the photo', () => {
        setup();

        const image = screen.getByRole('img', { name: mockedPhoto.alt });
        expect(image).toBeVisible();
        expect(screen.getByTestId('favorite-icon-empty')).toBeVisible();
        expect(screen.getByText(mockedPhoto.photographer)).toBeVisible();
        expect(screen.getByText(mockedPhoto.alt)).toBeVisible();
        expect(screen.getByText(mockedPhoto.avg_color)).toBeVisible();
        expect(screen.getByTestId('avg-color-box')).toHaveStyle({ backgroundColor: mockedPhoto.avg_color });
        expect(screen.getByRole('link', { name: 'Portfolio' })).toBeVisible();
        expect(screen.getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', mockedPhoto.photographer_url);
    });

    describe('when the photo is favorited', () => {
        beforeEach(() => {
           localStorage.setItem(`CleverPhoto::${mockedUserName}::favoritePhotos`, JSON.stringify([mockedPhoto.id.toString()]));
        });

        it('should render the favorite icon as filled', () => {
            setup();
            expect(screen.getByTestId('favorite-icon-filled')).toBeVisible();
        })

        describe('and the favorite button is clicked', () => {
            it('should toggle the favorite state to false', async () => {
                setup();
                expect(screen.getByTestId('favorite-icon-filled')).toBeVisible();
                fireEvent.click(screen.getByTestId('favorite-button'));
                expect(screen.getByTestId('favorite-icon-empty')).toBeVisible();
            })
            
            it('should call setFavoritePhotos with the correct arguments', async () => {
                setup();
                fireEvent.click(screen.getByTestId('favorite-button'));

                await waitFor(() => expect(setFavoritePhotosSpy).toHaveBeenCalledWith({
                    userName: mockedUserName,
                    photoId: mockedPhoto.id.toString(),
                    action: FavoriteAction.REMOVE
                }));
            })
        })
    });

    describe('when the photo is unfavorited', () => {
        it('should render the favorite icon as empty', () => {
            setup();
            expect(screen.getByTestId('favorite-icon-empty')).toBeVisible();
        })

        describe('and the favorite button is clicked', () => {
            it('should toggle the favorite state to true', async () => {
                setup();
                expect(screen.getByTestId('favorite-icon-empty')).toBeVisible();
                fireEvent.click(screen.getByTestId('favorite-button'));    

                expect(screen.getByTestId('favorite-icon-filled')).toBeVisible();
            })

            it('should call setFavoritePhotos with the correct arguments', async () => {
                setup();
                fireEvent.click(screen.getByTestId('favorite-button'));

                expect(setFavoritePhotosSpy).toHaveBeenCalledWith({
                    userName: mockedUserName,
                    photoId: mockedPhoto.id.toString(),
                    action: FavoriteAction.ADD
                });
            })
        })
    });
});