"use client";

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { HiMenuAlt3, HiX, HiOutlineShoppingCart } from 'react-icons/hi';
import MenuMobile from "./3-MenuMobile/MenuMobile";

export default function Navbar() {
    const [isClick, setIsClick] = useState(false);


    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    };

    return (
        <div className='sticky top-0 inset-x-0 z-20 lg:mb-7 border-b border-[#0000000c] bg-white'>
            <div className='w-[100%] lg:w-[90%] mx-auto px-4 sm:px-6 flex items-center justify-between h-20'>
                <Link href="/">
                    <Image src="/images/LogoLudesc.svg" alt="Logo" width={130} height={60} />
                </Link>
                <div className="w-3/5">
                    {/* <MenuDekstop/> */}
                </div>
                <div className="w-1/5 flex">
                    {/* <div className="w-1/2 flex justify-around">
                        <ul className="hidden lg:flex">
                            <li className="mx-2">EN</li>
                            <li className="mx-2">ID</li>
                        </ul>
                    </div> */}
                    <div className="hidden w-1/2 md:flex justify-end">
                        <HiOutlineShoppingCart size={24} className='' />
                    </div>
                </div>
                <button
                    className="lg:hidden p-2 rounded "
                    onClick={toggleNavbar}
                >
                    {isClick ? (
                        <HiX size={24} />
                    ) : (
                        <HiMenuAlt3 size={24} />
                    )}
                </button>
            </div>

            {isClick && (
                <MenuMobile/>
            )}
        </div>
    );
}
