import React from 'react'

const Properties = () => {
    return (
        <>
            <div className='mt-10'>
                <div className='text-green-600 text-5xl font-semibold'>Featured Properties</div>
                <p className='m-10 w-[70%] text-center ml-[15%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore consectetur inventore a minima odit porro laudantium cumque sit quo omnis officiis fugiat veniam, nisi beatae voluptas ullam harum velit.</p>
            </div>
            <div className='block md:flex md:gap-5 lg:flex lg:gap-10 ml-[10%]'>
                <div className='card-div w-[85%] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                    {/* <button className=''>Sale Now</button> */}
                    <img src="https://www.d-e-lab.com/wp-content/uploads/2022/03/SHMB6-920x517.jpg" alt="" className='h-[75%] rounded-lg' />
                    <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                    <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                    <p className='m-1 ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                    <p className='m-3 ml-5'>Managed by JR Developers </p>
                </div>
                <div className='card-div w-[85%] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                    <img src="https://foyr.com/learn/wp-content/uploads/2021/06/shiny-surfaces-L-shaped-kitchen-design.jpg" alt="" className='h-[75%] rounded-lg' />
                    <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                    <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                    <p className='ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                    <p className='m-3 ml-5'>Managed by JR Developers </p>
                </div>
                <div className='card-div w-[85%] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                    <img src="https://www.thespruce.com/thmb/cPaZ1eA5WqKLYH4kSry7wrMYsDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EleanorEmail-847750221ae1499c972c977f279d2d5e.png" alt="" className='h-[75%] rounded-lg' />
                    <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                    <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                    <p className='ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                    <p className='m-3 ml-5'>Managed by JR Developers </p>
                </div>
            </div>
        </>
    )
}

export default Properties
