import { describe, expect, it } from "vitest";
import { setFavoritePhotos } from "../setFavoritePhotos";
import { FavoriteAction } from "../../constants";

describe('setFavoritePhotos', () => {
    it('should add a photo to the favorites', () => {
        setFavoritePhotos({
            userName: 'testUser',
            photoId: '1',
            action: FavoriteAction.ADD
        });

        expect(localStorage.getItem(`CleverPhoto::testUser::favoritePhotos`)).toEqual(JSON.stringify(['1']));
    });

    it('should remove a photo from the favorites', () => {
        localStorage.setItem(`CleverPhoto::testUser::favoritePhotos`, JSON.stringify(['1', '2', '3']));
        setFavoritePhotos({
            userName: 'testUser',
            photoId: '1',
            action: FavoriteAction.REMOVE
        });

        expect(localStorage.getItem(`CleverPhoto::testUser::favoritePhotos`)).toEqual(JSON.stringify(['2', '3']));
    });
});