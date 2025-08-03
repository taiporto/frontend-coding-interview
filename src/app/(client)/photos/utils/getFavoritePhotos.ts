import { FAVORITE_PHOTOS_KEY } from '@/app/constants';

export const getFavoritePhotos = (userName: string) => {
  const favoritePhotosKey = FAVORITE_PHOTOS_KEY.replace('{_userId_}', userName);
  return new Set(JSON.parse(localStorage.getItem(favoritePhotosKey) || '[]'));
};
