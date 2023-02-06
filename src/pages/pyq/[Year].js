import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

function Year(props) {

const router = useRouter();
const {Year} = router.query;

  return (
    
    <div>
     
      <div className='flex w-full text-white bg-blue-500 '>
        <button className={`p-3 cursor-pointer border-b-4 w-1/3 ${Year==1?"border-blue-600":""}`}><Link href="/pyq/1">1 st year</Link></button>
        <button className={`p-3 cursor-pointer border-b-4 w-1/3 ${Year==2?"border-blue-600":""}`}><Link href="/pyq/2">2 nd year</Link></button>
        <button className={`p-3 cursor-pointer border-b-4 w-1/3 ${Year==3?"border-blue-600":""}`}><Link href="/pyq/3">3 rd year</Link></button>

      </div>
      <main className='flex flex-col content-center justify-center items-center p-10'>
        {
          props.data.map((item)=>{
            return(<a href={item.link} download><div className="bg-blue-600 py-10 m-4 w-80 text-white text-center  p-5 rounded-xl">
           <span>semester: {item.semester}</span><br/>
            <span>subjects: {item.subject}</span>
           
          </div></a>)
            
          })
        }
     
   
      </main>
    </div>
  )
}
export const  getServerSideProps= async (context) =>{

  const { Year } = context.query;
  console.log(Year)
  let data =await fetch(`https://academic-resource-webapp.vercel.app/api/getpyqs?year=`+Year).then(data=>{ return data.json() })

   return {props: { data}}
}
export default Year