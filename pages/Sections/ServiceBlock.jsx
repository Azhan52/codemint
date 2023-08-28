import React from 'react'
import ecommerce from '../../public/ecommerce.avif'
import service from '../../public/service.avif'
import Image from 'next/image'
import Link from 'next/link'
import Price from './Price'
export const ServiceBlock = () => {
  return (
    <>
     <div className='mt-20'>
        {/* box ----- 1  */}
        <div  className="box w-full  max-sm:block  max-md:h-auto">
             
            <div  className="w-full select-none max-sm:w-full relative h-auto flex  place-content-center r">
                <Image  className='w-28 h-36
                 ecommerce rounded-xl shadow-2xl shadow-slate-800' src={ecommerce} alt="email  image does not load"/>
                <h1 className="text-center absolute p-2 z-10 text-4xl mt-36 font-extrabold underline backdrop-blur-sm rounded-xl  text-green-500">
                Hosting Plans
                </h1>
                
            </div>
            <Price/>
        </div>
         {/* box ----- 2  */}
         <div   className="box w-full flex my-12 max-md:h-auto overflow-auto max-sm:block h-96">
            
            <div  data-aos="fade-down" className="w-1/2  select-none max-sm:w-full h-96 object-cover object-center">
                <Image className=' object-cover h-96 rounded-r-xl shadow-2xl shadow-slate-800' src={service} alt="email  image does not load"/>
                
            </div>
              <div className="w-1/2 mb-6 text-start p-12 max-sm:w-full max-md:h-auto gap-5">
                <span className='text-lg text-green-500'>Website Development</span>
                <h1 className='text-5xl  mb-1'>Fast, secure and always online.</h1>
                <h2 className='text-xl tracking-wide my-4'>
                Already have a website? Give it the home it deserves. With industry-leading load times, 
                guaranteed 99.9% uptime and expert, 24/7 support, your site couldn’t ask for more.
                </h2>
                <button className='p-3 hover:rounded-xl transition-all delay-100 hover:shadow-green-600 hover:shadow-lg border-green-500 border-4 rounded-full text-lg '>
                    <Link href="/login" 
                    >
                      Login Now
                    </Link>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}
