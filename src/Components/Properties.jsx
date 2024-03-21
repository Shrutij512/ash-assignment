import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Properties = () => {

    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className='mt-10'>
                <div className='text-green-600 text-5xl font-semibold'>Featured Properties</div>
                <p className='m-10 w-[70%] text-center ml-[15%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore consectetur inventore a minima odit porro laudantium cumque sit quo omnis officiis fugiat veniam, nisi beatae voluptas ullam harum velit.</p>
            </div>

            <div className='slider m-20'>
                <Slider {...settings}>
                    <div className='card-div h-[450px] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                        {/* <button className=''>Sale Now</button> */}
                        <img src="https://www.d-e-lab.com/wp-content/uploads/2022/03/SHMB6-920x517.jpg" alt="" className='h-[50%] lg:h-[75%] rounded-lg' />
                        <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                        <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                        <p className='m-1 ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        <p className='m-3 ml-5'>Managed by JR Developers </p>
                    </div>
                    <div className='card-div h-[450px] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                        <img src="https://foyr.com/learn/wp-content/uploads/2021/06/shiny-surfaces-L-shaped-kitchen-design.jpg" alt="" className='h-[50%] lg:h-[75%] w-[100%] rounded-lg' />
                        <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                        <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                        <p className='ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        <p className='m-3 ml-5'>Managed by JR Developers </p>
                    </div>
                    <div className='card-div h-[450px] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                        <img src="https://www.thespruce.com/thmb/cPaZ1eA5WqKLYH4kSry7wrMYsDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EleanorEmail-847750221ae1499c972c977f279d2d5e.png" alt="" className='h-[50%] lg:h-[75%] w-[100%] rounded-lg' />
                        <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                        <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                        <p className='ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        <p className='m-3 ml-5'>Managed by JR Developers </p>
                    </div>
                    <div className='card-div h-[450px] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                        {/* <button className=''>Sale Now</button> */}
                        <img src="https://www.d-e-lab.com/wp-content/uploads/2022/03/SHMB6-920x517.jpg" alt="" className='h-[50%] lg:h-[75%] w-[100%] rounded-lg' />
                        <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                        <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                        <p className='m-1 ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        <p className='m-3 ml-5'>Managed by JR Developers </p>
                    </div>
                    <div className='card-div h-[450px] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                        <img src="https://foyr.com/learn/wp-content/uploads/2021/06/shiny-surfaces-L-shaped-kitchen-design.jpg" alt="" className='h-[50%] lg:h-[75%] w-[100%] rounded-lg' />
                        <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                        <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                        <p className='ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        <p className='m-3 ml-5'>Managed by JR Developers </p>
                    </div>
                    <div className='card-div h-[450px] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                        <img src="https://www.thespruce.com/thmb/cPaZ1eA5WqKLYH4kSry7wrMYsDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EleanorEmail-847750221ae1499c972c977f279d2d5e.png" alt="" className='h-[50%] lg:h-[75%] w-[100%] rounded-lg' />
                        <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                        <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                        <p className='ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        <p className='m-3 ml-5'>Managed by JR Developers </p>
                    </div>  <div className='card-div h-[450px] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                        {/* <button className=''>Sale Now</button> */}
                        <img src="https://www.d-e-lab.com/wp-content/uploads/2022/03/SHMB6-920x517.jpg" alt="" className='h-[50%] lg:h-[75%] w-[100%] rounded-lg' />
                        <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                        <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                        <p className='m-1 ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        <p className='m-3 ml-5'>Managed by JR Developers </p>
                    </div>
                    <div className='card-div h-[450px] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                        <img src="https://foyr.com/learn/wp-content/uploads/2021/06/shiny-surfaces-L-shaped-kitchen-design.jpg" alt="" className='h-[50%] lg:h-[75%] w-[100%] rounded-lg' />
                        <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                        <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                        <p className='ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        <p className='m-3 ml-5'>Managed by JR Developers </p>
                    </div>
                    <div className='card-div h-[450px] mb-4 md:m-0 lg:m-0 lg:w-[28%] md:w-[25%] text-left pb-[3%] md:pb-[10%]'>
                        <img src="https://www.thespruce.com/thmb/cPaZ1eA5WqKLYH4kSry7wrMYsDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EleanorEmail-847750221ae1499c972c977f279d2d5e.png" alt="" className='h-[50%] lg:h-[75%] w-[100%] rounded-lg' />
                        <p className='m-1 ml-5 mt-3'>Mini Flat in Lekki Phase</p>
                        <p className='m-1 text-green-600 font-semibold ml-5'>N 2,500,000/sq ft</p>
                        <p className='ml-5'><span className='font-bold'>3</span> Bed <span className='font-bold'>2</span> bath</p>
                        <p className='m-3 ml-5'>Managed by JR Developers </p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Properties
