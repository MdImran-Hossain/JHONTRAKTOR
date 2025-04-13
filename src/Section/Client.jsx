import React from "react";
import Client1 from "../assets/client/client.jpg";
import Client2 from "../assets/client/client4.jpg";
import Client3 from "../assets/client/client3.jpg";
import Slider from "react-slick";

const Client = () => {
  const ClientItem = [
    {
      id: 1,
      Clientimg: Client1,
      Clientsay:
        "I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.",
      ClientName: "Tom DeLonge",
      Clientadd: "CEO, Lexmark",
    },
    {
      id: 2,
      Clientimg: Client2,
      Clientsay:
        "I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.",
      ClientName: "Tom DeLonge",
      Clientadd: "CEO, Lexmark",
    },
    {
      id: 3,
      Clientimg: Client3,
      Clientsay:
        "I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.",
      ClientName: "Tom DeLonge",
      Clientadd: "CEO, Lexmark",
    },
    {
      id: 4,
      Clientimg: Client1,
      Clientsay:
        "I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.",
      ClientName: "Tom DeLonge",
      Clientadd: "CEO, Lexmark",
    },
    {
      id: 5,
      Clientimg: Client2,
      Clientsay:
        "I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.",
      ClientName: "Tom DeLonge",
      Clientadd: "CEO, Lexmark",
    },
    {
      id: 6,
      Clientimg: Client3,
      Clientsay:
        "I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.",
      ClientName: "Tom DeLonge",
      Clientadd: "CEO, Lexmark",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <section className="bg-primaryColor py-10">
        <div className="container m-auto">
          <div>
            <h2 className="flex justify-center text-[28px] font-semibold font-poppins text-BandColor pb-[28px]">
              What Our Client Says
            </h2>
          </div>
          <div>
            <div className="slider-container">
              <Slider {...settings}>
                {ClientItem.map((itemt) => {
                  return (
                    <div key={itemt.id}>
                      <div className="w-[300px] h-[310px] pb-4 flex flex-col items-center justify-end">
                        <div className="flex justify-center clientactive items-center flex-col pb-[25px] w-100%">
                          <p className="text-[20px] font-normal font-poppins text-whiteColor w-[973px] text-center">
                            {itemt.Clientsay}
                          </p>
                          <h3 className="text-[20px] font-medium font-poppins text-whiteColor pt-[14px]">
                            {itemt.ClientName}
                          </h3>
                          <h5 className="text-[16px] font-medium font-poppins text-whiteColor">
                            {itemt.Clientadd}
                          </h5>
                        </div>
                        <div className="w-[120px] h-[120px] clientactiveImg rounded-full">
                          <picture>
                            <img
                              src={itemt.Clientimg}
                              className="w-full h-full object-cover rounded-full"
                              alt={itemt.Clientimg}
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
