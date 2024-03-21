import React from 'react'
import { LuUserCircle2 } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const NavComp = () => {
    return (
        <div className='flex justify-between p-10'>
            <div className=''>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_aqXJr9IOfMKmDRwqUK1HrXWqk0QPZtD6Q&usqp=CAU" alt="" className='w-[20%] ml-[35%]' />
                <p className='text-green-600 text-3xl font-bold'>Trophy Nig .</p>
                <p className='text-sm'>Property Limited</p>
            </div>
            <IoMdMenu className=' cursor-pointer text-4xl mb-20 ml-20 block md:hidden lg:hidden' />
            <div className='flex'>
                <ul className='hidden sm:hidden md:flex md:gap-5 lg:flex gap-10 text-md text-green-600 font-semibold text-center '>
                    <li >Home</li>
                    <li >Properties</li>
                    <li >Designs</li>
                    <li >Search</li>
                    <li className='w-40'>About us</li>
                    <li className='w-40'>Contact us</li>
                    <LuUserCircle2 className='h-[30%] w-[15%] text-black' />
                    <button className='flex bg-green-600 text-white h-max p-[1%] text-sm w-[20%]'>Create Listing <MdKeyboardArrowDown /></button>
                </ul>
            </div>
        </div>
    )
}

export default NavComp
