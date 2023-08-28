import { Input } from 'antd'
import React, { useState } from 'react'
import Gooogleicon from '../public/svg/Google.svg'
import github from '../public/svg/github.svg'
import Facebook from '../public/f-icon.png'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { BsTwitter } from 'react-icons/bs'
import { useSession,signIn } from 'next-auth/react'
import Dash from './dash'

const Login = () => {

  const[password,setPassword] = useState("");
  const[email,setEmail] = useState("");
  const { data:session } = useSession();

// handlerlogin

  const handleLogin = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log(data); // You can handle the response according to your requirements
  };

      if (!session) {
      return(
        <> 
        <Head>
          <title>Login | CodeMint</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <form  className='grid place-content-center mt-5' onSubmit={handleLogin}>
        <h1 className="text-center py-1 font-bold text-5xl mb-5">
          Login
        </h1>
        <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} 
          className='w-72 p-3 bg-white border border-zinc-800 hover:border-blue-500 focus:outline-none text-lg  text-zinc-800 rounded-lg placeholder:text-zinc-800/30' placeholder='Enter your email *' type="text" id="email"/><br />
        <Input.Password value={password} name="password" onChange={(e) => setPassword(e.target.value)} className='w-72 p-3  border border-zinc-800 text-lg focus:outline-none rounded-lg  placeholder:text-black' placeholder='Enter your  password' type="password" id="password"/>
          <br />
          
          <button type="submit" value="register"
          disabled={ !password ||!email}
          className='cursor-pointer backdrop-blur-xl w-72 p-3 mt-5 text-white transition-colors hover:bg-green-950/90 focus:outline-none text-lg border-none rounded-full bg-green-600' > Signup</button>
          {/* Socail Icon */} <br />
          <p className='text-lg mb-3'>Creatw an account?<span className='cursor-pointer text-green-400 hover:underline'>&nbsp;<Link legacyBehavior href="/signup">Signup Now</Link></span></p>
          <h1 className='text-2xl mb-4 ml-3 tracking-widest'>Login With :</h1>
          <div className="icons flex justify-between mb-12">
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
      </>
      )
      }
      else{
       return(
          <>
          <Dash/>
          </>
          
       )
      }

}

 export default Login

