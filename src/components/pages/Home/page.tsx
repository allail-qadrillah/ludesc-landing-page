'use client';

import { useState } from 'react';

import NumberTicker from '@/components/elements/NumberTicker';
import VideoDialog from '@/components/elements/VideoDialog';
import Image from 'next/image';


export default function Home(): JSX.Element {
  const [numCart, setNumCart] = useState(1);

  const handleIncreaseCart = () => {
    setNumCart(numCart + 1);
  };

  const handleDecreaseCart = () => {
    if (numCart >= 2) {
      setNumCart(numCart - 1);
    }
  };

  return (
    <>
      <div className="md:w-[90%] px-32 flex flex-col md:flex-row justify-center items-start  ">
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
            <h1 className="text-[#1C738E] text-[30px] lg:text-[46px] font-bold mb-[-5px] ">
              AI-Powered
            </h1>
            <p className="text-[#1c8e72] text-[23px] lg:text-[38px] font-bold">
              Lung Disease Screening & Telemedicine
            </p>
            <p className="text-[#828383] text-[15px] font-300 mb-5 mt-2 leading-[1.6rem]">
              System to help patients and medical personnel in early screening
              for lung disease with AI technology in the form of self-screening
              and telemedicine quickly, easy and cheap.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-[#1C738E] py-2.5 px-7 text-[16px] text-white font-semibold">
                Join Now
              </button>
              <button className="text-[#1C738E] hover:text-[#ffffff] hover:bg-[#1C738E] py-2.5 px-3 text-[16px] font-medium flex justify-center">
                <span className="material-symbols-outlined mr-3 text-[44px] ">
                  play_circle
                </span>
                <VideoDialog
                  text="Watch Video"
                  className="dark:hidden block"
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/bOSoO5eu8WA"
                  thumbnailAlt="Ludesc Video"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-start px-20 py-5 w-[95%] lg:w-[90%] mb-10">
          <div className="md:w-4/5 w-full flex flex-col md:flex-row justify-center items-start  ">
            {/* <!-- Item 2 (Image) --> */}
            <div className="w-full md:w-[45%]  flex justify-start items-center ">
              <div className="flex flex-wrap justify-between mt-4">
                <div className="w-full md:w-1/3 text-center">
                  <h3 className="font-[600] text-4xl">
                    <NumberTicker value={30} />+
                  </h3>
                  <p className="text-[#828383] text-[14px] font-300">
                    Clients & Medical Facilities
                  </p>
                </div>
                <div className="w-full md:w-1/3 text-center">
                  <h3 className="font-[600] text-4xl">
                    <NumberTicker value={12} />+
                  </h3>
                  <p className="text-[#828383] text-[14px] font-300">
                    Awards <br /> Winnings
                  </p>
                </div>
                <div className="w-full md:w-1/3 text-center">
                  <h3 className="font-[600] text-4xl">
                    <NumberTicker value={15} />+
                  </h3>
                  <p className="text-[#828383] text-[14px] font-300">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Item 1 (Text) --> */}
            <div className="w-full md:w-[55%] lg:mt-0 mt-8 shadow-lg p-5 ml-5 bg-white">
              <div>
                <div className="container mx-auto">
                  {/* Menggunakan flex display untuk membuat div sebaris */}
                  <div className="flex items-center justify-between">
                    {/* Div 1 */}
                    <div className="text-[#828383] text-[15px] font-300">
                      <span>Stethoscope </span>
                      <br />
                      <span>& Medical Service</span>
                      <br />
                      <strong className="text-[#404141] text-[15px]">
                        IDR 15.000.000
                      </strong>
                    </div>

                    {/* Div 2 */}
                    <div className="flex items-center space-x-2">
                      <button
                        className="bg-[#e9e9e9] text-[#3d3d3d] px-3 py-1 "
                        onClick={handleDecreaseCart}
                      >
                        -
                      </button>
                      <p className="px-2">{numCart}</p>
                      <button
                        className="bg-[#e9e9e9] text-[#3d3d3d] px-3 py-1 "
                        onClick={handleIncreaseCart}
                      >
                        +
                      </button>
                      <button className="bg-[#1b4b4f] text-white px-4 py-2  ml-2 text-[14px]">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
