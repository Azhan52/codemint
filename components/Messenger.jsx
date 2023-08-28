import React ,{useState} from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { BiSend } from 'react-icons/bi'
export const Messenger = () => {

  const [message , setMessage] = useState("hi friend 😊");
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className='fixed top-96 w-16 h-16 pt-[13.5px] pl-[14px] rounded-full text-center justify-center text-4xl bg-[#57DA63] text-white max-md:mt-64 mt-64 right-7' onClick={
      () =>{
        setIsVisible(!isVisible)
      }
    }>
    <BsWhatsapp />
    {isVisible && 
    <div data-aos='fade-out' className='h-[24rem] w-80 wbox rounded-3xl backdrop-blur-sm bg-white/20 absolute -top-96  right-12'>
      <div className='bg-[#095E54] w-full h-20 rounded-t-[20px] flex'>
        <img src="/user.jpg" alt="ADil Sarfraz" title='ADil Sarfraz' className='p-3 ml-1 rounded-full'/>
        <div className='block text-left mt-4'>
          <h1 className='text-xl'>ADil Sarfraz</h1>
          <h2 className='text-sm'>Full Stack Developer</h2>
        </div>
      </div>
      <div className="h-[14.5rem]"></div>
      <div className="bg-white/60 rounded-b-3xl items-center flex justify-center  h-[4.6rem]">
        <div className="w-[75%] h-[3.5rem]  bg-gray-300 shadow-sm shadow-slate-50/10 rounded-lg">
          <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}} 
          className="w-full relative h-full rounded-lg text-[17px] focus:border-none placeholder:pl-3 bg-white border-none text-black pl-5" autoFocus="true"  placeholder='Write Your Message'/>
        </div>
          <a onClick={() => {
            // send whatsapp  message 
            setIsVisible(!isVisible)
            window.open(`https://wa.me/send?phone=923166714810&text=${message}`, '_blank');
          }}>
          <BiSend className='text-black/80 cursor-pointer'/>
          </a>
      </div>
    </div>
  }
    </div>
  )
}
