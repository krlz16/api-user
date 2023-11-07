'use client'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation';
import React from 'react'
import { CiGrid41, CiHome, CiLogout, CiUser } from "react-icons/ci";
import { FiAperture } from 'react-icons/fi';

function Sidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  if (pathname === '/login' || pathname === 'register') return null;

  const isActive = (href:string) => pathname === href;
  return (
    <div className='w-[250px] bg-gray1 h-full relative'>
      <div className='fixed shadow-lg h-full w-[250px]'>
        <div className='my-10 text-center text-[30px] font-bold flex items-center justify-center text-color_600'>
          <FiAperture />
          <div className='ml-2'>USER API</div>
        </div>
        <nav className='flex flex-col gap-3 mx-5 h-full'>
          <div>
            <Link href={'/dashboard'} className={`text-[20px] p-2 rounded-lg flex items-center ${isActive('/dashboard') ? 'bg-color_600 text-white' : ''}`}>
              <CiHome />
              <span className='ml-3'>Dashboard</span>
            </Link>
          </div>
          {
            session?.user.role === 'ADMIN' &&
            <>
              <div>
                <Link href={'/dashboard/apikey'} className={` text-gray2 text-[20px] p-2 rounded flex items-center ${isActive('/dashboard/apikey') ? 'bg-color_600 text-white' : ''}`}>
                  <CiGrid41 />
                  <span className='ml-3'>APIs</span>
                </Link>
              </div>
              <div>
                <Link href={'/user'} className={` text-gray2 text-[20px] p-2 rounded flex items-center ${isActive('/user') ? 'bg-color_600 text-white' : ''}`}>
                  <CiUser />
                  <span className='ml-3'>Users</span>
                </Link>
              </div>
            </>
          }
          <div className=''>
            <button className='text-gray2 p-2 text-[20px] flex items-center' onClick={() => signOut()}>
              <CiLogout />
              <span className='ml-3'>Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
