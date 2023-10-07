'use client'

import React from 'react'
import Link from 'next/link'
import LoginBtn from './LoginBtn'

const AdminNavbar = () => {
  return (
    <header className='w-full bg-gray-200 py-8 px-4'>
        <div className='flex justify-between items-center'>
        <h2 >
        <Link href="/">
        <span className="text-2xl font-bold text-indigo-500 hover:text-indigo-700">
        Welcom<span className="text-pink-500">Admin</span>
        </span>
        </Link>
        </h2>
        <LoginBtn />
        </div>
    </header>
  )
}

export default AdminNavbar