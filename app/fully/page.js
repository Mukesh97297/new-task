import Image from 'next/image'
import React from 'react'

const Fully = () => {
    return (
        <div className='bg-gradient-radial'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='lg:col-span-6 col-span-12'>
                        <div className='py-10'>
                            <span className='font-bold lg:text-[56px] text-4xl lg:leading-[64px] leading-10 text-white pt-5' style={{ textShadow: '0px 0px 16px rgba(58, 54, 255, 0.24), 0px 0px 64px rgba(225, 194, 255, 0.48)' }}>Fully Decentralized.<br className='md:block hidden' /> Completely Secure</span>
                            <p className='text-[#8F9BB7] font-normal lg:text-2xl text-xl lg:leading-8 leading-6 pt-5'>DEXO aims to connect all isolated blockchains and<br className='md:block hidden' /> establish a cross-chain asset exchange network,<br className='md:block hidden' /> providing all necessary underlying support for the Defi<br className='md:block hidden' /> ecosystem. Let every digital asset holder experience a<br className='md:block hidden' /> truly safe, free and transparent Defi service.</p>
                            <div className='pt-5'>
                                <div className=' gap-2 flex items-center py-3'>
                                    <div>
                                        <Image src="/images/Group 12.png" width={20} height={20} alt='' />
                                    </div>
                                    <div>
                                        <span className='font-normal lg:text-2xl text-xl lg:leading-7 leading-5 tracking-[-1%] text-white'>Constant reviews and testing of our platform</span>
                                    </div>
                                </div>
                                <div className=' gap-2 flex items-center py-3'>
                                    <div>
                                        <Image src="/images/Group 12.png" width={20} height={20} alt='' />
                                    </div>
                                    <div>
                                        <span className='font-normal lg:text-2xl text-xl lg:leading-7 leading-5 tracking-[-1%] text-white'>Your funds are as secure as possible</span>
                                    </div>
                                </div>
                                <div className=' gap-2 flex items-center py-3'>
                                    <div>
                                        <Image src="/images/Group 12.png" width={20} height={20} alt='' />
                                    </div>
                                    <div>
                                        <span className='font-normal lg:text-2xl text-xl lg:leading-7 leading-5tracking-[-1%] text-white'>Fully decentralized and non-custodial</span>
                                    </div>
                                </div>
                                <div className=' gap-2 flex items-center py-3'>
                                    <div>
                                        <Image src="/images/Group 12.png" width={20} height={20} alt='' />
                                    </div>
                                    <div>
                                        <span className='font-normal lg:text-2xl text-xl lg:leading-7 leading-5 tracking-[-1%] text-white'>Built by experienced blockchain developers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-6 col-span-12'>
                         <div className='flex items-center justify-center py-10'>
                            <Image src="/images/Group 24.png" height={542.76} width={434.45} alt='' />
                         </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Fully
