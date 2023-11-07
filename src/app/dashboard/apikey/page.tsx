'use client'
import React, { useEffect, useState } from 'react'
import { FiEdit3, FiKey } from 'react-icons/fi';

function ApikeyPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(json => json.json())
      .then(data => {
        console.log('data: ', data);
        setUsers(data);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center w-full mt-10 px-10">
      <div className='text-[30px] font-bold'>API KEY</div>
      <div>
        <table className='w-full mt-10'>
          <thead>
            <tr className='text-left'>
              <th>Network</th>
              <th>Request</th>
              <th>Failed request</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user:any) => (
                <tr key={user.id}>
                  <td>API: { user.name }</td>
                  <td>xxxxxxxxxxxx</td>
                  <td>xxxxxxxxxxxx</td>
                  <td>
                    <div className='flex gap-2'>
                      <button className='flex items-center border border-color_100 px-2 py-1 rounded-md'><FiKey />  key</button>
                      <button className='flex items-center border border-color_100 px-2 py-1 rounded-md'><FiEdit3 />  edit</button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ApikeyPage
