import Image from 'next/image'
import React from 'react'

const Dex = () => {
    return (
        <div className=' bg-gradient-radial'>
            <div className='container mx-auto py-60'>
                <div className='text-center'>
                    <span className='font-bold text-[56px] leading-[64px] text-white' style={{ textShadow: '0px 0px 16px rgba(58, 54, 255, 0.24), 0px 0px 64px rgba(225, 194, 255, 0.48)' }}>The Ultimate DEX</span>
                    <p className='text-[#8F9BB7] font-normal text-2xl text-center'>Trade against zero spread and deep liquidity with <br className='md:block hidden' /> advanced order types such as limit, stop-loss, and <br className='md:block hidden' /> more. Earn fees for providing liquidity in one click</p>
                </div>
                <div className='grid grid-cols-12 gap-10 py-20'>
                    <div className='lg:col-span-4 col-span-12'>
                        <div className='relative border border-solid border-gray-300 border-opacity-[10%] rounded-[20px] justify-center flex  shadow-inner w-full' style={{
                            background: 'radial-gradient(53.11% 106.23% at 50% 0%, rgba(0, 196, 255, 0.12) 0%, rgba(14, 19, 48, 0) 100%), linear-gradient(0deg, rgba(180, 182, 208, 0.1), rgba(180, 182, 208, 0.1))'
                        }}>
                            <div className='lg:h-80  h-auto pt-[40px] text-center'>
                                <div className='flex justify-center'>
                                    <Image src="/images/icon 1.png" height={88} width={88} alt='' />
                                </div>
                                <h3 className='font-bold text-2xl text-white leadind-[27px] pt-5'>Swap</h3>
                                <p className=' font-normal text-lg leading-6 text-[#8F9BB7] pt-2'>Trade your favorite pairs on your <br className='md:block hidden' /> favorite chains through the Swapr<br className='md:block hidden' /> interface.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-4 col-span-12'>
                        <div className='relative border border-solid border-gray-300 border-opacity-[10%] rounded-[20px] justify-center flex  shadow-inner w-full'style={{ background: 'radial-gradient(53.11% 106.23% at 50% 0%, rgba(112, 0, 255, 0.12) 0%, rgba(14, 19, 48, 0) 100%), linear-gradient(0deg, rgba(180, 182, 208, 0.1), rgba(180, 182, 208, 0.1))'}}>
                            <div className='lg:h-80  h-auto pt-[40px] text-center'>
                                <div className='flex justify-center'>
                                    <Image src="/images/icon 1 (1).png" height={88} width={88} alt='' />
                                </div>
                                <h3 className='font-bold text-2xl text-white leadind-[27px] pt-5'>Eco-Routing</h3>
                                <p className=' font-normal text-lg leading-6 text-[#8F9BB7] pt-2'>The eco-router ensures the best price<br className='md:block hidden' /> through established DEXes with no<br className='md:block hidden' /> extra fees!</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-4 col-span-12'>
                        <div className='relative border border-solid border-gray-300 border-opacity-[10%] rounded-[20px] justify-center flex  shadow-inner w-full'style={{ background: 'radial-gradient(53.11% 106.23% at 50% 0%, rgba(119, 255, 97, 0.12) 0%, rgba(14, 19, 48, 0) 100%), linear-gradient(0deg, rgba(180, 182, 208, 0.1), rgba(180, 182, 208, 0.1))'}}>
                            <div className='lg:h-80  h-auto pt-[40px] text-center'>
                                <div className='flex justify-center'>
                                    <Image src="/images/icon 1 (2).png" height={88} width={88} alt='' />
                                </div>
                                <h3 className='font-bold text-2xl text-white leadind-[27px] pt-5'>Note</h3>
                                <p className=' font-normal text-lg leading-6 text-[#8F9BB7] pt-2'>LPs on the Swapr protocol can vote to<br className='md:block hidden' /> adjust the fees on their pools. Lorem<br className='md:block hidden' /> ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-4 col-span-12'>
                        <div className='relative border border-solid border-gray-300 border-opacity-[10%] rounded-[20px] justify-center flex  shadow-inner w-full'style={{ background: 'linear-gradient(0deg, rgba(180, 182, 208, 0.1), rgba(180, 182, 208, 0.1)), radial-gradient(53.11% 106.23% at 50% 0%, rgba(255, 187, 0, 0.12) 0%, rgba(14, 19, 48, 0) 100%)'}}>
                            <div className='lg:h-80  h-auto pt-[40px] text-center'>
                                <div className='flex justify-center'>
                                    <Image src="/images/icon 4.png" height={88} width={88} alt='' />
                                </div>
                                <h3 className='font-bold text-2xl text-white leadind-[27px] pt-5'>Farming</h3>
                                <p className=' font-normal text-lg leading-6 text-[#8F9BB7] pt-2'>Users can participate in permissionless<br className='md:block hidden' /> farming campaigns directly in the<br className='md:block hidden' /> Swapr interface.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-4 col-span-12'>
                        <div className='relative border border-solid border-gray-300 border-opacity-[10%] rounded-[20px] justify-center flex  shadow-inner w-full'style={{ background: 'linear-gradient(0deg, rgba(180, 182, 208, 0.1), rgba(180, 182, 208, 0.1)), radial-gradient(53.11% 106.23% at 50% 0%, rgba(255, 82, 131, 0.12) 0%, rgba(14, 19, 48, 0) 100%)'}}>
                            <div className='lg:h-80  h-auto pt-[40px] text-center'>
                                <div className='flex justify-center'>
                                    <Image src="/images/icon 1 (3).png" height={88} width={88} alt='' />
                                </div>
                                <h3 className='font-bold text-2xl text-white leadind-[27px] pt-5 '>Bridge</h3>
                                <p className=' font-normal text-lg leading-6 text-[#8F9BB7] pt-2'>Assets can be moved across different<br className='md:block hidden' /> blockchains within minutes. Lorem<br className='md:block hidden' /> ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-4 col-span-12'>
                        <div className='relative border border-solid border-gray-300 border-opacity-[10%] rounded-[20px] justify-center flex  shadow-inner w-full'style={{ background: 'radial-gradient(53.11% 106.23% at 50% 0%, rgba(53, 233, 227, 0.12) 0%, rgba(14, 19, 48, 0) 100%), linear-gradient(0deg, rgba(180, 182, 208, 0.1), rgba(180, 182, 208, 0.1))'}}>
                            <div className='lg:h-80  h-auto pt-[40px] text-center'>
                                <div className='flex justify-center'>
                                    <Image src="/images/icon 1 (4).png" height={88} width={88} alt='' />
                                </div>
                                <h3 className='font-bold text-2xl text-white leadind-[27px] pt-5'>DAO Governance</h3>
                                <p className=' font-normal text-lg leading-6 text-[#8F9BB7] pt-2'>DEXO is controlled by the community<br className='md:block hidden' /> so all major decisions are done openly<br className='md:block hidden' /> and though decentralized</p>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Dex
