import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../constant/product'

function Main() {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPoplar).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    // console.log(movie)
const truncateString = (str, num) => {
    if(str?.length > num){
        return str.slice(0, num) + '...';
    }else{
        return str;
    }
}

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='font-bold text-3xl md:5xl'>{movie?.title}</h1>
                    <div className='py-4'>
                        <button
                            className='border bg-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 text-black border-gray-300 py-2 px-5 rounded'>Play</button>
                        <button
                            className='border ml-4 text-white hover:bg-red-600 hover:border-red-600  border-gray-300 py-2 px-5 rounded'>Watch later</button>
                    </div>
                    <p className='text-gray-500 text-sm'>Reased: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{
                        truncateString(movie?.overview, 200)
                    }</p>
                </div>
            </div>
        </div>
    )
}

export default Main