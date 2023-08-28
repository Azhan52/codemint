import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Custom404() {
    return (
      <div className='flex selection:bg-green-500 overflow-hidden'>
      <div className="flex max-md:w-full h-[22rem]  w-full text-center mt-40  justify-center">
        <Head>
          <title>Page not found | CodeMint</title>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
       <div className="block">
       <span className="text-green-500 text-2xl font-mono">
          404
        </span><br />
          <h1 className="text-6xl font-bold">
          Page not found
          </h1>
          <p className="pt-2 mt-5 text-2xl">Sorry, we couldn’t 
          find the page you’re looking for.</p>
        <div className="flex gap-4 mt-7 items-center justify-center">
        <button className='text-lg rounded-full hover:text-gray-200 bg-green-500/20 hover:bg-green-500/20 backdrop-blur-3xl text-green-600 p-3 mt-3'><Link href="/">Back to Home</Link> </button>

        </div>
       </div>
      </div>
      
      </div>
    )
  }