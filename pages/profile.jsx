import React from 'react'
import { signIn,useSession ,signOut } from 'next-auth/react'
import Link from 'next/link';
import Image from 'next/image';
import second from '../public/profile.avif'
import Head from 'next/head'
import {IoMdPower,} from 'react-icons/io'
import {CiUser,CiBrightnessUp} from 'react-icons/ci'
const Profile = () => {

    
  const { data:session } = useSession();
  
  if(session){
    return (
        <>
        <Head>
            <title>
                Profile | CodeMint
            </title>
        </Head>
        <div className='flex'>
            <div className="w-1/4 bg-gray-400/5 shadow-lg shadow-slate-500/10 backdrop-blur-sm rounded-r-xl mt-8 mb-8 h-[500px] place-content-center"
                 data-aos='fade-right'>
                <div className='border-b-2 border-gray-400/10 flex items-center justify-center p-4'>
                <Image src={session.user.image} title={session.user.name} height={80} width={80} className='rounded-full ' />
                <div className='pl-5 text-left '>
                <h1 className='text-xl font-bold'>{session.user.name}</h1>
                <p className='text-center text-sm'>{session.user.email}</p>
                </div>
                </div>
                <div className='flex flex-col mt-5 gap-3 text-center h-96 mx-3'>
                    <div className='backdrop-blur-sm text-center gap-4 hover:bg-gray-300/5 flex px-7 py-4 cursor-pointer rounded-xl'>
                        <CiUser className='mt-1'/> Profile
                    </div>
                    <div className='backdrop-blur-sm text-center gap-4 hover:bg-gray-300/5 flex px-7 py-4 cursor-pointer rounded-xl'>
                        <CiBrightnessUp className='mt-1'/> Apperence
                    </div>
                    <div onClick={() => signOut()} className='backdrop-blur-sm text-center gap-4 hover:bg-red-800/20 flex px-7 py-4 cursor-pointer rounded-xl'>
                        <IoMdPower className='mt-1'/> Logout
                    </div>
                </div>
            </div>
            <div data-aos='fade-in' className='w-1/3 place-content-center ml-32 h-[500px] bg-gray-50/10 backdrop-blur-xl px-2  py-4 mt-7 rounded-xl '>
                <div className=' rounded-sm'>
                    <h1 className=' flex text-3xl border-gray-200/5 border-b-2 p-5'><CiUser className='mt-1'/> Profile</h1>
                    <h2 className='px-5 py-1 text-xl'> <span className='text-green-500'>Name:</span> {session.user.name}</h2>
                    <h2 className='px-5 py-1 text-xl '> <span className='text-green-500'>Email:</span> {session.user.email}</h2>
                </div>
                <div>
                    <h1 className='mt-6 flex text-3xl border-gray-200/5 border-b-2 p-5'><CiBrightnessUp className='mt-1'/> Apperence</h1>
                    <h2 className='px-5 py-1 text-xl'> <span className='text-green-500'>Theme:</span> Dark</h2>
                </div>
                <div>
                    <h1 className='mt-6 text-3xl border-gray-200/5 border-b-2 p-5 flex'><IoMdPower className='mt-1'/> Logout</h1>
                    <h2 className='px-5 py-1 text-xl mt-4 '> <span className='hover:bg-red-500 bg-green-500 px-4 py-2 rounded-full cursor-pointer' onClick={() => signOut()}>Logout</span></h2>
                </div>
            </div>
        </div>
        </>
      )
  }
  else{
    return (
    <div className='w-full h-screen text-2xl'>
    <p className='pt-32 pl-32'>You are Not Sign in Please Signin First....</p>
    <button className='ml-32 mt-5 bg-green-500 rounded-full hover:bg-green-800 px-4 py-2 text-white place-content-center flex'>
        <Link href='/login' legacyBehavior >
            <a>Login</a>
        </Link>
    </button>
    <Image src={second} width={450} className='max-md:ml-5 mt-12 rounded-lg ml-[500px]' alt='no way'/>
    </div>
    )
  }
}

export default Profile