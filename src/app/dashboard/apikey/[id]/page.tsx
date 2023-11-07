'use client'
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { FiArrowLeft, FiOctagon } from 'react-icons/fi';

function ApikeyPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  return (
    <div className='w-full px-10'>
      <div className='mt-10 text-[25px] mb-4'>
        <button className='' onClick={() => router.back()}>
          <FiArrowLeft />
        </button>
      </div>
      <div className='text-[28px] font-bold flex items-center mb-10'>
        <FiOctagon />
        <div className='ml-2'>Apikey - {id}</div>
      </div>
      <div className='flex justify-between'>
        <div className="w-[300px] flex flex-col justify-between h-[150px] p-4 rounded-lg mr-3 border border-color_100">
          <div className="text-[50px] text-gray">0%</div>
          <div className="text-color_400 mb-3">Success rate (last 1 hr)</div>
        </div>

        <div className="w-[300px] flex flex-col justify-between h-[150px] p-4 rounded-lg mr-3 border border-color_100">
          <div className="text-[50px] text-gray">0%</div>
          <div className="text-color_400 mb-3">Success rate (last 24 hr)</div>
        </div>

        <div className="w-[300px] flex flex-col justify-between h-[150px] p-4 rounded-lg mr-3 border border-color_100">
          <div className="text-[50px] text-gray">0</div>
          <div className="text-color_400 mb-3">Invalid requests (last 24 hr)</div>
        </div>

      </div>
    </div>
  )
}

export default ApikeyPage
