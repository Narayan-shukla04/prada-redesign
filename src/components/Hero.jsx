import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-15 '>
        <h1 className='text-5xl mb-9'>Discover an inspiring and audacious gift selection for him & her.</h1>

        <div className='flex gap-20'>
           
           
           
            <div 
            className='hero-card'>

                <img 
                className='h-[90%] w-[90%] rounded-2xl object-cover object-top' 
                src="https://images.unsplash.com/photo-1714558712329-5c65b1d0113c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
               
                <button
                class="gift-btn"
                >Gift's for him</button>
            </div>







            <div 
            className='hero-card' >

                <img 
                className='h-[90%]  w-[90%] rounded-2xl object-cover object-top' 
                src="https://www.prada.com/content/dam/pradanux/pradasphere/2022/campaign/fw22_women/mosaic_1_v4/Card_2_DT.jpg" alt="" />
                <button
                class="gift-btn"
                >Gift's for her</button>
            </div>


        </div>
    </div>
  )
}

export default Hero