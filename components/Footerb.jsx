import React from 'react'
import fbIcon from '../public/svg/fb.svg'
import insIcon from '../public/svg/insta.svg'
import twIcon from '../public/svg/tw.svg'
import Image from 'next/image'
import Link from 'next/link'

  const currentYear = new Date().getFullYear();
  console.log(currentYear ,"CodeMint 🍃");
const Footerb = () => {

  return (
    <>
    <footer className="h-[100px] selection:bg-green-500 max-sm:h-[150px] border-t-2 max-sm:block border-gray-300/10 p-1 rounded-t-full w-full items-center justify-center max-sm:rounded-t-3xl">
      <p className="flex max-sm:block max-sm:text-center items-center mb-12 mt-7 pt-2 text-gray-300 text-lg justify-center">&#169;<span className='text-green-500'> CodeMint🍃</span> {currentYear} inc. All right reserved. &nbsp;
        <span className='border-l-2 max-sm:text-center max-sm:pt-7 max-sm:place-content-center max-sm:border-none flex gap-6 mt-1 border-gray-400 border-opacity-5'>&nbsp; 
          <Link legacyBehavior target='_blank' href="https://www.facebook.com/profile.php?id=100014757152336">
            <a className='text-green-400' target="_blank">
              <Image className='hover:text-green-400 hover:opacity-100 opacity-70 cursor-pointer' src={fbIcon}/>
            </a>
          </Link>
          <Link href="https://twitter.com/adilsarfr00" legacyBehavior  target='_blank'>
            <a target="_blank">
              <Image className='hover:text-green-400 hover:opacity-100 opacity-70  cursor-pointer' src={twIcon}/>
            </a>
          </Link>
          <Link href="https://www.instagram.com/a4adilsarfraz/" legacyBehavior  target='_blank'>
            <a target="_blank">
              <Image className='hover:text-green-400 hover:opacity-100 opacity-70 cursor-pointer' src={insIcon}/>
            </a>
          </Link>
        </span>
      </p>
      
    </footer>
  </>
  )
}

export default Footerb
