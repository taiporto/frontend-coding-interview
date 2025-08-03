'use client';

import { Button } from "@/components/Button";
import { FormControl } from "@/components/FormControl";
import { Header } from "@/components/Header";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

enum FieldNames {
    USERNAME = 'username',
    PASSWORD = 'password'
}

export default function SignInPage() {
    const router = useRouter();
    const [erroredField, setErroredField] = useState<string | null>(null);
    const { login } = useAuthContext();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        if (username === '') {
            setErroredField(FieldNames.USERNAME);
            return;
        }

        if (password === '') {
            setErroredField(FieldNames.PASSWORD);
            return;
        }

        login(username, password);
        router.push('/photos');
    }

    return (
        <div className="flex flex-col gap-[40px] w-[319px] md:my-auto">
            <Header title="Sign in to your account" />
            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
                <FormControl name="username" id="username" label="Username" type="text" error={erroredField === FieldNames.USERNAME} />
                <FormControl name="password" id="password" label="Password" type="password" error={erroredField === FieldNames.PASSWORD} />
                {erroredField && <p id="error-message" className="text-red-500">Please fill in {erroredField}</p>}
                <Button type="submit">Sign in</Button>
            </form>
        </div>
    )
}