'use client'

import DashboardNavbar from "@/components/DashboardNavbar"

export default function DashboardLayout({ children }) {
    return <section>
        <section className="max-w-screen-lg	mx-auto mt-8">
            <DashboardNavbar />
        {children}

        </section>
        </section>
  }