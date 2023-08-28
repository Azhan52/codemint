import React from 'react'
import Image from 'next/image'
import arrow from '../../public/svg/arrow.svg'
function Guide() {
  return (
    <div className='mt-12 pb-32 overflow-hidden'>
      <div className='mt-40 mb-12'>
        <h1 className='font-guide flex max-md:ml-7 max-md:mr-0 text-4xl max-md:text-center ml-28 gap-4 text-center items-center'>
        Check out my Ultimate Guides
        <Image className='mt-5 max-sm:ml-0 max-sm:mr-12 select-none' src={arrow} alt='me'/>
        </h1>
      </div>
      <div data-aos="fade-bottom"
     data-aos-anchor-placement="top-center" className="container mt-2 select-none justify-between align-middle justify-items-center">
        <div class="px-12 max-md:px-2 max-md:gap-4 mt-20 max-md:ml-0 gap-24 columns-3 container justify-center align-middle justify-items-center max-md:columns-1 max-sm:columns-1">
            <div className="box shadow-sm backdrop-blur-sm max-sm:mb-12 cursor-pointer transition-transform delay-75  hover:-translate-y-5 h-80 rounded-xl max-md:mx-12 max-md:my-5 shadow-zinc-950">
                <h1 className='text-3xl font-bold p-6 tracking-wide'><span className='text-5xl'>🚀<br /></span><br /> Productivity</h1>
                <p className='px-3 text-lg'>How to execute efficiently,make time for what matters and have fun along the ways.</p>
            </div>
            <div className="box shadow-sm backdrop-blur-sm max-sm:mb-12 cursor-pointer transition-transform delay-75  hover:-translate-y-5 h-80 rounded-xl max-md:mx-12 max-md:my-5 shadow-zinc-950">
                <h1 className='text-3xl font-bold p-6 tracking-wide'><span className='text-5xl'>🎬<br /></span> <br /> YouTube Ultimate Guide</h1>
                <p className='px-3 text-lg'>Learn how to start a YouTube channel based on my years of experience.</p>
            </div>
            <div className="box shadow-sm backdrop-blur-sm max-sm:mb-12 cursor-pointer transition-transform delay-75  hover:-translate-y-5 h-80 rounded-lg max-md:mx-12 max-md:my-5 shadow-zinc-950">
                <h1 className='text-3xl font-bold p-6 tracking-wide'><span className='text-5xl'>✍️<br /></span> <br /> Studying</h1>
                <p className='px-3 text-lg'>
                    How to study effectively foe exams,with the best evidence-based techniques.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Guide
