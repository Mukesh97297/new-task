import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className=''>
      <div className='bg-back-color min-h-[1097px] flex justify-center  bg-cover'>
        <div className=' bg-hero-back-img bg-no-repeat min-h-[1097px] w-full bg-cover absolute'></div>
        <div className='container mx-auto'>
          <div className='grid grid-cols-12 justify-center'>
            <div className='col-span-12 flex justify-center items-center text-center'>
              <div className=' top-[186px] relative'>
                <span className='font-normal text-lg leading-5 gradient-text py-1'>BUILT ON BSC. POWERED BY YOU</span>
                 <h1 className=' text-[64px] font-bold leading-[73px] text-white tracking-[-0.01em] py-1'>The Future of Decentralized <br className='md:block hidden' /> Perpetual Exchange</h1>
                 <span className=' font-normal text-2xl leading-8 text-[#8F9BB7] py-1'>Trade BTC, ETH, BNB and other top cryptocurrencies <br className='md:block hidden' /> directly from your wallet</span>
                 <div className=' gap-10 flex justify-center py-10'>
                  <button className='rounded-[40px] min-h-[66px] min-w-[167px] text-white bg-gradient-custom shadow-xl'>Start Trading</button>
                  <button className='text-[#7A38FF] border border-[#7A38FF] rounded-[40px] min-h-[66px] min-w-[167px]'>Add Liquidifty</button>
                 </div>
                 <div className="top-[80px] relative">
                   <Image src="/images/Rectangle 8.png" height={436} width={980} alt='' />
                 </div>
              </div>
            </div>

          </div>
        
        </div>
       

      </div>
    </div>
  )
}

export default Hero
