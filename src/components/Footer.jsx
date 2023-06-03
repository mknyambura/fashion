import React from 'react'

function Footer() {
  return (
    <div className='bg-[#061A40] flex flex-col px-24 py-24 '>
        <div className='flex flex-row justify-between '>

            <div className='flex flex-col w-1/4 gap-8'>
                <h1 className='uppercase font-bold text-2xl text-white hover:cursor-pointer'>Fashion</h1>
                <p className='text-slate-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut sapiente quae nobis quia dolores odit reiciendis facere soluta perferendis, similique, cum quidem? 
                </p>
            </div>

            <div className='w-[60%] flex flex-row justify-between'>
                <div className='text-slate-400 flex flex-col gap-2'>
                    <h1 className='text-white font-bold text-xl'>Company</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>About us</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Career</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Blog</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>FAQs</h1>
                </div>

                <div className='text-slate-400 flex flex-col gap-2'>
                    <h1 className='text-white font-bold text-xl'>Need Help?</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Contact us</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Shipping Services</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Payment Options</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Return & Exchanges</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Unsubscribe</h1>
                </div>

                <div className='text-slate-400 flex flex-col gap-2'>
                    <h1 className='text-white font-bold text-xl'>Follow us</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Instagram</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Facebook</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Twitter</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Snapchat</h1>
                    <h1 className='text-[14px] hover:underline hover:cursor-pointer'>Pinterest</h1>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center  justify-between gap-8 mt-24 text-slate-400'>
            <div className='bg-slate-500 h-[1px] w-full'></div>
            <h1 className='text-[14px]'>Copyright @ Mercy Faith Nyambura Kariuki 2023. All Rights Reserved.</h1>
        </div>
    </div>
  )
}

export default Footer