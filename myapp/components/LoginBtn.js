'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
    const { data: session, error } = useSession();
    if (session) {
    return (
      <>
          {error && <p>Error: {error.message}</p>}
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}