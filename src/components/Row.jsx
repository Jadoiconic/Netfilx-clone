import axios from 'axios'
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const Row = ({ title, fetchUrl, rowId }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchUrl).then(res => {
            setMovies(res.data.results)
        })
    }, [fetchUrl])

const sliderLeft = () =>{
    var slider = document.querySelector("#slider"+rowId)
    slider.scrollLeft = slider.scrollLeft - 500
}
const sliderRight = () =>{
    var slider = document.querySelector("#slider"+rowId)
    slider.scrollLeft = slider.scrollLeft + 500
}
    return (
        <div className='px-4 md:px-8 group relative'>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <MdChevronLeft onClick={sliderLeft} className='bg-white rounded-full top-[50%] text-black absolute opacity-50 hover-opacity-100  left-0 cursor-pointer z-10 hidden group-hover:block' size={40} />
            <div className='relative flex items-center'>
                <div id={'slider'+rowId} className='w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />

                    ))}
                </div>
                <MdChevronRight onClick={sliderRight} className='bg-white rounded-full text-black absolute opacity-50 hover-opacity-100 right-0 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>
        </div>
    )
}

export default Row