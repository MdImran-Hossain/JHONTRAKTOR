import React from "react";
import Bgbanner from "../assets/b.png";
import CommonButton from "../Component/CommonButton";
import { FaCheckCircle, FaRegArrowAltCircleRight } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${Bgbanner})` }}
      >
        <div className="container m-auto">
          <div>
            <div className="pt-[154px] pb-[287px]">
              <div>
                <h1 className="text-[64px] font-semibold font-poppins text-whiteColor" >
                  We Prepare <br /> For The <span className="text-BandColor">Future</span>
                </h1>
                <p className="text-[20px] font-medium font-poppins text-whiteColor pt-[24px]">
                  We provide the best architectural design, contruction, and{" "}
                  <br />
                  building maintance services for you.
                </p>
              </div>
              <div className="flex items-center gap-[24px] pt-[75px]">
                <CommonButton
                  ButtonText={`Our Services`}
                  ButtonIcon={<FaRegArrowAltCircleRight />}
                  ButtonDesing={"flex  justify-center items-center gap-[10px]"}
                />
                <CommonButton ButtonText={'View Project'}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-[60px] bg-primaryColor">
            <div className="container m-auto">
              <div className=" flex justify-between items-end">
                <div>
                <ul className=" flex justify-start items-center gap-[30px]">
                  <li className="text-[48px] font-semibold font-poppins text-BandColor flex justify-center gap-1 items-center">25+ <span className="text-[16px] font-medium text-whiteColor">Years of <br />
                  Experience</span></li>
                  <li className="text-[48px] font-semibold font-poppins text-BandColor flex justify-center gap-1 items-center">378+ <span className="text-[16px] font-medium text-whiteColor">Project <br />
                  Complete</span></li>
                  <li className="text-[48px] font-semibold font-poppins text-BandColor flex justify-center gap-1 items-center">69+ <span className="text-[16px] font-medium text-whiteColor">Winning <br />
                  Global Award</span></li>
                </ul>
                </div>
                <div className="relative">
                  <ul className="p-[55px] w-[635px] bg-BandColor rounded-2xl absolute right-0 bottom-0">
                    <li className="text-[20px] font-medium font-poppins text-whiteColor flex justify-last items-center gap-[10px]"><span><FaCheckCircle /></span> Quality Control System, 100% Satisfaction Guarantee</li>
                    <li className="text-[20px] font-medium font-poppins text-whiteColor flex justify-last items-center gap-[10px] py-[20px]"><span><FaCheckCircle /></span> Quality Control System, 100% Satisfaction Guarantee</li>
                    <li className="text-[20px] font-medium font-poppins text-whiteColor flex justify-last items-center gap-[10px]"><span><FaCheckCircle /></span> Quality Control System, 100% Satisfaction Guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
      </div>
    </>
  );
};

export default Banner;
