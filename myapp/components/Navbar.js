'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'

const Navbar = () => {
    const {data: session} = useSession()

  return (
    <header className='py-8 px-4 w-full'>
        <div className='flex justify-between max-w-screen-lg mx-auto items-center'>
        <h2 >
            <Link href="/">
            <span className="text-2xl font-bold text-indigo-500 hover:text-indigo-700">
            Market<span className="text-pink-500">Share</span>
            </span>
            </Link>
            </h2>
            <div className='flex'>
        <ul className=''>
          {
            session?.user
              ? (
                <div>
                  { (
                    <div>
                      <Link
                      className='mr-4'
                      href='/dashboard'
                      >
                        Dashboard
                      </Link>
                  <button
                      className="mr-4 px-2 py-1 bg-indigo-500 text-white hover:bg-indigo-700"
                      onClick={() => signOut()}
                    >
                      Logout
                    </button>
                   </div>
                  )}
                </div>
              )
              : (
                <>
                  <Link
                  href="/login"
                  className="mr-4 px-2 py-1 bg-purple-500 text-white hover:bg-purple-700"
                  >Log in</Link>
                  <Link
                  className="mr-4 px-2 py-1 bg-indigo-500 text-white hover:bg-indigo-700"
                  href='/register'>Register</Link>
                </>
              )
          }
        </ul>
        </div>
            </div>
    </header>
  )
}

export default Navbar