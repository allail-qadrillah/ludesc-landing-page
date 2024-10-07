import NavSide from '@/components/themebuilder/2-NavSide/01-NavSide';
import BorderNav from '@/components/themebuilder/2-NavSide/02-BorderNav';
import ActiveMenu from '@/components/themebuilder/2-NavSide/03-ActiveMenu';
import NormalMenu from '@/components/themebuilder/2-NavSide/04-NormalMenu';
import Image from 'next/image';
import React from 'react';

export default function PricePage() {
    return (
        <>
        <div className="absolute inset-0 flex justify-end items-end  pointer-events-none  z-0">
            <span className="text-[160px] font-bold text-[#d8d8d854] ">LUDESC</span>
        </div>
        <h1 className="text-[30px] text-2xl font-bold text-[#22A878] ml-20">Are You <span className="text-[#1C738E] text-[50px] ">Medic Facilities?</span>
        </h1>
            <div className="relative flex-1 bg-no-repeat bg-left flex items-center justify-center z-10">
                <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%] ">
                    <div className="w-full flex justify-center items-start">
                        {/* {<!-- Item 1 -->} */}
                        <div className="w-full">
                            <div className="space-y-6">                            
                                <div className="relative">
                                    {/* Container untuk gambar agar tidak melebihi ukuran layar */}
                                    <div className="w-full flex justify-center">
                                        <Image
                                            src="/images/price.png"
                                            alt="Team"
                                            layout="intrinsic" // Menggunakan layout intrinsic untuk mencegah guliran
                                            width={600} // Lebar yang diinginkan (misalnya, resolusi sesuai konten)
                                            height={400} // Tinggi yang sesuai
                                            className="object-contain max-w-full max-h-[90vh]" // Agar gambar menyesuaikan container dan tidak melebihi layar
                                        />
                                    </div>
                                </div>                            
                            </div>
                            <br />
                            <div className="relative">
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <div className="container mx-auto">
                                    <div className="flex items-center space-x-4">
                                        <h6 className="text-lg font-bold text-[#0095E9]">
                                        Still confused? Contact Us!
                                        </h6>
                                        <button className="bg-[#1B4B4F] text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-600">
                                        Get the Deal Now!
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>                                                     
                    </div>
                    <NavSide >
                        <ActiveMenu number="01" href="/service" text="Service Offer" />
                        <BorderNav />
                        <NormalMenu number="02" href="/playground" text="Playground" />
                    </NavSide>
                </div>
            </div>
        </>
    );
}
