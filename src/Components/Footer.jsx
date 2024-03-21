import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";

const Footer = () => {
    return (
        <div className='block sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 bg-green-500 text-white p-10 text-left pl-[10%]'>
            <div className='sm:w-[60%] md:w-[50%] lg:w-[45%]'>
                <div className='text-center mb-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_aqXJr9IOfMKmDRwqUK1HrXWqk0QPZtD6Q&usqp=CAU" alt="" className='w-[30%] ml-[35%] mix-blend-color-burn' />
                    <p className='text-3xl font-bold'>Trophy Nig .</p>
                    <p className='text-sm text-gray-600'>Property Limited</p>
                </div>
                <div>
                    <p className='text-lg mb-2'>Follow us on:</p>
                    <div className='flex text-3xl mb-2'>
                        <CiFacebook />
                        <FaInstagram />
                        <FaWhatsapp />
                    </div>
                    <ul >
                        <li className='mb-1 flex gap-1 text-center'><IoMail /><p className='text-sm'>info@trophynig.com</p> </li>
                        <li className='mb-1 flex gap-1 text-center'><MdAddIcCall /><p className='text-sm'>8549652148</p></li>
                        <li className='mb-1 flex text-center'> <TbAddressBook className='text-2xl' /><p className='text-sm'>2972 Westheimer Rd. Santa Ana,Illinois 85486.</p></li>
                    </ul>
                </div>
            </div>
            <div className='mt-10'>
                <p className='text-3xl mb-3'>Company</p>
                <ul>
                    <li className='text-lg mb-1 font-light'>About us</li>
                    <li className='text-lg mb-1 font-light'>Contact us</li>
                    <li className='text-lg mb-1 font-light'>Pricing</li>
                    <li className='text-lg mb-1 font-light'>Terms & Condition</li>
                    <li className='text-lg mb-1 font-light'>Report a Problem</li>
                    <li className='text-lg mb-1 font-light'>Private Policy</li>
                </ul>
            </div>
            <div className='mt-12'>
                <p className='text-xl mb-5'>Stay upto date</p>
                <input type="text" placeholder='Enter your Email Address' className='mb-5 bg-gray-200 p-2 w-[80%]' />
                <br />
                <p className='text-black font-bold bg-white  p-2 pl-5 w-[65%]'>Subscribe for <span className='text-green-500'>Newsletter</span> </p>
            </div>
        </div>
    )
}

export default Footer
