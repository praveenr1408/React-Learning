import React from 'react'

function ErrorPage() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-9'>
        <p className='font-bold text-3xl'>404 Page Not found</p>
        <button className='bg-[deepskyblue] py-2 px-6 rounded-3xl'>Go to Home</button>
    </div>
  )
}

export default ErrorPage