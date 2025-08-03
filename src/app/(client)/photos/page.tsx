import { Header } from "@/components/Header";
import { Photo as TPhoto } from "./types";
import { Photo } from "./components/Photo";

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
                    {pexelPhotos.photos.map((photo: TPhoto) => (
                        <Photo key={photo.id} photo={photo} />
                    ))}
                </div>
            </div>
        )
    } catch (error) {
        return (
            <div className="flex flex-col gap-[40px]">
                <Header title="All photos" logoAlignment="start" />
                <div className="flex flex-col gap-[12px]">
                    <p>Error fetching photos</p>
                </div>
            </div>
        )
    }
}