import React from 'react'

const Designer = () => {
    return (
        <>
            <div className='mt-14'>
                <p className='text-green-600 text-5xl font-semibold'>Meet our Designer</p>
                <p className='m-10 w-[70%] text-center ml-[15%]'>Lorem ipsum dolor sit amet consectetur. Proin sagittis duis et sed egestas turpis ut aliquet ultricies. Risus vulputate semper orci neque. Eu egestas et ac sit pellentesque nullam.</p>
            </div>
            <div className='grid grid-cols-2 m-[10%] md:flex md:gap-5 md:m-10 lg:flex lg:gap-10 lg:m-20 '>
                <div className='designer-div w-[28%] text-left pb-[3%]'>
                    <img src="https://1317092540.rsc.cdn77.org/MFbaA25USO6nYqs4gAdVd_zVUAk=/400x0/https://melbourne-university-publishing.s3.amazonaws.com/uploads/bf4/0dd/6fd/bf40dd6fd0148e423baf0117d1b2eab0bb967d88/K_Murphy.jpg" alt="" className='m-5 h-[70%] w-[80%] rounded-full' />
                    <p className='text-xl font-bold text-center'>Kathryn Murphy</p>
                    <p className='text-gray-400 text-center'>Designer</p>
                </div>
                <div className='designer-div w-[28%] text-left pb-[3%]'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-KqOMVDJihsxB1Qmf-_pVraQdtJPThBpVg&usqp=CAU" alt="" className='m-5 h-[70%] w-[80%] rounded-full' />
                    <p className='text-xl font-bold text-center'>Brooklyn Simmons</p>
                    <p className='text-gray-400 text-center'>Professional designer</p>
                </div>
                <div className='designer-div w-[28%] text-left pb-[3%]'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6i30QA8tn7_9OdfE2BksSPjSvpKWKLxRyKg&usqp=CAU" alt="" className='m-5 h-[70%] w-[80%] rounded-full' />
                    <p className='text-xl font-bold text-center'>Floyd Miles</p>
                    <p className='text-gray-400 text-center'>Interior Designer</p>
                </div>
                <div className='designer-div w-[28%] text-left pb-[3%]'>
                    <img src="https://pauljardine.co.uk/wp-content/uploads/2020/04/paul-jardine-web-designer-stockport.jpg" alt="" className='m-5 h-[70%] w-[80%] rounded-full' />
                    <p className='text-xl font-bold text-center'>Ronald Richards</p>
                    <p className='text-gray-400 text-center'>Designer</p>
                </div>
            </div>
        </>
    )
}

export default Designer
