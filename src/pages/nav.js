
import React ,{useRef}from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import Link from 'next/link'


export default function Nav() {
    
    
    const side = useRef();

    const hi=()=>{side.current.classList.contains("hidden")?side.current.classList.remove("hidden"):side.current.classList.add("hidden")}
    
  return (<>
    <div ref={side} onClick={hi}  className="hidden z-10 text-white h-screen fixed w-36 p-3 bg-blue-600 ">
    <AiOutlineClose className='absolute right-3  '  />
      <ul className='my-4 text-lg' >
   <li><Link href="./">home</Link></li>
   <li><Link href="./about">About</Link></li>
   {/*<li><Link href="./Blogs">Blogs</Link></li>*/}
   <li><Link href="./contact_us">Contact</Link></li>
   </ul>
  
   </div>
          <nav className='flex items-center px-4 bg-blue-500 justify-start '>
            <button onClick={hi} className='lg:hidden bg-inherited text-white'>&#9776;</button>

            <h1 className="text-3xl font-bold text-left text-white px-6 ">
              Academic Resource
            </h1>
            <ul className='hidden  text-white bg-blue-500 px-6 lg:flex absolute right-0  items-center  '>
              <li className='px-6 cursor-pointer'><Link href="/">Home</Link></li>
              <li className='px-6 cursor-pointer'><Link href="./about">About</Link></li>
              <li className='px-6 cursor-pointer'><Link href="./contact_us">Contact us</Link></li>
  
            </ul>
          </nav>
          
          </>
  )
  }