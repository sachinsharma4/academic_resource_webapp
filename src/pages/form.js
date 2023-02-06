import React from 'react'

function Form() {
  return (
    <div>
        <form method='POST' action='/api/addpyq'>
        <input  name='year'className='w-full'placeholder='enter the year'/>
        <input type="number" name='semester'className='w-full'placeholder='enter the semster'/>
        <input  name='subject'className='w-full'placeholder='enter the subject'/>
        <input  name='link'className='w-full'placeholder='enter the link'/>
       <input type="submit"/>
        </form>
        
    </div>
  )
}

export default Form