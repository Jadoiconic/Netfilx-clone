import axios from 'axios'
import {FaHeart, FaRegHeart } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])
    const [like, setLike] = useState(false)
    

    useEffect(() => {
        axios.get(fetchUrl).then(res => {
            setMovies(res.data.results)
        })
    }, [fetchUrl])

    console.log(movies)

    return (
        <div className='px-4 md:px-8'>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center'>
                <div id={'slider'}>
                    {movies.map((item, id) => (
                        <div className='w-[160px] sm:2-[200px] md:w-[240px] lg:[280px] inline-block cursor-pointer relative p-2'>
                            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100'>
                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item.title} </p>
                                <p>
                                    {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Row