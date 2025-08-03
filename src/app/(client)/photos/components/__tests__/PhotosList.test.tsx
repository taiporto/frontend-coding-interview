import {describe, it, expect, vi} from 'vitest';
import { screen } from "@testing-library/react";
import PhotosList from "../PhotosList";
import { renderAsync } from '@/test-utils/renderAsync';
import { MOCK_PEXEL_RESPONSE } from '../__fixtures__/photos';
import { Photo as TPhoto } from '../../types';

vi.mock('../Photo', () => ({
    Photo: ({photo}: {photo: TPhoto}) => <div>{photo.alt}</div>
}));

const mockJsonResponse = vi.fn().mockResolvedValue(MOCK_PEXEL_RESPONSE);
global.fetch = vi.fn().mockResolvedValue({
    json: mockJsonResponse
});

describe('<PhotosList />', () => {
    describe('when the photos are loaded', () => {
        it('should render the photos', async () => {
            global.fetch = vi.fn().mockResolvedValue({
                json: mockJsonResponse
            });
            renderAsync(<PhotosList />);
            expect(await screen.findByText(MOCK_PEXEL_RESPONSE.photos[0].alt)).toBeVisible();
            expect(await screen.findByText(MOCK_PEXEL_RESPONSE.photos[1].alt)).toBeVisible();
        });
    });

    describe('when the photos request fails', () => {
        it('should render the error state', async () => {
            global.fetch = vi.fn().mockRejectedValue(new Error('Failed to fetch photos'));
            renderAsync(<PhotosList />);
            expect(await screen.findByText('Error fetching photos, please reload the page')).toBeVisible();
        });
    });
});