import React from "react";
import Imge from "../assets/ex.png";
const Experience = () => {
  return (
    <>
      <section className="pt-[113px] pb-[68px] bg-primaryColor">
        <div className="container m-auto">
          <div className="flex justify-between items-center gap-[70px]">
            <div>
              <picture>
                <img src={Imge} alt={Imge} />
              </picture>
            </div>
            <div>
              <div>
                <h2 className="text-[64px] font-semibold font-poppins text-whiteColor">
                  <span className="text-BandColor">25 years </span>
                  <br />
                  of experience!
                </h2>
                <p className="text-[20px] font-normal font-poppins text-whiteColor w-[720px] py-[30px]">
                  We have a team of experienced professionals who have been in
                  the industry for over 25 years. Our contractors have a wealth
                  of knowledge and skills that they have acquired over the
                  years, making them experts in their field. <br /> <br />
                  With 25 years of experience, our contractors have a deep
                  understanding of industry standards and regulations. We ensure
                  that all our projects comply with the latest safety and
                  building codes, and that the final product meets or exceeds
                  our client's expectations.
                </p>
              </div>
              <div>
                <h3 className=" text-[64px] font-normal font-Comforter text-whiteColor">jhon lbf</h3>
                <p className="text-[14px] font-medium font-poppins text-whiteColor">Henry Kurnia Adhi - Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
