import NavSide from '@/components/themebuilder/2-NavSide/01-NavSide';
import Image from '@/components/elements/Image';

export default function Product(): JSX.Element {
  return (
    <>
      <div className="absolute inset-0 flex justify-end items-end  pointer-events-none z-0">
        <span className="text-[160px] font-bold text-[#d8d8d854]">LUDESC</span>
      </div>
      <div
        className=" relative flex-1 bg-no-repeat bg-left flex items-center justify-center z-10"
        style={{
          backgroundImage: "url('/images/stetoskop.png')",
          backgroundSize: '30%'
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%] mb-[100px] py-10">
          <div className="w-4/5 flex flex-col space-y-10">
            {/* Item 1 */}
            <div className="flex items-start">
              <div className="w-3/6 bg-slate-600 h-full"></div>
              <div className="w-2/6 flex justify-between items-start">
                <div className="text-justify">
                  <h5 className="text-[#22a878] text-6xl font-bold">LUDESC</h5>
                  <h5 className="text-[#1c738e] text-5xl font-bold">
                    STETHOSCOPE
                  </h5>
                  <h6 className="text-[#1c738e] text-lg font-semibold mt-3">
                    Seamlessly Connect Your Digital Stethoscope to your
                    smartphone with Bluetooth
                  </h6>
                  <p className="text-[#2a7b95] text-[15px]">
                    Enhancing Your Telemedicine Experience. With digital lung
                    auscultation and quick data access.
                  </p>
                  <div className="flex items-center space-x-4 mt-5">
                    <button className="bg-[#1C738E] py-2.5 px-7 text-[16px] text-white font-semibold">
                      More
                    </button>
                    <button className="text-[#1C738E] hover:text-[#ffffff] hover:bg-[#1C738E] py-2.5 px-3 text-[16px] font-medium flex justify-center">
                      <span className="material-symbols-outlined mr-3 text-[44px] ">
                        play_circle
                      </span>
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" flex-1 bg-no-repeat bg-left flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/ludescapp.png')",
          backgroundSize: '30%'
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%] mb-10 ">
          <div className="w-4/5 flex flex-col space-y-10">
            {/* Item 1 */}
            <div className="flex items-start">
              <div className="w-2/6 bg-slate-600 h-full"></div>
              <div className="w-4/6 flex justify-between items-start">
                <div className="w-1/2 text-right">
                  <h5 className="text-[#22a878] text-3xl font-bold">
                    Safe & Easy Lung Screening with LUDESC
                  </h5>
                  <h6 className="text-[#1c738e] text-lg font-semibold mt-3">
                    Improve Lung diagnostic accuracy and efficiency
                  </h6>
                  <p className="text-[#2a7b95] text-[15px]">
                    Make medical personnel feel safer in carrying out their
                    work.
                  </p>
                </div>
                <div className="w-1/2 flex justify-center">
                  <Image
                    src="/images/apps.png"
                    alt="Team"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2/6 bg-slate-600 h-full"></div>
              <div className="w-4/6 flex justify-between items-start">
                <div className="w-1/2 flex justify-center">
                  <Image
                    src="/images/apps2.png"
                    alt="Team"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="w-4/6 text-left">
                  <h5 className="text-[#22a878] text-3xl font-bold">
                    Comprehensive Lung Health Insight
                  </h5>
                  <h6 className="text-[#1c738e] text-lg font-semibold mt-3">
                    Lung Map
                  </h6>
                  <p className="text-[#2a7b95] text-justify text-[15px]">
                    Visualize your lung health effortlessly. Our lung map
                    displays the presence of wheezing and ronchi, offering a
                    clear understanding of your respiratory condition.
                  </p>
                  <h6 className="text-[#1c738e] text-lg font-semibold mt-3">
                    Differential Diagnosis
                  </h6>
                  <p className="text-[#2a7b95] text-justify text-[15px]">
                    Leverage advanced algorithms to get a detailed differential
                    diagnosis. Our system analyzes your lung sounds for possible
                    outcomes with AI-driven accuracy.
                  </p>
                  <div className="flex items-center space-x-4 mt-5">
                    <button className="bg-[#1C738E] py-2.5 px-7 text-[16px] text-white font-semibold">
                      Join Now
                    </button>
                    <button className="text-[#1C738E] hover:text-[#ffffff] hover:bg-[#1C738E] py-2.5 px-3 text-[16px] font-medium flex justify-center">
                      <span className="material-symbols-outlined mr-3 text-[44px] ">
                        play_circle
                      </span>
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NavSide>
            <div></div>
          </NavSide>
        </div>
      </div>
    </>
  );
}
