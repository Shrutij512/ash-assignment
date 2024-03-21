import React from 'react'

const TopRated = () => {
    return (
        <>
            <div className='mt-10'>
                <p className='text-green-600 text-5xl font-semibold'>Top Rated Properties</p>
                <p className='m-10 w-[70%] text-center ml-[15%]'>Lorem ipsum dolor sit amet consectetur. Proin sagittis duis et sed egestas turpis ut aliquet ultricies. Risus
                    vulputate semper orci neque. Eu egestas et ac sit pellentesque nullam.</p>
            </div>
            <div className='flex gap-5 m-20'>
                <div className='card-div bg-gray-100 flex w-[43%] text-left pb-[8%]'>
                    <img src="https://psgroup.in/blog/wp-content/uploads/2021/01/Navyom-Living-dining.jpg" alt="" className='w-[50%] h-[158%]' />
                    <div className='m-3' >
                        <p className='text-md font-bold ml-3'>Mapkson Gardenia</p>
                        <p className='text-gray-400 ml-3'>Mapkson Builders</p>
                        <p className='text-green-600 font-semibold ml-3'>Greater Kailash, Delhi</p>
                        <p className='ml-3'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        {/* <p className='ml-3 text-xs text-gray-400'>Managed by JR Developers</p> */}
                    </div>

                </div>
                <div className='card-div bg-gray-100 flex w-[43%] text-left pb-[8%]'>
                    <img src="https://tds-images.thedailystar.net/upload/gallery/image/arts/purchasing-your-flat.jpg" alt="" className='w-[50%] h-[158%]' />
                    <div className='m-3'>
                        <p className='text-md font-bold ml-3'>Mapkson Gardenia</p>
                        <p className='text-gray-400 ml-3'>Mapkson Builders</p>
                        <p className='text-green-600 font-semibold ml-3'>Greater Kailash, Delhi</p>
                        <p className='ml-3'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        {/* <p className='ml-3 text-xs text-gray-400'>Managed by JR Developers</p> */}
                    </div>
                </div>
                <div className='card-div bg-gray-100 flex w-[43%] text-left pb-[8%]'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrkL6WWsLVXZCCbIyOWGLxJhp00oUt_4hVw&usqp=CAU" alt="" className='w-[50%] h-[158%]' />
                    <div className='m-3'>
                        <p className='text-md font-bold ml-3'>Mapkson Gardenia</p>
                        <p className='text-gray-400 ml-3'>Mapkson Builders</p>
                        <p className='text-green-600 font-semibold ml-3'>Greater Kailash, Delhi</p>
                        <p className='ml-3'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        {/* <p className='ml-3 text-xs text-gray-400'>Managed by JR Developers</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopRated
