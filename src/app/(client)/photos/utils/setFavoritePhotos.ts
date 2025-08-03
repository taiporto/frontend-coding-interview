import { FAVORITE_PHOTOS_KEY } from "@/app/constants";
import { FavoriteAction } from "../constants";
import { getFavoritePhotos } from "./getFavoritePhotos";

export const setFavoritePhotos = ({
    userName,
    photoId,
    action
}: {
    userName: string;
    photoId: string;
    action: FavoriteAction;
}) => {
    const favoritePhotosKey = FAVORITE_PHOTOS_KEY.replace('{_userId_}', userName);
    const currentFavorites = getFavoritePhotos(userName);
    if(action === FavoriteAction.ADD) {
        currentFavorites.add(photoId);
    } else {
        currentFavorites.delete(photoId);
    }
    localStorage.setItem(favoritePhotosKey, JSON.stringify(Array.from(currentFavorites)));
}