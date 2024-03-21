import React from 'react'
import NavComp from './NavComp'

const Section1 = () => {
    return (
        <div className='secton-1'>
            <NavComp />
            <div className='text-white ml-[5%] mt-[5%] text-xl text-left'>
                <div className='mt-6'>We are offering the</div>
                <div className='mt-6 font-bold text-left text-3xl sm:text-4xl md:text-6xl lg:text-7xl'> Best Real Estate Deals</div>
                <div className='mt-6 w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique numquam labore et cupiditate. Impedit, deleniti harum dicta nostrum eligendi sequi et qui vero sunt aut iusto, reprehenderit doloribus veniam a?</div>
                <div> <button className='bg-green-500 text-white rounded-md p-4 mt-6'>More Details</button></div>
            </div>
        </div>
    )
}

export default Section1
