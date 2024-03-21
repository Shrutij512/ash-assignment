import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import phone from "../images/smartphone-interface.jpg"
import logos from "../images/logos.png"

const Playstore = () => {
    return (
        <div className='playstore-div flex bg-gray-100 m-[10%] p-[3%] text-left h-[290px]'>
            <div>
                <p className='text-3xl font-semibold '>Download Trophy Nig. App</p>
                <p >And never miss out any update</p>
                <div className='text-xl flex mt-4'>
                    <FcCheckmark />
                    <p className='ml-1'>
                        Get to know about newly posted Properties as soon as they are posted
                    </p>
                </div>
                <div className='text-xl flex mt-2'>
                    <FcCheckmark />
                    <p className='ml-1'>
                        Manage your Properties with ease and instant alerts about Properties
                    </p>
                </div>
                <div>
                    <img src={logos} alt="logos" className='w-[50%] mt-5' />
                </div>
            </div>
            <div>
                <img src={phone} alt="phone" className='ml-[25%] mt-[5%]' />
            </div>
        </div>
    )
}

export default Playstore
