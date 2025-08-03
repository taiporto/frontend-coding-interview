"use client"

import { MdStar, MdStarBorder } from "react-icons/md";
import { useEffect, useState } from "react";
import { Photo as TPhoto } from "../types"
import Image from "next/image";

export const Photo = ({
    photo
}: {
    photo: TPhoto
}) => {
    const [isFavorite, setIsFavorite] = useState(localStorage.getItem(`CleverPhoto::${photo.id}_isFavorite`) === "true");

    useEffect(() => {
        localStorage.setItem(`CleverPhoto::${photo.id}_isFavorite`, isFavorite.toString());
    }, [isFavorite])

    return (
        <div className="flex w-full gap-[12px] items-start justify-between max-w-[500px]">
            <div className="flex">
                <button className="flex cursor-pointer mr-[12px]">
                    {
                        isFavorite ? (
                            <MdStar size={20} color="#FFD600" onClick={() => setIsFavorite(!isFavorite)} />
                        ) : (
                            <MdStarBorder size={20} color="#9CA3AF" onClick={() => setIsFavorite(!isFavorite)} />
                        )
                    }
                </button>
                <div className="flex gap-[12px] max-w-[219px]">
                    <div className="min-w-[75px] max-w-[75px] h-[75px] relative">
                        <Image src={photo.src.medium} alt={photo.photographer} fill objectFit="cover" className="rounded-[8px]" />
                    </div>
                    <div className="flex flex-col gap-[6px]">

                        <h2 className="font-bold text-sm h-[16px] line-clamp-1">{photo.photographer}</h2>
                        <p className="text-sm line-clamp-1 h-[16px]">{photo.alt}</p>
                        <div className="flex gap-[8px] items-center">
                            <p className="text-sm h-[16px]">{photo.avg_color}</p>
                            <div className={`w-[12px] h-[12px] bg-[${photo.avg_color.toLowerCase()}]`} style={{ backgroundColor: photo.avg_color }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <a href={photo.photographer_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[3px] text-xs text-primary"><Image src="/links.svg" alt="Portfolio" width={12} height={12} />Portfolio</a>
        </div>
    )

}