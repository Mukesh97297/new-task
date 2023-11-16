import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
       <footer className='md:min-h-[504px] min-h-full bg-gradient-radial '>
            <div className='container mx-auto '>
                <div className=' inset-0  bg-transparent grid border-t-2 border-[#B4B6D029]'>
                        <div className='grid grid-cols-12  py-28' >
                            <div className='lg:col-span-4 col-span-12 md:py-0 py-3'>
                                <Link href="/" className='flex lg:justify-start  justify-center'>
                                    <Image src='/images/image 1.png' alt='' width={195} height={58} />
                                </Link>
                                <div className='py-6 flex lg:justify-start  justify-center gap-5'>
                                    <Link href="/" className=' items-center grid'>
                                        <Image src='/images/twitter.png' alt='' width={28} height={28} />
                                    </Link>
                                    <Link href="/" className=' items-center grid'>
                                        <Image src='/images/Vector (1).png' alt='' width={28} height={28} />
                                    </Link>
                                    <Link href="/" className=' items-center grid'>
                                        <Image src='/images/instagram-12 1.png' alt='' width={28} height={28} />
                                    </Link>
                                    <Link href="/" className=' items-center grid'>
                                        <Image src='/images/Vector (2).png' alt='' width={28} height={28} />
                                    </Link>
                                    <Link href="/" className=' items-center grid'>
                                        <Image src='/images/Vector (3).png' alt='' width={28} height={28} />
                                    </Link>
                                    <Link href="/" className=' items-center grid'>
                                        <Image src='/images/Vector (4).png' alt='' width={28} height={28} />
                                    </Link>
                                </div>
                            </div>
                            <div className='lg:col-span-2 col-span-12 lg:text-start text-center md:py-0 py-3'>
                                <h1 className=' font-semibold  text-sm text-white tracking-[1px]'>For Individuals</h1>
                                <ul className='static text-[#8F9BB7] font-normal text-base leading-6'>
                                    <li className='py-2'>DEXO Swap</li>
                                    <li className='py-2'>DEXO NFT Marketplace</li>
                                    <li className='pt-2'>DEXO Trading</li>
                                </ul>
                            </div>
                            <div className='lg:col-span-2 col-span-12 lg:text-start text-center md:py-0 py-3'>
                                <h1 className=' font-semibold  text-sm text-white  uppercase tracking-[1px]'>For Business</h1>
                                <ul className='text-[#8F9BB7] font-normal text-base leading-6'>
                                    <li className='py-2'>DEXO Trading</li>
                                    <li className='py-2'>DEXO Stacking </li>
                                </ul>
                            </div>
                            <div className='lg:col-span-2 col-span-12 lg:text-start text-center md:py-0 py-3'>
                                <h1 className=' font-semibold  text-sm text-white  uppercase tracking-[1px] pb-2'>Customer Center</h1>
                                <ul className='static text-[#8F9BB7] font-normal text-base leading-6'>
                                    <li className='py-2'>Getting started</li>
                                    <li className='py-2'>Support</li>
                                    <li className='pt-2'>FAQ</li>
                                    <li className='pt-2'>Terms of Service</li>
                                </ul>
                            </div>
                            <div className='lg:col-span-2 col-span-12 lg:text-start text-center md:py-0 py-3'>
                                <h1 className=' font-semibold  text-sm text-white  uppercase tracking-[1px] pb-2'>Company</h1>
                                <ul className='static text-[#8F9BB7] font-normal text-base leading-6'>
                                    <li className='py-2'>About DEXO</li>
                                    <li className='py-2'>Technologies</li>
                                    <li className='pt-2'>Membership</li>
                                    <li className='pt-2'>Certificates</li>
                                    <li className='pt-2'>Partnerships</li>
                                </ul>
                            </div>
                        </div>
                        <div className='text-center py-10'>
                            <span className=' font-normal text-sm text-center font-sans text-white opacity-[70%]'>Copyright © 2022 DEXO. All Rights Reserved. <br className='md:block hidden' /> Global Headquarters, DEXO, Baarerstrasse 98, 2300 Sig, Singapore</span>
                        </div>
                    </div>
                </div>
            </footer>

    </div>
  )
}

export default Footer
