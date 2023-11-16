'use client'
import React from 'react'
import Image from 'next/image';
import { useState, useEffect,useRef } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navbarRef = useRef(null);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    // close navbar and dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsOpen(false);
            setIsDropdownOpen(false);
          }
        };
    
        window.addEventListener('click', handleClickOutside);
    
        return () => {
          window.removeEventListener('click', handleClickOutside);
        };
      }, []);
    return (
        <nav className=" border border-white border-opacity-10  w-full md:absolute relative min-h-[106px] flex items-center " ref={navbarRef}>
            <div className="container mx-auto  md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="" >
                            <Image src="/images/image 1.png" alt="Your Company" width={151} height={45} />
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="md:hidden relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400  hover-text-white "
                        onClick={toggleNavbar}
                    >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal text-lg leading-5  rounded-lg  md:flex-row md:space-x-8 md:mt-0 gap-12 text-white">
                        <li><Link href="/" className="hover:text-blue-500">Trade</Link></li>
                        <li><Link href="/pages/services" className="hover:text-blue-500">Swap</Link></li>
                        <li><Link href="/pages/about" className="hover:text-blue-500">Stacking</Link></li>
                        <li><Link href="/pages/blog" className="hover:text-blue-500">Pools</Link></li>
                        <li><Link href="/pages/blog" className="hover:text-blue-500">NFT Market</Link></li>
                    </ul>
                </div>
                <div className={`md:flex items-center gap-3 ${isOpen ? 'block' : 'hidden'}`}>
                <li><Link href="/pages/blog" className="hover:text-blue-500 text-white">Sign In</Link></li>
                  <Link href="/pages/contact">
                  <button type="button" className="bg-gradient-custom min-h-[47px] min-w-[112px] shadow-xl rounded-[48px] font-normal text-lg leading-5 text-white">Sign Up</button>
                  </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;



















