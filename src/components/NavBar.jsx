import React from 'react'

function NavBar() {
  return (
    <div className='flex justify-between items-center p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
        <div>
            <button className='text-white pr-4'>Sign In</button>
            <button
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default NavBar