'use client'
import AdminNavbar from "@/components/AdminNavbar";
import { SessionProvider } from "next-auth/react";


export default function DashboardLayout({ children }) {
    return(
     <SessionProvider>
           <section className="max-w-screen-lg	mx-auto mt-8 px-4">
        <AdminNavbar />
        {children}

        </section>
     </SessionProvider>
    )
  }