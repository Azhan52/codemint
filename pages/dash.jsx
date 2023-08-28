'use client'
import React from 'react'
import { getSession, signIn,signOut,useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { IoMdNotifications } from 'react-icons/io'
import { BsDatabaseAdd,BsGlobeAmericas } from 'react-icons/bs'
import { BiBookmarkAlt,BiCart } from 'react-icons/bi'
import { FcOldTimeCamera } from 'react-icons/fc'
import { Badge } from 'antd'

const Dash = () => {

    const {data :session} = useSession({
        required:true
    })
   if(session){
  return (
    <>
      <>    
        <Head>
            <title>Dashboard | CodeMint</title>
        </Head>  
       <div data-aos="fade-in" className='flex justify-center mb-5 w-full items-center selection:bg-green-500' >
       <div className="w-11/12 flex mt-7 bg-slate-500/10 rounded-2xl backdrop-blur-3xl">
            <div className='w-[350px] h-[70vh] max-md:h-[88vh] mt-6 border-r-2 border-gray-500/20 border-opacity-5'>
                <Image className='justify-center mx-24 max-md:mx-14 mb-5  rounded-full flex items-center'title={session.user.name} src={session.user.image} height={80} width={80}/>
                <h1 className='text-xl pb-2 text-center'><p className='font-bold text-green-500'title={session.user.name}>{session.user.name}</p></h1>
                <p className="text-center w-full p-2 mb-3 pb-6 border-b-2 border-gray-500/20"> 
                <span title='Profile' className='border cursor-pointer border-gray-400/30 hover:border-gray-400 p-2 rounded-full px-5'>
                <Link href="/profile" legacyBehavior>Profile
                </Link></span></p>
                
            <div>
                <h2 className='text-center'><span className='underline'>Login with:</span> {session.user.email}</h2>
            <h2 className='items-center flex justify-center py-1 text-xl mt-4 text-center'><span className='hover:bg-red-500 bg-zinc-500 px-4 py-2 
            rounded-full cursor-pointer' onClick={() => signOut()}>Logout</span></h2>
            </div>
                
        </div>
            <div className="w-full ">
                <div className='justify-between flex'>
                    <h1 className='text-base font-semibold mt-12 ml-8'>
                      <span className='opacity-50 hover:opacity-100'><Link href='/' >Home</Link> /</span> Dashboard
                    </h1>
                    <p className='pt-12  px-5 cursor-pointer'>
                       <Badge count={9} color='green'><IoMdNotifications className='text-3xl dark:text-gray-100 text-black'/></Badge>
                    </p>
                </div>
               <>
                    <div className="grid grid-cols-4 max-sm:grid-cols-1 px-4 gap-4 h-40 py-3">
                       
                        <div className='dark:bg-gray-50/10 dark:hover:bg-gray-50/20 bg-gray-300/80 hover:bg-gray-300 rounded-2xl'>
                            <h1 className='dark:text-white text-lg p-5'>
                                TODAY'S MONEY           
                                <BsDatabaseAdd className='max-md:hidden absolute left-[500px] p-2 top-[7.3rem] bg-gradient-to-r from-purple-600 to-purple-800 w-11 h-11 rounded-full'/>
                                <br />
                                <span className='font-bold text-xl'>$53,000</span>
                                <p className='text-base'>
                                   <span className='text-green-500 font-bold text-lg'> +55%</span> since yesterday
                                </p>
                            </h1>
                        </div>
                        <div className='dark:bg-gray-50/10 dark:hover:bg-gray-50/20 bg-gray-300/80 hover:bg-gray-300 rounded-2xl'>
                            <h1 className='dark:text-white text-lg p-5'>
                                TODAY'S USERS          
                                <BsGlobeAmericas className='absolute left-[772px]  p-2 top-[7.3rem] bg-gradient-to-t from-red-600 to-red-900  w-11 h-11 rounded-full'/>
                                <br />
                                <span className='font-bold text-xl'>2,300</span>
                                <p className='text-base'>
                                   <span className='text-green-500 font-bold text-lg'> +3%</span> since last week
                                </p>
                            </h1>
                        </div>
                        <div className='dark:bg-gray-50/10 dark:hover:bg-gray-50/20 bg-gray-300/80 hover:bg-gray-300 rounded-2xl'>
                            <h1 className='dark:text-white text-lg p-5'>
                                NEW CLIENTS         
                                <BiBookmarkAlt className='absolute left-[1050px] p-2 top-[7.3rem] bg-gradient-to-t from-[#2dceb8] to-[#00ffdd] w-11 h-11 rounded-full'/>
                                <br />
                                <span className='font-bold text-xl'>+3,462</span>
                                <p className='text-base'>
                                   <span className='text-red-600 text-lg font-bold'>-3%</span> since last quarter
                                </p>
                            </h1>
                        </div>
                        <div className='dark:bg-gray-50/10 dark:hover:bg-gray-50/20 bg-gray-300/80 hover:bg-gray-300 rounded-2xl'>
                            <h1 className='dark:text-white text-lg p-5'>
                                SALES
                                <BiCart className='absolute left-[1330px] p-2 top-[7.3rem] bg-gradient-to-tr from-orange-500 to-yellow-500 w-11 h-11 rounded-full'/>
                                <br />
                                <span className='font-bold text-xl'>$103,430</span>
                                <p className='text-base'>
                                   <span className='text-green-500 text-lg font-bold'> +5% </span> than last month
                                </p>
                            </h1>
                        </div>
                    </div>
                    <div className=' w-full flex h-64 max-md:hidden'>
                        <div className="w-1/2 bg-gray-50/10 rounded-2xl hover:bg-gray-300/20 ml-5"></div>
                        <img src="/dash.jpg" alt="" className='rounded-2xl w-1/2 mr-3  ml-3'/>
                        <FcOldTimeCamera  className='absolute right-[28rem] text-4xl bg-white/20 w-12 rounded-md mt-28'/>
                        <h1 className="absolute w-[300px] right-52 mt-40 text-[1.1rem] backdrop-blur rounded-2xl"
                        >
                        Get started with Argon
                        There’s nothing I really wanted to do in life that I wasn’t able to get good at.</h1>
                    </div>
               </>
            </div>
       </div>
        </div>
        </>
    </>
  )
}
}




export default Dash
