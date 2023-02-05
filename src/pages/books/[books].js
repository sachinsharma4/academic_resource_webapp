import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

function Books() {
     const router= useRouter();
    const {books}=router.query;
  return (
    <div><div className='flex w-full text-white bg-blue-500 '> 
    <button className='p-3 cursor-pointer border-b-4 w-1/3'><Link href="/books/1">1 st books</Link></button>
    <button className='p-3 cursor-pointer border-b-4 w-1/3'><Link href="/books/2">2 nd books</Link></button>
    <button className='p-3 cursor-pointer border-b-4 w-1/3'><Link href="/books/3">3 rd books</Link></button>

  </div>{books}</div>
  )
}

export default Books