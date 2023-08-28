import { Rate } from 'antd'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import email from '../../public/1.jpeg'
import laptop from '../../public/3.webp'


const TrustPage = () => {
  return (
    <div className='p-8 h-auto'>
      <div data-aos="zoom-in-up" 
       className='mb-12'>
        <div className="absolute w-1/3 h-52 right-1/2 bg-green-600 backdrop-blur-lg -z-10 blur-3xl ">

        </div>
        <h1 className='text-5xl text-center mb-12 '>Trusted by 21+ million customers <br/> around the world.</h1>
        <div className="flex mt-5 ml-20">
            <h1 className='my-3 p-1 text-5xl bg-green-500 selection:bg-pink-500'>TrustPilot&nbsp;</h1>
        </div>
        <Rate disabled allowHalf defaultValue={4.5} className='text-3xl ml-24 text-green-400'/>
        <p className='ml-20 text-lg mt-3'>4.5 out of 5 stars based on 74,286 reviews
|
            Showing our 4 and 5 stars reviews.</p>
      </div>
    <br />
      <div className='mt-20'>
        {/* box ----- 1  */}
        <div  className="box w-full flex max-sm:block h-96 max-md:h-auto">
            <div  className="w-1/2 mb-6 text-start p-12 max-sm:w-full gap-5">
                <span className='text-lg text-green-500'>Professional Email</span>
                <h1 className='text-5xl  mb-1'>Build on your success.</h1>
                <h2 className='text-xl tracking-wide my-4'>
                Everyone has email, but that doesn’t mean all email is the same. Customers are nine times more likely to choose a business with a 
                professional address like 'ADil@codemint.com'.
                </h2>
            </div> 
            <div data-aos="fade-down" className="w-1/2 select-none max-sm:w-full relative h-96 object-cover object-center">
                <Image  className=' object-cover h-96 rounded-xl shadow-2xl shadow-slate-800' src={email} alt="email  image does not load"/>
                <h1 className="absolute text-2xl bg-green-500 rounded-lg p-2 font-bold text-white top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/5">
                    ADilSarfraz@codemint.com
                </h1>
            </div>
        </div>
         {/* box ----- 2  */}
         <div   className="box w-full flex my-12 max-md:h-auto overflow-auto max-sm:block h-96">
            
            <div  data-aos="fade-down" className="w-1/2  select-none max-sm:w-full h-96 object-cover object-center">
                <Image className=' object-cover h-96 rounded-xl  shadow-2xl shadow-slate-800' src={laptop} alt="email  image does not load"/>
                
            </div>
              <div className="w-1/2 mb-6 text-start p-12 max-sm:w-full max-md:h-auto gap-5">
                <span className='text-lg text-green-500'>Hosting</span>
                <h1 className='text-5xl  mb-1'>Fast, secure and always online.</h1>
                <h2 className='text-xl tracking-wide my-4'>
                Already have a website? Give it the home it deserves. With industry-leading load times, 
                guaranteed 99.9% uptime and expert, 24/7 support, your site couldn’t ask for more.
                </h2>
                <button className='p-3 hover:rounded-full transition-all  border-green-500 border-2 shadow-md font-bold shadow-green-400 rounded-2xl text-lg '>
                    <Link href="/services" 
                    >
                      See our hosting Plans
                    </Link>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TrustPage
