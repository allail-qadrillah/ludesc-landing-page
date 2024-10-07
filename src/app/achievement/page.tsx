import Breadcrumb from '@/components/themebuilder/03-Breadcrumb';
import NavSide from '@/components/themebuilder/2-NavSide/01-NavSide';
import BorderNav from '@/components/themebuilder/2-NavSide/02-BorderNav';
import ActiveMenu from '@/components/themebuilder/2-NavSide/03-ActiveMenu';
import NormalMenu from '@/components/themebuilder/2-NavSide/04-NormalMenu';
import Image from 'next/image';
import React from 'react';

export default function AchievementPage(): JSX.Element {
    return (
        <>
        <div className="absolute inset-0 flex justify-end items-end  pointer-events-none z-0">
            <span className="text-[160px] font-bold text-[#d8d8d854]">LUDESC</span>
        </div>
            {/* Section 1 */}
            <div className="relative w-full flex justify-center items-center z-10">
                <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%]">
                    <div className="lg:hidden mb-3">
                        <Breadcrumb
                            link={{ name: "Home", href: "/" }}
                            link2={{ name: "Our Vision" }}
                        />
                    </div>
                    {/* Content */}
                    <div className="flex lg:w-[4/5] background-achievement">
                        <div className="flex flex-col lg:flex-row w-full ">
                            {/* Spacer di desktop */}
                            <div className="p-[20px] lg:w-1/6"></div>

                            {/* Konten dengan gradien */}
                            <div className="w-full lg:w-5/6 px-5 pt-[100px]  lg:py-10 lg:pl-[250px] lg:pr-10 bg-gradient-to-b lg:bg-gradient-to-r from-[#fcfcfc00] via-[#fcfcfcf8] to-[#fcfcfc] ">
                                <h1 className="text-[#1c8e72] text-[40px] lg:text-[50px] font-bold ">
                                    ACHIEVEMENT
                                </h1>
                                <p className='text-[#1C738E]  font-bold text-[18px] '>
                                    Seamlessly Connect Your Digital Stethoscope to your smartphone with Bluetooth.
                                </p>
                                <p className='text-[#1C738E] mb-4'>
                                    Enhancing Your Telemedicine Experience. With digital lung auscultation and quick data access.
                                </p>
                                <div className='flex items-center space-x-4'>
                                    <button className="bg-[#1C738E] py-2.5 px-7 text-[16px] text-white font-semibold">More</button>
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
                    {/* NavSidebar */}
                    <NavSide>
                        <NormalMenu number="01" href="/" text="Introducing LUDESC" />
                        <NormalMenu number="02" href="/vision" text="Our Vision" />
                        <NormalMenu number="03" href="/products" text="Products" />
                        <ActiveMenu number="04" href="/achievement" text="Achievement" />
                        <BorderNav />
                        <NormalMenu number="05" href="/team" text="Team" />
                    </NavSide>
                </div>
            </div >
            {/* Section 2 */}
            <div className="w-full flex justify-center items-center">
                <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%] mb-10">
                    <div className="md:w-4/5 w-full flex flex-col md:flex-row justify-between items-start space-x-6 ">
                        {/* <!-- Item 1 --> */}
                        <div className="w-full md:w-[20%]  flex-col justify-start items-center  border border-gray-200 ">
                            <div className="relative w-full pb-[100%]">
                                <Image
                                    src="/images/paten.png"
                                    alt="Deskripsi Gambar"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className='px-3 mt-3   '>Patented Product</p>
                            <p className='ml-3  mt-2 mb-3 text-[#1C738E] text-[14px] '>More...</p>
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div className="w-full md:w-[20%]  flex-col justify-start items-center  border border-gray-200 ">
                            <div className="relative w-full pb-[100%]">
                                <Image
                                    src="/images/AIinnovation.png"
                                    alt="Deskripsi Gambar"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className='px-3 mt-3   '>Indonesia AI Winner 2023</p>
                            <p className='ml-3  mt-2 mb-3 text-[#1C738E] text-[14px] '>More...</p>
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div className="w-full md:w-[20%]  flex-col justify-start items-center  border border-gray-200 ">
                            <div className="relative w-full pb-[100%]">
                                <Image
                                    src="/images/etik.png"
                                    alt="Deskripsi Gambar"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className='px-3 mt-3   '>WHO Ethical Clearance</p>
                            <p className='ml-3  mt-2 mb-3 text-[#1C738E] text-[14px] '>More...</p>
                        </div>
                        {/* <!-- Item 4 --> */}
                        <div className="w-full md:w-[20%]  flex-col justify-start items-center  border border-gray-200 ">
                            <div className="relative w-full pb-[100%]">
                                <Image
                                    src="/images/AIC.png"
                                    alt="Deskripsi Gambar"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className='px-3 mt-3   '>The 13th AIC Convergence & EXPO</p>
                            <p className='ml-3  mt-2 mb-3 text-[#1C738E] text-[14px] '>More...</p>
                        </div>
                        {/* <!-- Item 5 --> */}
                        <div className="w-full md:w-[20%]  flex-col justify-start items-center  border border-gray-200 ">
                            <div className="relative w-full pb-[100%]">
                                <Image
                                    src="/images/ICICT.png"
                                    alt="Deskripsi Gambar"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className='px-3 mt-3   '>ICICT Springer International Research</p>
                            <p className='ml-3  mt-2 mb-3 text-[#1C738E] text-[14px] '>More...</p>
                        </div>
                    </div>
                    {/* <!-- NavSidebar --> */}
                    <div className="hidden md:flex w-full md:w-1/5 flex-col justify-start items-start space-y-4 mt-8 md:mt-0 ml-0 md:ml-10">
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
}
