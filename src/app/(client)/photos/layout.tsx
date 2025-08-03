'use client';

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function PhotosLayout({children}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const { getIsLoggedIn } = useAuthContext();

    if (getIsLoggedIn() === false) {
        router.replace('/signin');
    }

    return (
        <div className="w-full md:w-[500px]">
            {children}
        </div>
    )
}