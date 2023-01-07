import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='flex justify-center w-full h-screen items-center'>
                <div className='w-1/2 text-center'>
                    <h1 className='text-4xl font-bold text-center'>There’s even more to watch.</h1>
                    <p className='text-center text-3xl py-3'>
                        Netflix has an extensive library of feature films, documentaries,
                        TV shows, anime, award-winning Netflix originals, and more. Watch
                        as much as you want, anytime you want.
                    </p>
                    <p className='my-4'>
                        <Link to='/register'>
                            <button className='py-2 rounded-sm uppercase px-8 text-3xl bg-red-600'>
                                Join Now
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
            <div>

            </div>
        </footer>
    )
}

export default Footer