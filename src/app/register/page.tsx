"use client";
import React, { FormEvent, useState } from "react";
import axios, { AxiosError } from 'axios';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    console.log('email: ', email);

    try {
      const response = await axios.post('/api/auth/signup', {
        email: formData.get('email'),
        fullname: formData.get('fullname'),
        password: formData.get('password')
      })
      console.log('response: ', response);
      const resp = await signIn('credentials', {
        email: formData.get('email'),
        password: formData.get('password'),
        redirect: false,
      });
      if (resp?.ok) router.push('/dashboard');
      console.log('resp: ', resp);
    } catch (error) {
      if (error instanceof AxiosError){
        setError(error.response?.data.message);
      }
      console.log('error: ', error);
      
    }
  };
  return (
    <div className='w-screen h-screen flex justify-center content-center bg-gradient-to-r from-color_400 to-color_800'>
      <div className='m-auto w-[500px] h-[500px] my-auto bg-color_50 rounded-lg shadow-2xl'>
        <div className='flex content-center flex-col h-full'>
          <div className='text-center text-[25px] mt-10'>Signup</div>
          <div className='mx-4'>
            <form onSubmit={handleSubmit}>
              <div>
                { error && <div className="w-full p-2 bg-red-800 mb-3 text-center text-white">{ error}</div>}
              </div>
              <div>
                <div>Name</div>
                <input
                  type='text'
                  name='fullname'
                  className='border border-fields w-[100%] h-[40px] outline-none pl-2 rounded-md bg-color_50'
                  placeholder='John'
                />
              </div>
              <div className="mt-3">
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
              <button type='submit' className={`bg-color_600 text-white w-[100%] h-[40px] rounded-lg mt-6`}>
              Sign up
              </button>
            </form>
            <div className='text-[14px] mt-3'>
              Return to <Link className='text-color_700' href={'/login'}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
