import { Header } from "@/components/Header";
import { Photo as TPhoto } from "./types";
import { Photo } from "./components/Photo";
import { Suspense } from "react";

export default async function PhotosPage() {
    try {
        const pexelResponse = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=10', {
            headers: {
                Authorization: process.env.PEXELS_API_KEY || '',
            }
        })
        const pexelPhotos = await pexelResponse.json();
        return (
            <div className="flex flex-col gap-[40px]">
                <Header title="All photos" logoAlignment="start" />
                <div className="flex flex-col gap-[12px]">
                    <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
                        {pexelPhotos.photos.map((photo: TPhoto) => (
                            <Photo key={photo.id} photo={photo} />
                        ))}
                    </Suspense>
                </div>
            </div>
        )
    } catch (error) {
        return (
            <div className="flex flex-col gap-[40px]">
                <Header title="All photos" logoAlignment="start" />
                <div>
                    <p>Error fetching photos, please reload the page</p>
                </div>
            </div>
        )
    }
}