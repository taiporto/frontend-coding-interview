'use client';

import { AuthContextProvider } from '../../context/AuthContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <main className="flex h-screen flex-col items-center px-[34px] py-[36px] md:py-[24px]">
        {children}
      </main>
    </AuthContextProvider>
  );
}
