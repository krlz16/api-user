"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const { status } = useSession();
  console.log('status: ', status);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    console.log('credentials: ');
    const resp = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    console.log('resp?.ok: ', resp);
    if (resp?.error) setError(resp.error as string);
    if (resp?.ok) router.push('/dashboard');
  };
  return (
    <div className='w-screen h-screen flex justify-center content-center bg-gradient-to-r from-color_400 to-color_800'>
      <div className='m-auto w-[500px] h-[400px] my-auto bg-color_50 rounded-lg shadow-2xl'>
        <div className='flex content-center flex-col h-full'>
          <div className='text-center text-[25px] mt-10 font-bold'>Login</div>
          <div className='mx-4'>
            <form onSubmit={handleSubmit}>
            { error && <div className="w-full p-2 bg-red-800 mb-3 text-center text-white">{ error}</div>}
              <div>
                <div>Email</div>
                <input
                  type='email'
                  name='email'
                  className='border border-fields w-[100%] h-[40px] outline-none pl-2 rounded-md bg-color_50'
                  placeholder='email@dom.com'
                />
              </div>
              <div className='mt-3'>
                <div>Password</div>
                <input
                  type='password'
                  name='password'
                  className='border border-fields w-[100%] h-[40px] outline-none pl-2 rounded-md bg-color_50'
                  placeholder='*******'
                />
              </div>
              <button type='submit' className={`${ 'bg-color_600 text-white'} w-[100%] h-[40px] rounded-lg mt-6`}>
                Login
              </button>
            </form>
            <div className='text-[14px] mt-3'>
              Don't have an account? <Link className='text-color_700' href={'/register'}>Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
