'use client';

import { redirect } from "next/navigation";
import { useAuthContext } from "../../context/AuthContext";

export default function PhotosPage() {
    const { getIsLoggedIn } = useAuthContext();

    if (!getIsLoggedIn()) {
        redirect('/signin');
    }

    return <div>Photos</div>;
}