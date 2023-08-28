import React from 'react'
import Image from 'next/image'
import second from '../public/about.webp'
import adil from '../public/adil.jpg'
import Head from 'next/head'
const About = () => {
  return (
    <> 
    <Head>
      <title>About Us | CodeMint </title>
    </Head>
      <div className='place-content-center select-none mt-12 flex'>
      <Image width={150} src={second} alt=''/>
      </div>
      <div className='relative
       '>
      <h1 className='text-4xl selection:bg-green-500 font-bold text-center py-3'>About Us</h1>
      </div>
      <div className='h-[500px] flex mt-12 '>
        
        <div  className="w-1/2 mx-11 ">
        <Image width={250} className='rounded-3xl mix-blend-lighten mt-5 ml-32' src={adil} alt=''/>
        </div>
        <div className="w-1/2 ">
          <h1 className='text-2xl border-l-4 backdrop-blur-md rounded-md border-spacing-16 mt-48 '>
          &nbsp;Hey, <br /> &nbsp;I'm <span className='text-green-400 '>ADil Sarfraz</span>. I'm a Singer <br />&nbsp;turned into Web Developer, and author.
          </h1>
          <p className='mt-2 ml-3 text-base '> Email:&nbsp;
            <a className='underline' href="mailto:adilsarfr00@gmail.com?subject=About&body=Hello%20ADil%20Sarfaz%20😍">
            Adilsarfr00@gmail.com
            </a>
          </p>
        </div>

   

  
    </div>
     {/* map */}
    <div className='block w-full p-8'>
    <h1 className='text-4xl ml-2  mb-5'> 🗺️ Our location </h1>
    <iframe data-aos="fade-in" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2670908659697!2d74.3369597753273!3d31.434313151389272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907f39f867967%3A0x848c45dfe41cfff1!2sPU%20Pharma!5e0!3m2!1sen!2s!4v1693165902372!5m2!1sen!2s" 
    className='w-full h-96 rounded-3xl map'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
    </div> 
    
    </>
  )
}

export default About
