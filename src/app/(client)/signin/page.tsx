'use client';

import { Button } from "@/components/Button";
import { FormControl } from "@/components/FormControl";
import { Header } from "@/components/Header";
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function SignInPage() {
    const { login } = useAuthContext();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;
        login(username, password);
        redirect('/');
    }
    return (
        <div className="flex flex-col gap-[40px] w-[319px] md:my-auto">
            <Header title="Sign in to your account" />
            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
                <FormControl name="username" id="username" label="Username" type="text" />
                <FormControl name="password" id="password" label="Password" type="password" />
                <Button type="submit">Sign in</Button>
            </form>
        </div>
    )
}