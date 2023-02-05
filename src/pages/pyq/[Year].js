import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

function Year() {
  const router = useRouter();
  const { year } = router.query;
  return (
    <div>
      <div className='flex w-full text-white bg-blue-500 '>
        <button className='p-3 cursor-pointer border-b-4 w-1/3'><Link href="/pyq/1">1 st year</Link></button>
        <button className='p-3 cursor-pointer border-b-4 w-1/3'><Link href="/pyq/2">2 nd year</Link></button>
        <button className='p-3 cursor-pointer border-b-4 w-1/3'><Link href="/pyq/3">3 rd year</Link></button>

      </div>
      <main className='flex flex-col content-center justify-center items-center p-10'>
      <a href="/" download><div className="bg-blue-600 py-10 m-4 w-80 text-white flex-wrap flex flex-col content-center  p-5 rounded-xl">
          
          <span>subjects:</span>
          <span>semester:</span>
        </div></a>
        
      </main>
    </div>
  )
}

export default Year