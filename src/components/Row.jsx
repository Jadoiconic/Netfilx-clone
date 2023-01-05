import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])

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
                            <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Row