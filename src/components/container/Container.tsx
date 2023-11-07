'use client'
import { useSession } from 'next-auth/react';
import React from 'react'
import Navbar from '../Nabvar';
import Sidebar from '../Sidebar';

interface Props {
    children: React.ReactNode
  }

const Container = ({ children }: Props) => {
  const { data: session, status } = useSession();
  console.log('session, status: ', session, status);
  if (status === 'loading') {
    return <div>loading</div>
  }
  return (
    <main className="w-full h-screen flex">
      {
        session?.user &&
        <div className='w-[250px]'>
          <Sidebar />
        </div>
      }
      <div className='w-full'>
        <div className='rounded-lg flex justify-start content-center items-center w-full'>
          { children }
        </div>
      </div>
    </main>
  )
}

export default Container
