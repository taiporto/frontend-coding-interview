'use client';

import { redirect } from "next/navigation";
import { useAuthContext } from "../../context/AuthContext";

export default function MainPage() {
    const { getIsLoggedIn } = useAuthContext();

    if (getIsLoggedIn() === false) {
        redirect('/signin');
    }

    redirect('/photos');
}