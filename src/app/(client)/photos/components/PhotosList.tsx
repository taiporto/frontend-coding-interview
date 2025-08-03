import React, { Suspense } from "react";
import { PEXELS_API_URL } from "@/app/constants";
import { Photo } from "./Photo";
import { Photo as TPhoto } from "../types";

const fetchPexelPhotos = async () => {
    const pexelResponse = await fetch(PEXELS_API_URL, {
        headers: {
            Authorization: process.env.PEXELS_API_KEY || '',
        }
    })
    return pexelResponse.json();
}

export default async function PhotosList() {
    try {
        const pexelPhotos = await fetchPexelPhotos();
        return (
            <div className="flex flex-col gap-[12px]">
                <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
                    {pexelPhotos.photos.map((photo: TPhoto) => (
                        <Photo key={photo.id} photo={photo} />
                    ))}
                </Suspense>
            </div>
        )
    } catch (error) {
        return (
            <div className="flex flex-col gap-[12px]">
                <div className="flex justify-center items-center">Error fetching photos, please reload the page</div>
            </div>
        )
    }
}