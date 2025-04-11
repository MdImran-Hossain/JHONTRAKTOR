import React, { useState } from "react";
import Slider from "react-slick";
import projectImg from "../assets/project/project1.png";
import projectImg2 from "../assets/project/project2.png";
import projectImg3 from "../assets/project/project3.png";
const Featured = () => {
  const ProjectContent = [
    {
      id: 1,
      imgp: projectImg,
      projectName: "Skyskuy Tower",
      projectPlace: "Renovation & Architecture",
    },
    {
      id: 2,
      imgp: projectImg2,
      projectName: "The Fallingwater House",
      projectPlace: "Building & Interior",
    },
    {
      id: 3,
      imgp: projectImg3,
      projectName: "The Orange Apartemen",
      projectPlace: "Construction & Interior",
    },
    {
      id: 4,
      imgp: projectImg,
      projectName: "Skyskuy Tower",
      projectPlace: "Renovation & Architecture",
    },
    {
      id: 5,
      imgp: projectImg2,
      projectName: "The Fallingwater House",
      projectPlace: "Building & Interior",
    },
    {
      id: 6,
      imgp: projectImg3,
      projectName: "The Orange Apartemen",
      projectPlace: "Construction & Interior",
    },
  ];

  const [toggolestate, settoggolestate] = useState(1);
  const toggolBTn = (index) => {
    settoggolestate(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <>
      <section className="pb-[150px] bg-BandColor">
        <div className="container m-auto">
          <div className=" relative">
            <div>
              <h2 className="text-[64px] font-semibold font-poppins text-primaryColor">
                Featured Project
              </h2>
            </div>
            <div>
              <div
                className="justify-center items-center gap-6 flex cursor-pointer absolute top-[40px]
              right-[0]"
              >
                <div
                  onClick={() => toggolBTn(1)}
                  className={
                    toggolestate === 1
                      ? "active_tab"
                      : "text-[20px] font-semibold font-poppins text-white "
                  }
                >
                  All Works
                </div>
                <div
                  onClick={() => toggolBTn(2)}
                  className={
                    toggolestate === 2
                      ? "active_tab "
                      : "text-[20px] font-semibold font-poppins text-white "
                  }
                >
                  Construction
                </div>
                <div
                  onClick={() => toggolBTn(3)}
                  className={
                    toggolestate === 3
                      ? "active_tab"
                      : "text-[20px] font-semibold font-poppins text-white "
                  }
                >
                  Architecture
                </div>
                <div
                  onClick={() => toggolBTn(4)}
                  className={
                    toggolestate === 4
                      ? "active_tab"
                      : "text-[20px] font-semibold font-poppins text-white "
                  }
                >
                  Building
                </div>
                <div
                  onClick={() => toggolBTn(5)}
                  className={
                    toggolestate === 5
                      ? "active_tab "
                      : "text-[20px] font-semibold font-poppins text-white "
                  }
                >
                  Renovations
                </div>
                <div
                  onClick={() => toggolBTn(6)}
                  className={
                    toggolestate === 6
                      ? "active_tab "
                      : "text-[20px] font-semibold font-poppins text-white "
                  }
                >
                  Interior
                </div>
              </div>

              <div className="content_tabs">
                <div
                  className={toggolestate === 1 ? "active_content" : "hidden"}
                >
                  {/* =============== slider start ==================== */}

                  <div className="pt-[50px]">
                    <div className="slider-container">
                      <Slider {...settings}>
                        {ProjectContent.map((ProjectContent) => {
                          return (
                            <div
                              key={ProjectContent.id}
                              className="relative w-[455px] project p-[10px] z-10 rounded-2xl"
                            >
                              <div>
                                <picture>
                                  <img
                                    src={ProjectContent.imgp}
                                    className="w-full object-cover rounded-2xl"
                                    alt={ProjectContent.imgp}
                                  />
                                </picture>
                              </div>
                              <div className="flex justify-center flex-col items-center absolute bottom-[22px] left-[50%] translate-x-[-50%] ">
                                <h3 className="text-[24px] font-medium font-poppins text-whiteColor">
                                  {" "}
                                  {ProjectContent.projectName}
                                </h3>
                                <p className="text-[20px] font-medium font-poppins text-whiteColor">
                                  {ProjectContent.projectPlace}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </div>
                  {/* ------------------ slider end ------------------- */}
                </div>
                <div
                  className={toggolestate === 2 ? "active_content" : "hidden"}
                >
                  <div className=" flex justify-center items-center gap-10px pt-[50px] flex-wrap">
                    {ProjectContent.map((ProjectContent) => {
                      return (
                        <div
                          key={ProjectContent.id}
                          className="relative w-[510px] project p-[10px] z-10 rounded-2xl"
                        >
                          <div>
                            <picture>
                              <img
                                src={ProjectContent.imgp}
                                className="w-full object-cover rounded-2xl"
                                alt={ProjectContent.imgp}
                              />
                            </picture>
                          </div>
                          <div className="flex justify-center flex-col items-center absolute bottom-[22px] left-[50%] translate-x-[-50%] ">
                            <h3 className="text-[24px] font-medium font-poppins text-whiteColor">
                              {" "}
                              {ProjectContent.projectName}
                            </h3>
                            <p className="text-[20px] font-medium font-poppins text-whiteColor">
                              {ProjectContent.projectPlace}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={toggolestate === 3 ? "active_content" : "hidden"}
                >
                  <div className=" flex justify-center items-center pt-[50px] gap-10px flex-wrap">
                    {ProjectContent.map((ProjectContent) => {
                      return (
                        <div
                          key={ProjectContent.id}
                          className="relative w-[510px] project p-[10px] z-10 rounded-2xl"
                        >
                          <div>
                            <picture>
                              <img
                                src={ProjectContent.imgp}
                                className="w-full object-cover rounded-2xl"
                                alt={ProjectContent.imgp}
                              />
                            </picture>
                          </div>
                          <div className="flex justify-center flex-col items-center absolute bottom-[22px] left-[50%] translate-x-[-50%] ">
                            <h3 className="text-[24px] font-medium font-poppins text-whiteColor">
                              {" "}
                              {ProjectContent.projectName}
                            </h3>
                            <p className="text-[20px] font-medium font-poppins text-whiteColor">
                              {ProjectContent.projectPlace}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={toggolestate === 4 ? "active_content" : "hidden"}
                >
                  <div className=" flex justify-center items-center pt-[50px] gap-10px flex-wrap">
                    {ProjectContent.map((ProjectContent) => {
                      return (
                        <div
                          key={ProjectContent.id}
                          className="relative w-[510px] project p-[10px] z-10 rounded-2xl"
                        >
                          <div>
                            <picture>
                              <img
                                src={ProjectContent.imgp}
                                className="w-full object-cover rounded-2xl"
                                alt={ProjectContent.imgp}
                              />
                            </picture>
                          </div>
                          <div className="flex justify-center flex-col items-center absolute bottom-[22px] left-[50%] translate-x-[-50%] ">
                            <h3 className="text-[24px] font-medium font-poppins text-whiteColor">
                              {" "}
                              {ProjectContent.projectName}
                            </h3>
                            <p className="text-[20px] font-medium font-poppins text-whiteColor">
                              {ProjectContent.projectPlace}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={toggolestate === 5 ? "active_content" : "hidden"}
                >
                  <div className=" flex justify-center pt-[50px] items-center gap-10px flex-wrap">
                    {ProjectContent.map((ProjectContent) => {
                      return (
                        <div
                          key={ProjectContent.id}
                          className="relative w-[510px] project p-[10px] z-10 rounded-2xl"
                        >
                          <div>
                            <picture>
                              <img
                                src={ProjectContent.imgp}
                                className="w-full object-cover rounded-2xl"
                                alt={ProjectContent.imgp}
                              />
                            </picture>
                          </div>
                          <div className="flex justify-center flex-col items-center absolute bottom-[22px] left-[50%] translate-x-[-50%] ">
                            <h3 className="text-[24px] font-medium font-poppins text-whiteColor">
                              {" "}
                              {ProjectContent.projectName}
                            </h3>
                            <p className="text-[20px] font-medium font-poppins text-whiteColor">
                              {ProjectContent.projectPlace}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={toggolestate === 6 ? "active_content" : "hidden"}
                >
                  <div className=" flex justify-center pt-[50px] items-center gap-10px flex-wrap">
                    {ProjectContent.map((ProjectContent) => {
                      return (
                        <div
                          key={ProjectContent.id}
                          className="relative w-[510px] project p-[10px] z-10 rounded-2xl"
                        >
                          <div>
                            <picture>
                              <img
                                src={ProjectContent.imgp}
                                className="w-full object-cover rounded-2xl"
                                alt={ProjectContent.imgp}
                              />
                            </picture>
                          </div>
                          <div className="flex justify-center flex-col items-center absolute bottom-[22px] left-[50%] translate-x-[-50%] ">
                            <h3 className="text-[24px] font-medium font-poppins text-whiteColor">
                              {" "}
                              {ProjectContent.projectName}
                            </h3>
                            <p className="text-[20px] font-medium font-poppins text-whiteColor">
                              {ProjectContent.projectPlace}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
