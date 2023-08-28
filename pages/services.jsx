import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import service from '../public/service.avif'
import Link from 'next/link'
import { ServiceBlock } from './Sections/ServiceBlock'
const Services = () => {
  return (
    <>
      <Head>
        <title>Services | CodeMint🍃</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <section className=' selection:bg-black'>
        {/* <div className='bg-green-700/25 backdrop-blur-xl h-4/5 mt-6 mx-12 rounded-t-full'>
          <h1 className='text-5xl text-center font-bold tracking-wide pt-8'>Services</h1>
        </div>
        {/* hero section 
        <div className="mx-12 flex w-full px-9 gap-12 text-white place-content-center max-md:w-full backdrop-blur-xl bg-green-700/25 max-md:h-full h-[574px]">
         <div className="w-1/2  justify-center max-md:w-full" 
         data-aos-duration="1000" data-aos='fade-right'>
            <h1 className='mt-32 text-2xl text-center'>
            <span className='text-green-500 text-3xl underline'>Web Services</span> are used to share information and functionality between different&nbsp;
            <span className='text-green-500 text-3xl underline'>applications</span> and systems. 
            They can be used to create a variety of applications, including:
            </h1>
            <div>
              <ul className='list-item ml-60 max-md:m-0 max-md text-xl mt-4 list-disc'>
                <li 
                className='hover:text-green-600'>
                  <Link href="#ecommerce">
                  Ecommerce Applications</Link></li>
                <li
                className='hover:text-green-600'>
                  <Link href="#hosting">
                    Website Hosting
                  </Link>
                </li>
                <li
                className='hover:text-green-600'>
                  <Link href="#design">
                    Website Design
                  </Link>
                </li>
                <li
                className='hover:text-green-600'>
                  <Link href="#development">
                    Website Development
                  </Link>
                </li>
              </ul>
            </div>
         </div>
         <div className="relative max-md:w-full bg-transparent w-1/2" data-aos="fade-left"  
         data-aos-offset="500"
          data-aos-duration="1000">
          <Image src={service} className='bg-transparent m-0 rounded-l-3xl h-[500px] w-full mt-6 absolute -right-12 ' alt='services'/>
         </div>
        </div> */}
        {/* service Blocks */}
        <ServiceBlock/>
      </section>
    </>
  )
}

export default Services
