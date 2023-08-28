import {  Input } from 'antd'
import React, { useState } from 'react'
import Gooogleicon from '../public/svg/Google.svg'
import github from '../public/svg/github.svg'
import Facebook from '../public/f-icon.png'
import Image from 'next/image'
import Head from 'next/head'
import {SyncOutlined} from '@ant-design/icons';
import Link from 'next/link'
import { useSession,signIn } from 'next-auth/react'
import { BsTwitter } from 'react-icons/bs'

  const Signup = () => {

  const{data:session} =useSession();

  const[name,setName] = useState("");
  const[password,setPassword] = useState("");
  const[email,setEmail] = useState("");
  const [loading,setLoading] = useState(false)

  const handleSignup = async () => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    console.log(data); // You can handle the response according to your requirements
  };

  return (
    <div className='selection:bg-green-400 mb-12'>
    <Head>
      <title>Signup | CodeMint</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
      <div className='mt-2'> 
          {/* gradient Circle */}
        <div className="w-1/3 h-1/2 ml-80 absolute bg-gradient-to-t from-green-600 to-slate-700 -z-10 blur-3xl"></div>
 
        <h1 className='text-5xl text-center p-5 '>
          Signup
        </h1>
        <form method='POST' action="/api/signup" className='grid place-content-center mt-5 '>
        <input value={name} name="name" onChange={(e) => setName(e.target.value)} 
          className='w-72 p-3 bg-white border hover:border-blue-500 border-zinc-800 focus:outline-none text-lg text-zinc-800 rounded-lg
           placeholder:text-zinc-800/30' 
          placeholder='Your Name' type="text" id="name"/><br />
        <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} 
          className='w-72 p-3 bg-white border border-zinc-800 hover:border-blue-500 focus:outline-none text-lg  text-zinc-800 rounded-lg placeholder:text-zinc-800/30' placeholder='Enter your email *' type="text" id="email"/><br />
        <Input.Password value={password} name="password" onChange={(e) => setPassword(e.target.value)} className='w-72 p-3  border border-zinc-800 text-lg focus:outline-none rounded-lg  placeholder:text-black' placeholder='Enter your  password' type="password" id="password"/>
          <br />
          <div className="flex">
          <input type="checkbox" className='accent-green-600 transition-all border' name="checkbox" id="checkbox" /> <label for="checkbox" className='select-none'> &nbsp;Accept All the terms and Conditions </label>
          </div>
          <button type="submit" value="register"
          disabled={!name || !password ||!email || loading}
          className='cursor-pointer backdrop-blur-xl w-72 p-3 mt-5 text-white transition-colors hover:bg-green-950/90 focus:outline-none text-lg border-none rounded-full bg-green-600' > {loading ? <SyncOutlined  spin='true' /> : "Signup"}</button>
          {/* Socail Icon */} <br />
          <p className='text-lg mb-3'>Already Account? <span className='cursor-pointer text-green-400 hover:underline'><Link legacyBehavior href="/login">Login here</Link></span></p>
          <h1 className='text-2xl mb-4 ml-3 tracking-widest'>Signup With :</h1>
          <div className="icons flex justify-between ">
            <span className='bg-gray-100/20 cursor-pointer border border-zinc-800 border-opacity-20 hover:bg-zinc-100/10 hover:backdrop-blur-md px-2 py-3 rounded-xl text-blue-600 place-items-center text-center text-lg'>
              <BsTwitter onClick={() => signIn('twitter')}  className='text-3xl'/>
            </span>
            <span className='bg-gray-100/20  cursor-pointer border border-zinc-800 border-opacity-20 hover:bg-zinc-100/10 hover:backdrop-blur-md rounded-xl text-blue-600 p-3 text-lg'>
              <Image alt="" onClick={() => signIn('google')} src={Gooogleicon} className='w-7' />
            </span>
            <span className='bg-gray-100/20 cursor-pointer border border-zinc-800 border-opacity-20 hover:bg-zinc-100/10 hover:backdrop-blur-md rounded-xl text-blue-600 p-3 text-lg'>
            <Image src={Facebook} onClick={() => signIn('facebook')} className='w-7' alt="" width={40}/>  
            </span>
            <span className='bg-gray-100/20 cursor-pointer border border-zinc-800 border-opacity-20 hover:bg-zinc-100/10 hover:backdrop-blur-md rounded-xl text-blue-600 p-3 text-lg'>
            <Image src={github} onClick={() => signIn('github')} className='w-7' alt="" width={40}/>  
            </span>
          </div>
        </form>
      </div>
     
    </div>
  )
}

export default Signup