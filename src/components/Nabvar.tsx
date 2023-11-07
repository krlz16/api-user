'use client'
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="font-bold text-xl">NextAuth</h1>
        </Link>

        <ul className="flex gap-x-2">
          {session ? (
            <>
              <li className="px-3 py-1">
                <Link href="/dashboard">Perfil</Link>
              </li>
              <li>
              <button
                  className="bg-cyan-800 text-white rounded px-4 py-2 block mb-2"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Signout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="px-3 py-1">
                <Link href="/about">About</Link>
              </li>
              <li className="bg-indigo-500 px-3 py-1">
                <Link href="/login">Login</Link>
              </li>
              <li className="bg-indigo-700 px-3 py-1">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;