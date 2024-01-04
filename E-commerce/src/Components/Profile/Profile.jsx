import React from 'react'
import { useState } from 'react'
import Layout from '../Layout/Layout'

export default function Profile() {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');

    const userData=()=>{

        const user=JSON.parse(localStorage.getItem('user'));
        console.log(user)
    }

  return (
   <Layout>
    <div className='flex justify-start pl-10 mt-10 mr-10 ml-20'>
    <div class="max-w-sm rounded overflow-hidden shadow-lg ">
    <img src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQMjYrFKl1JFRSYQRRxSJUEn4oQy-Xc2f6isP63tmq9sJXHCyjp18p-0sxXO-et4TbAaSOEFUxWkUry6Js' className='h-72 w-96   rounded-2xl'></img>

  <div class="px-6 py-4">
    <div class="font-bold text-xl text-white mb-2 ml-28">Profile Details</div>
    <div className='flex mt-4'>
    <h1 className='ml-8 mr-1 text-white  text-lg font-bold '>Username:</h1>
   <h1 className=' mt-1 mb-1 text-white '>{username}</h1>
   </div>
   <div className='flex mt-4'>
    <h1 className='ml-8 mr-1 text-lg text-white font-bold'>Email:</h1>
   <h1 className=' mt-1 mb-1 text-white'>{email}</h1>
   </div>
   <hr className='font-bold h-1 bg-black opacity-50'></hr>
   <div className='mt-4 ml-16 text-xl font-bold'>
    <h1 className='ml-10 text-white'>Update Profile</h1>
   </div>
   <div className='flex'>
   <form className=' flex' >
        <input className="border border-slate-950 p-3 h-10 rounded-lg w-40 mt-4 " type="username" placeholder="Username" id="username" onChange={(e)=>setUsername(e.target.value)}  required />
        {/* <input className="border border-slate-950 p-3 rounded-lg w-56 mt-4 ml-2" type="email" placeholder="Email" id="email" onChange={(e)=>setEmail(e.target.value)} required /> */}
        <button  className='bg-green-600 p-2  text-slate-50 uppercase hover:opacity-95 border rounded-lg w-40 h-10 ml-2 mt-4'>Update Profile</button>    </form>
   </div>
   <div>
   <button onClick={userData} className='bg-green-600  p-3 text-slate-50 uppercase hover:opacity-95 border rounded-lg w-56 ml-10 mt-10 flex justify-center'>Logout</button>

   </div>
   
  </div>
 
</div>
</div>


   </Layout>
  )
}
