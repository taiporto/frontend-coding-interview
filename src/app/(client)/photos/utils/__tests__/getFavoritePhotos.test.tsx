import { describe, it, expect } from "vitest";
import { getFavoritePhotos } from "../getFavoritePhotos";

describe('getFavoritePhotos', () => {
    it('should return an empty Set if there are no favorite photos', () => {
        const favoritePhotos = getFavoritePhotos('testUser');
        expect(favoritePhotos).toEqual(new Set());
    });

    it('should return a Set with the favorite photos', () => {
        localStorage.setItem(`CleverPhoto::testUser::favoritePhotos`, JSON.stringify(['1', '2', '3']));
        const favoritePhotos = getFavoritePhotos('testUser');
        expect(favoritePhotos).toEqual(new Set(['1', '2', '3']));
    });
})