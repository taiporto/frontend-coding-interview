import { Header } from "@/components/Header";
import PhotosList from "./components/PhotosList";

export default async function PhotosPage() {
    return (
        <div className="flex flex-col gap-[40px] mb-[36px] md:mb-[24px]">
            <Header title="All photos" logoAlignment="start" />
            <PhotosList />
        </div>
    )
}