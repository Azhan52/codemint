import React, { useRef} from 'react'
import emailjs from '@emailjs/browser';
import hero from '../../public/hero.jpeg'
import Image from 'next/image';
import {toast} from 'react-toastify';

    const YOUR_SERVICE_ID = "service_5gthpzo"
    const YOUR_TEMPLATE_ID = "template_dzkx4pd"
    const YOUR_PUBLIC_KEY = "9m-i2cIAQWf0iMwIB"

const Hero = () => {
 
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              toast.success("Thanks For Subscribe me")
          }, (error) => {
              console.log(error.text);
              toast.error("!Error Sorry Try again")
          });
  };

  
  return (
    <div className="w-full flex b h-full  max-md:overflow-hidden max-md:grid">
        {/* Welcome Section */}
        <div data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1000" className="pt-36 max-md:w-full pl-36 w-1/2 max-md:overflow-hidden max-md:p-6">
        
        {/* mobile */}
        <div className='max-md:p-12'>
        <h1 className='text-5xl tracking-wide font-extrabold'>
              Hey friends —
          </h1>
          <p className='ml-2 text-2xl mt-4 max-md:m-0'>
              We Provide All types of Web Services in Which <span className='underline text-green-500'>Full Stack Deveolpment,</span>&nbsp;
              <span className='underline text-green-500'>Php Development,</span> <span className='underline text-green-500'>Web Hosting</span> and &nbsp;
              <span className='underline text-green-500'>Ecommerce Solutions</span>.

          </p>
          <h2 className='ml-1 text-2xl mt-4 max-md:m-0'>
              On this site we explore the strategies and tools that help us live happier, healthier, more productive lives.
              <br />
          </h2>
          <span className='flex text-2xl ml-1 mt-2 font-sans'> Sign up below to join a growing community 😊</span>
        </div>
          <form  ref={form} onSubmit={sendEmail} className='w-full items-center max-md:pl-20 max-md:pt-0 py-5 px-9'>
              <input type="email" name="to_email"
              className='w-4/5 p-3 bg-transparent
              backdrop-blur-xl border-opacity-20 border-2 
              border-gray-500 focus:outline-none text-lg 
              invalid:border-red-800 invalid:text-red-600 text-black
             rounded-2xl placeholder:text-gray-400 peer dark:text-white'
              placeholder="Email Address" autoComplete='true'/>
                      <p className='mt-1 invisible peer-invalid:visible 
                      text-green-500 text-sm'>Enter a valid email address *</p>
              <button
                  className='w-4/5 p-3 hover:bg-green-500 transition-color tracking-widest backdrop-blur-xl
                  mt-3 bg-green-600 font-sans border border-zinc-800 focus:outline-none  border-none text-white rounded-full placeholder:text-zinc-800'
                  type='submit'>SUBSCRIBE</button>
          </form>
         
        </div>
      
      {/* image section */}
      <div data-aos="fade-left" className=" max-md:w-full max-md:overflow-hidden object-cover ml-16 w-1/2 items-start">
        <Image className='h-3/4 rounded-xl max-md:hidden mt-32 object-center w-1/2 ml-24 saturate-50' alt='hello'  src={hero}/>
      </div>
    </div>
  )
}

export default Hero;
