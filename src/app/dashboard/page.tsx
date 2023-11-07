"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { FiTrendingUp } from "react-icons/fi";

function ProfilePage() {
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <div className="flex flex-col justify-center w-full mt-10">
      <h1 className="font-bold text-3xl px-10 ">Profile</h1>
      <div className="w-fill h-[1px] bg-gray1"></div>
      <div className="flex p-10">
        <Link href={'/dashboard/apikey/1'}>
          <div className="w-[300px] flex flex-col justify-between h-[150px] p-4 rounded-lg shadow-lg mr-3 bg-color_600">
            <div className="font-bold text-color_100">APIKEY 1</div>
            <div className="text-color_10 mb-3">xxxxx</div>
            <div className="flex justify-between items-center">
              <button className="bg-red-900 bg-color_500 rounded-lg text-white px-5 py-1 flex items-center my-1">
                <FiTrendingUp />
                <div className="ml-2">request 24 hrs</div>
              </button>
              <div className="text-color_10">remove</div>
            </div>
          </div>
        </Link>
        <Link href={'/dashboard/apikey/2'}>
          <div className="w-[300px] flex flex-col justify-between h-[150px] p-4 rounded-lg mr-3 border border-color_100">
            <div className="font-bold">APIKEY 2</div>
            <div className="text-color_400 mb-3">xxxxx</div>
            <div className="flex justify-between items-center">
              <button className="bg-red-900 bg-color_200 rounded-lg text-color_600 px-5 py-1 flex items-center my-1">
                <FiTrendingUp />
                <div className="ml-2">request 24 hrs</div>
              </button>
              <div className="">remove</div>
            </div>
          </div>
        </Link>
      </div>

      <pre className=" p-4">
        {JSON.stringify(
          {
            session,
            status,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}

export default ProfilePage;