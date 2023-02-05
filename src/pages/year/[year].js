import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

function year() {
     const router= useRouter();
    const {year}=router.query;
  return (
    <div><div className='flex w-full text-white bg-blue-500 '> 
    <button className='p-3 cursor-pointer border-b-4 w-1/3'><Link href="/year/1">1 st year</Link></button>
    <button className='p-3 cursor-pointer border-b-4 w-1/3'><Link href="/year/2">2 nd year</Link></button>
    <button className='p-3 cursor-pointer border-b-4 w-1/3'><Link href="/year/3">3 rd year</Link></button>

  </div>{year}</div>
  )
}

export default year