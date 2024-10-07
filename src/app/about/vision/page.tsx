import Breadcrumb from '@/components/themebuilder/03-Breadcrumb';
import NavSide from '@/components/themebuilder/2-NavSide/01-NavSide';
import ActiveMenu from '@/components/themebuilder/2-NavSide/03-ActiveMenu';
import NormalMenu from '@/components/themebuilder/2-NavSide/04-NormalMenu';
import React from 'react';

export default function AboutVisionPage(): JSX.Element {
    return (
        <>
        <div className="absolute inset-0 flex justify-end items-end  pointer-events-none  z-0">
            <span className="text-[160px] font-bold text-[#d8d8d854] ">LUDESC</span>
        </div>
            {/* Content */}
            <div className="relative w-full flex justify-center items-center z-10">
                <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%] mb-[200px]">
                    <div className="lg:hidden mb-3">
                        <Breadcrumb
                            link={{ name: "Home", href: "/" }}
                            link2={{ name: "Our Vision" }}
                        />
                    </div>
                    {/* Content */}
                    <div className="flex lg:w-4/5 background-vision rounded-[30px]">
                        <div className="flex flex-col lg:flex-row w-full ">
                            {/* Spacer di desktop */}
                            <div className="p-[20px] lg:w-1/6"></div>

                            {/* Konten dengan gradien */}
                            <div className="w-full lg:w-5/6 px-5 pt-[100px]  lg:py-10 lg:pl-[250px] lg:pr-10 bg-gradient-to-b lg:bg-gradient-to-r from-[#fcfcfc00] via-[#fcfcfcf8] to-[#fcfcfc] ">
                                <h1 className="text-[#1c8e72] text-[40px] lg:text-[50px] font-bold mb-[-15px]">OUR</h1>
                                <p className="text-[#1C738E] text-[50px] lg:text-[68px] font-bold">VISION</p>
                                <p className='text-[#1C738E] mb-4'>
                                    To revolutionize lung health screening by leveraging advanced AI technology, ensuring early detection and effective management of lung diseases for everyone, everywhere.
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* NavSidebar */}
                    <NavSide>
                        <NormalMenu number="01" href="/about" text="About LUDESC" />
                        <NormalMenu number="02" href="/about/mission" text="Our Mission" />
                        <ActiveMenu number="03" href="/about/vision" text="Our Vision" />
                    </NavSide>
                </div>
            </div >
        </>
    );
}
