import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { BsArrowDown } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper' 
import '../index.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'


import Header from './Header'
import Footer from './Footer'

import dots from '../assets/dots.png'
import lady from '../assets/lady.png'
import lady1 from '../assets/lady1.png'
import lady2 from '../assets/lady2.png'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import seller1 from '../assets/seller1.png'
import seller2 from '../assets/seller2.png'
import seller3 from '../assets/seller3.png'
import seller4 from '../assets/seller4.png'
import seller5 from '../assets/seller5.png'
import seller6 from '../assets/seller6.png'



function Home() {
    const [counterOn, setCounterOn] = useState(false)

  return (
    <div className='scrollbar-hide'>
        <div className='bg-[#BAD7F2] flex flex-col gap-8 p-16'>
            <Header/>
            <div className='flex flex-row justify-between gap-16 mb-16'>
                <div className='w-1/2 relative flex flex-col gap-8'>
                    <h1 className='font-bold text-7xl mt-[20%]'>Make Your Style Looks Perfect</h1>
                    <p>
                        Our collection will help your fashion looks better and we will provide the best product for you.
                    </p>
                    <button className='w-[30%] rounded-none uppercase px-6 py-2 bg-[#003559] text-white'>
                        Shop now
                    </button>
                    <div className='absolute top-0 left-[-8%]'>
                        <img src={dots} alt="" />
                    </div>
                </div>
                <div className='w-1/2 flex relative'>
                    <div className='flex mt-8'>
                        <img src={lady} alt="" />
                    </div>
                    <div className='flex absolute top-[0%] left-[-5%]'>
                        <img src={dots} alt="" />
                    </div>
                    <button className='absolute bottom-[-5%] right-5 bg-[#003559] px-5 py-5 text-white text-2xl rounded-none'>
                        <BsArrowDown/>
                    </button>
                </div>
            </div>

        </div>
        
        <div className='relative scrollbar-hide'>
            <div className='flex flex-col gap-8 m-12  items-center'>
                <h4 className='font-bold text-5xl'>Our Featured Collection</h4>
            </div>
            <Swiper 
                freeMode={true}
                grabCursor={true}
                modules={FreeMode}
                slidesPerView={3}
                spaceBetween={30}
                className='mySwiper flex flex-row items-center justify-start overflow-x-scroll overflow-y-hidden m-16 scrollbar-hide'
            >
                <SwiperSlide>
                    <div className='flex flex-col px-14 py-14 gap-8'>
                        <img src={product1} alt="" />
                        <div className='flex flex-col'>
                            <h1 className='text-sm'>Frilled Sleeves Midi Dress</h1>
                            <h1 className='text-xl font-bold opacity-70'>$200</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col px-14 py-14 gap-8'>
                        <img src={product2} alt="" />
                        <div className='flex flex-col '>
                            <h1 className='text-sm'>Round Neck Solid Top</h1>
                            <h1 className='text-xl font-bold opacity-70'>$150</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col px-14 py-14 gap-8'>
                        <img src={product3} alt="" />
                        <div className='flex flex-col '>
                            <h1 className='text-sm'>White Rayon Short Blouson Crop Top</h1>
                            <h1 className='text-xl font-bold opacity-70'>$250</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col px-14 py-14 gap-8'>
                        <img src={product1} alt="" />
                        <div className='flex flex-col '>
                            <h1 className='text-sm'>Frilled Sleeves Midi Dress</h1>
                            <h1 className='text-xl font-bold opacity-70'>$200</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col px-14 py-14 gap-8'>
                        <img src={product2} alt="" />
                        <div className='flex flex-col '>
                            <h1 className='text-sm'>Round Neck Solid Top</h1>
                            <h1 className='text-xl font-bold opacity-70'>$150</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col px-14 py-14 gap-8'>
                        <img src={product3} alt="" />
                        <div className='flex flex-col '>
                            <h1 className='text-sm'>White Rayon Short Blouson Crop Top</h1>
                            <h1 className='text-xl font-bold opacity-70'>$250</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col px-14 py-14 gap-8'>
                        <img src={product1} alt="" />
                        <div className='flex flex-col '>
                            <h1 className='text-sm'>Frilled Sleeves Midi Dress</h1>
                            <h1 className='text-xl font-bold opacity-70'>$200</h1>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        <div className='bg-[#BAD7F2] flex flex-row justify-evenly'>
            <div className='relative flex px-20 py-20 text-[#003559]'>
                <img src={lady1} alt="" />
                <div className='absolute left-8 top-14'>
                    <img src={dots} alt="" />
                </div>
                <button className='explore-button absolute text-[#003559] bottom-[20%] hover:bg-[#003559] hover:text-white right-[38%] font-bold uppercase px-6 py-2 rounded-none bg-white'>Explore Now</button>
            </div>
            <div className='flex flex-col w-1/2 justify-evenly m-16'>
                <h1 className='w-3/4 font-bold text-6xl items-center'>
                    Best Fashion Brand
                </h1>
                <p className='w-3/4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed ullamcorper congue eros, eget tincidunt ipsum eleifend ut orem ipsum dolor sit amet consectetur adipiscing elit Sed ullamcorper congue eros eleifend ut tincidunt ipsum .
                </p>
                {/* <div> */}
                    <ScrollTrigger  onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className='flex flex-row gap-4 w-1/2'>
                            <div className='bd flex flex-col items-center p-10'>
                                <h5 className='font-bold text-4xl'>
                                    {counterOn && 
                                        <CountUp start={0} end={250} duration={4} delay={0}/>
                                    }
                                +
                                </h5>
                                <p className='text-sm font-semibold'>Store Branches</p>
                            </div>

                            <div className='bg-[#003559] flex flex-col items-center text-white p-10'>
                                <h5 className='font-bold text-4xl'>
                                    {counterOn && 
                                        <CountUp start={0} end={7000} duration={4} delay={0}/>
                                    }
                                +
                                </h5>
                                <p className='text-sm font-semibold'>Product Sold</p>
                            </div>
                                
                            <div className='bd flex flex-col items-center p-10'>
                                <h5 className='font-bold text-4xl'>
                                    $
                                    {counterOn && 
                                        <CountUp start={0} end={3900} duration={4} delay={0}/>
                                    }
                                +
                                </h5>
                                <p className='text-sm font-semibold'>Transaction</p>
                            </div>
                        </div>
                    </ScrollTrigger>
                {/* </div> */}
            </div>
        </div>

        <div className='flex flex-col items-center mb-32'>
            <div className='flex flex-col gap-8 items-center mt-16 mb-16'>
                <h1 className='font-bold text-7xl'>Our Best Sellers</h1>
                <div className='w-3/4 uppercase flex flex-row justify-evenly'>
                    <h1 className='underline'>All</h1>
                    <h1 className='hover:underline'>Tops</h1>
                    <h1 className='hover:underline'>Tshirts</h1>
                    <h1 className='hover:underline'>Pants</h1>
                    <h1 className='hover:underline'>Shoes</h1>
                </div>
            </div>

            <div className='flex flex-row flex-wrap gap-8 items-center justify-center'>
                <div className='flex flex-col gap-3'>
                    <img src={seller1} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-sm font-bold'>Lorem Ipsum</h1>
                        <h1 className='font-bold text-lg'>$200</h1>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <img src={seller2} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-sm font-bold'>Lorem Ipsum</h1>
                        <h1 className='font-bold text-lg'>$150</h1>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <img src={seller3} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-sm font-bold'>Lorem Ipsum</h1>
                        <h1 className='font-bold text-lg'>$250</h1>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <img src={seller4} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-sm font-bold'>Lorem Ipsum</h1>
                        <h1 className='font-bold text-lg'>$100</h1>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <img src={seller5} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-sm font-bold'>Lorem Ipsum</h1>
                        <h1 className='font-bold text-lg'>$250</h1>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <img src={seller6} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-sm font-bold'>Lorem Ipsum</h1>
                        <h1 className='font-bold text-lg'>$300</h1>
                    </div>
                </div>

                
            </div>
        </div>
        <div className='bg-[#BAD7F2] flex flex-row justify-between px-16 py-32'>
            <div className='flex flex-col gap-8'>
                <h1 className='font-bold text-7xl'>Deal Of The Day</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <div className='flex flex-row items-center gap-8'>
                    <button disabled="disabled" className='flex flex-col rounded-none bg-[#003559] px-10 py-10 text-white'>
                        <h1 className='font-bold text-3xl'>03</h1>
                        <h1 className='font-extralight'>Days</h1>
                    </button>
                    <button disabled="disabled" className='flex flex-col rounded-none bg-[#003559] px-10 py-10 text-white'>
                        <h1 className='font-bold text-3xl'>08</h1>
                        <h1 className='font-extralight'>Hours</h1>
                    </button>
                    <button disabled="disabled" className='flex flex-col rounded-none bg-[#003559] px-10 py-10 text-white'>
                        <h1 className='font-bold text-3xl'>09</h1>
                        <h1 className='font-extralight'>Minutes</h1>
                    </button>
                </div>
                <button className='w-[35%] bg-[#003559] px-6 py-2 text-white font-bold rounded-none'>Shop Now</button>
            </div>
            <div className='flex w-1/2'>
                <div className='flex relative'>
                    <img src={lady2} alt="" className='w-full'/>
                    <div className='absolute top-0 right-[-10%]'>
                        <img src={dots} alt="" />
                    </div>
                    <div className='absolute bottom-[-10%] left-[-10%]'>
                        <img src={dots} alt="" />
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home