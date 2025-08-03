"use client"

import { MdStar, MdStarBorder } from "react-icons/md";
import { useState } from "react";
import { Photo as TPhoto } from "../types"
import Image from "next/image";
import { Link } from "@/components/Link";
import { useAuthContext } from "@/context/AuthContext";
import { getFavoritePhotos } from "../utils/getFavoritePhotos";
import { setFavoritePhotos } from "../utils/setFavoritePhotos";
import { FavoriteAction } from "../constants";

export const Photo = ({
    photo
}: {
    photo: TPhoto
}) => {
   const { getUserName } = useAuthContext();
   const userName = getUserName();

   if(!userName) {
    return null;
   }

    const initialFavoritePhotos = getFavoritePhotos(userName);
    const [isFavorite, setIsFavorite] = useState(initialFavoritePhotos.has(photo.id.toString()));

    const handleFavoriteButtonClick = () => {
        if(isFavorite) {
            handleUnfavorite();
        } else {
            handleFavorite();
        }
    }

    const handleFavorite = () => {
        setIsFavorite(true);
        setFavoritePhotos({userName, photoId: photo.id.toString(), action: FavoriteAction.ADD});
    }
    
    const handleUnfavorite = () => {
        setIsFavorite(false);
        setFavoritePhotos({userName, photoId: photo.id.toString(), action: FavoriteAction.REMOVE});
    }

    return (
        <div className="flex w-full items-start justify-between max-w-[500px]">
            <div className="flex">
                <button className="flex cursor-pointer mr-[12px]" data-testid="favorite-button" onClick={handleFavoriteButtonClick}>
                    {
                        isFavorite ? (
                            <MdStar data-testid="favorite-icon-filled" size={20} color="#FFD600" />
                        ) : (
                            <MdStarBorder data-testid="favorite-icon-empty" size={20} color="#9CA3AF"  />
                        )
                    }
                </button>
                <div className="flex gap-[12px] max-w-[219px]">
                    <div className="min-w-[75px] max-w-[75px] h-[75px] relative">
                        <Image src={photo.src.medium} alt={photo.alt} fill className="rounded-lg object-cover" />
                    </div>
                    <div className="flex flex-col gap-[6px]">

                        <h2 className="font-bold text-sm h-[16px] line-clamp-1">{photo.photographer}</h2>
                        <p className="text-sm line-clamp-1 h-[16px]">{photo.alt}</p>
                        <div className="flex gap-[8px] items-center">
                            <span className="text-sm h-[16px] text-foreground-secondary flex items-center leading-none">{photo.avg_color}</span>
                            <div data-testid="avg-color-box" className="w-[12px] h-[12px]" style={{ backgroundColor: photo.avg_color }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Link href={photo.photographer_url} target="_blank" rel="noopener noreferrer" size="sm" className="flex items-center gap-[3px]"><Image src="/links.svg" alt="" width={12} height={12} />Portfolio</Link>
        </div>
    )

}