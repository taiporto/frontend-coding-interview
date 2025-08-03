'use client';

import { useAuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";

export default function PhotosLayout({children}: {
    children: React.ReactNode
}) {
    const { getIsLoggedIn } = useAuthContext();

    if (getIsLoggedIn() === false) {
        redirect('/signin');
    }

    return (
        <div className="w-full md:w-[500px]">
            {children}
        </div>
    )
}