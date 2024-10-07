import Breadcrumb from '@/components/themebuilder/03-Breadcrumb';
import NavSide from '@/components/themebuilder/2-NavSide/01-NavSide';
import BorderNav from '@/components/themebuilder/2-NavSide/02-BorderNav';
import ActiveMenu from '@/components/themebuilder/2-NavSide/03-ActiveMenu';
import NormalMenu from '@/components/themebuilder/2-NavSide/04-NormalMenu';
import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
    return (
        <>
        <div className="absolute inset-0 flex justify-end items-end  pointer-events-none  z-0">
            <span className="text-[160px] font-bold text-[#d8d8d854] ">LUDESC</span>
        </div>
            {/* <!-- Content --> */}
            <div className="relative w-full flex justify-center items-center z-10">
                <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%] mb-[100px]">
                    <div className="lg:hidden mb-3">
                        <Breadcrumb
                            link={{ name: "Home", href: "/" }}
                            link2={{ name: "Introducing LUDESC" }}
                        />
                    </div>
                    <div className="md:w-4/5 w-full flex flex-col md:flex-row justify-center items-start  ">
                        {/* <!-- Item 2 (Image) --> */}
                        <div className="w-full md:w-[55%] md:order-last flex justify-center items-center ml-5">
                            <div className="w-[200px] sm:w-[400px]">
                                <Image
                                    src="/images/HeroImage.png"
                                    alt="Hero Image"
                                    width={700}
                                    height={700}
                                />
                            </div>
                        </div>

                        {/* <!-- Item 1 (Text) --> */}
                        <div className="w-full md:w-[45%] lg:mt-0 mt-8  ">
                            <div>
                                <h1 className="text-[#1C738E] text-[30px] lg:text-[46px] font-bold mb-[-5px] ">AI-Powered</h1>
                                <p className="text-[#1c8e72] text-[23px] lg:text-[38px] font-bold">Lung Disease Screening & Telemedicine</p>
                                <p className="text-[#828383] text-[15px] font-300 mb-5 mt-2 leading-[1.6rem]">
                                    System to help patients and medical personnel in early screening for lung
                                    disease with AI technology in the form of self-screening and telemedicine quickly, easy
                                    and cheap.
                                </p>
                                <div className='flex items-center space-x-4'>
                                    <button className="bg-[#1C738E] py-2.5 px-7 text-[16px] text-white font-semibold">Join
                                        Now</button>
                                    <button
                                        className="text-[#1C738E] hover:text-[#ffffff] hover:bg-[#1C738E] py-2.5 px-3 text-[16px] font-medium flex justify-center">
                                        <span className="material-symbols-outlined mr-3 text-[44px] ">
                                            play_circle
                                        </span>Watch Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- NavSidebar --> */}
                    <NavSide>
                        <ActiveMenu number="01" href="/about" text="About LUDESC" />
                        <BorderNav />
                        <NormalMenu number="02" href="/about/mission" text="Our Mission" />
                        <NormalMenu number="03" href="/about/vision" text="Our Vision" />
                    </NavSide>
                </div>
            </div>
        </>
    );
}
