import Link  from 'next/link'
import React from 'react'
import Head from 'next/head'
import { signIn,useSession ,signOut } from 'next-auth/react'
import { Dropdown, Space } from 'antd';
import Image from 'next/image'
import {RiDashboardFill} from 'react-icons/ri'
import {GrSettingsOption ,GrMenu,GrServices} from 'react-icons/gr'
import {FaPowerOff ,FaUser} from 'react-icons/fa'
import {useState} from 'react'
import { Button } from 'antd';

const TopNav = () => {

  const { data:session } = useSession();
  // user dropdown


  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

if(session){
  const items = [
    {
      label: (
        <Link  href="/profile" className='block gap-2 font-thin border-b-2 border-gray-400/25'> signed in as 
        <h1 className='text-lg font-semibold first-letter:capitalize'>{session.user.email}</h1>
        </Link>
      ),
      key: '0',
    }
    ,{
      label: (
        <p className='flex gap-2'>
        <RiDashboardFill className='text-lg mt-1 text-inherit'/>
        <Link  href="/login" className='text-inherit hover:text-black' onClick={() => loginWithRedirect()} legacyBehavior>
          Dashboard 
        </Link></p>
      ),
      key: '1',
    },
    {
      label: (
        <p className='flex gap-2'>
        <GrServices className='text-lg mt-1 text-inherit'/>
          <Link  href="/services" className='text-inherit hover:text-black' onClick={() => loginWithRedirect()} legacyBehavior>
            Services 
          </Link>
        </p>
      ),
      key: '2',
    },
    {
      label: (
        <p  href="#" className='flex gap-2'>
         <GrSettingsOption className='text-lg mt-1 text-inherit'/> 
         <Link href="/profile" className='text-inherit hover:text-black' legacyBehavior>Settings</Link>
        </p>
      ),
      key: '4',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <p className='flex gap-2 text-center' onClick={() =>signOut()}>
         <FaPowerOff className='text-lg mt-1 text-inherit'/> Logout
        </p>
      ),
      key: '5',
      danger: true,
    },
  ];
 
  return (
    <>
    <Head>
      
    </Head>
    <div  data-aos="fade-down"   data-aos-offset="500"
     data-aos-duration="2000"
     className='border-b-2 className="selection:bg-green-500" border-gray-600 border-opacity-20 max-sm:border-opacity-20'>
      <nav  className='p-5 mx-32 max-md:mx-0 max-md:flex max-md:items-center max-sm:text-center max-sm:justify-center justify-between flex text-center'>
        <div className="text-2xl cursor-pointer p-2">
           <Link href="/" onClick={(e) => setCurrent(e.key)}legacyBehavior>CodeMint🍃</Link>
        </div>
        <div className="navlink pt-2 max-md:invisible flex">
             <ul className='flex gap-9 max-md:mb-2'>
                <li className='hover:text-green-500 p-3 rounded-full cursor-pointer  transition-colors'><Link href="/services" onClick={(e) => setCurrent(e.key)} legacyBehavior>Services</Link></li>
                <li className='hover:text-green-500 p-3 rounded-full cursor-pointer transition-colors'><Link href="/about" onClick={(e) => setCurrent(e.key)} legacyBehavior>About</Link></li>
                <li className='hover:text-green-500 p-3 rounded-full cursor-pointer transition-colors'><Link href="/contact" onClick={(e) => setCurrent(e.key)} legacyBehavior>Contact</Link></li>              
            
                <li>
                <div className="user-dropdown invisible absolute right-12 top-6 max-sm:visible ">
                  <Dropdown 
                    menu={{
                      items,
                    }}
                    className='w-[250px]'
                    theme="dark"
                  >
                   <Button
                      onClick={toggleCollapsed} 
                      className="px-4 my-2 text-xl hover:text-green-800 text-gray-400 w-fit  border-none bg-green-500 rounded-full"
                    >
                      {collapsed ? <GrMenu/> :<GrMenu/> }
                  </Button>
                  </Dropdown>
                </div>
                </li>
              </ul>
           
            
        </div>
       
        {/* user */}
        <div className="user-dropdown max-sm:invisible visible ">
        <Dropdown 
          menu={{
            items,
          }}
        >
          <a className='cursor-pointer' title={session.user.name} onMouseOver={(e) => e.preventDefault()}>
            <Space>
              <Image src={session.user.image} className='mt-2 rounded-full' width={48} height={48} alt={session.user.name}  />
            </Space>
          </a>
        </Dropdown>
        </div> 
        
      </nav>
    </div>
    </>
  )
}
  else{
    return (
      <>
      
      <div  data-aos="fade-down"   data-aos-offset="500"
       data-aos-duration="2000"
       className='border-b-2 className="selection:bg-green-500" border-gray-600 border-opacity-20 max-sm:border-opacity-20'>
       <nav  className='p-5 mx-32 max-md:mx-0  max-md:items-center max-sm:text-center justify-between flex text-center'>
          <div className="text-2xl cursor-pointer p-2">
             <Link href="/" onClick={(e) => setCurrent(e.key)}legacyBehavior>CodeMint🍃</Link>
          </div>

          <div className="navlink pt-2 max-md:invisible max-md:hidden flex">               
              <ul className='flex gap-9 max-md:mb-2'>
                  <li className='hover:text-green-500 hover:bg-green-300/20 p-3 rounded-full cursor-pointer  transition-colors'><Link href="/services" onClick={(e) => setCurrent(e.key)} legacyBehavior>Services</Link></li>
                  <li className='hover:text-green-500 hover:bg-green-300/20 p-3 rounded-full cursor-pointer transition-colors'><Link href="/about" onClick={(e) => setCurrent(e.key)} legacyBehavior>About</Link></li>
                  <li className='hover:text-green-500 hover:bg-green-300/20 p-3 rounded-full cursor-pointer transition-colors'><Link href="/contact" onClick={(e) => setCurrent(e.key)} legacyBehavior>Contact</Link></li>
              </ul>
          </div>
          <div className="signin">
              <button 
                className="bg-green-700 mt-2 text-white px-6 py-2 rounded-full text-lg hover:bg-green-600"
                >
                <Link href="/login" onClick={() => loginWithRedirect()} legacyBehavior>Signin</Link> 
              </button>
          </div> 
          
        </nav>
      </div>
      </>
    )
  }
}

export default TopNav
