import React from 'react'
import logo from '../assets/logo.png'
import { FaArrowRight, FaFacebook } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import { FaSquareInstagram } from 'react-icons/fa6'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    const Navitem=[
        {
            id:1,
            items:"Home",
        },
        {
            id:2,
            items:"About US",
        },
        {
            id:3,
            items:"Service",
        },
        {
            id:4,
            items:"Project",
        }
    ]
  return (
    <>
      <section className='bg-primaryColor pt-[50px]'>
        <div className="container m-auto">
            <div className='flex justify-between items-center'>
                <div>
                    <picture>
                        <img src={logo} alt="" />
                    </picture>
                </div>
                <div className='flex justify-center items-end gap-3 relative'>
                    <p className='text-[20px] font-normal font-poppins text-whiteColor'>Subscribe To Our Newslatter :</p>
                    <input type="text"  className='w-[270px] border-b-2 border-whiteColor pb-2 text-[16px] font-normal font-poppins text-whiteColor ' placeholder='Enter your email addres' />
                    <span className='right-0 absolute top-[50%] text-whiteColor translate-y-[-50%]'><FaArrowRight />
                    </span>
                </div>
            </div>
            
                <div className='flex justify-between items-start mt-[32px]'>
                    <div>
                        <h5 className='text-[20px] font-medium text-whiteColor font-poppins pb-[36px]'>About Us</h5>
                        <p  className='text-[16px] font-normal w-[512px] font-poppins text-whiteColor'>We have the confidence to provide the best service for you, with the support of Professional and Certified HR that we currently have and the high-quality materials we use and structured work techniques, we will be able to realize timely completion of work.</p>
                        <ul className='flex justify-start gap-[14px] pt-6 pb-10'>
                            <li><a className='text-[30px] text-whiteColor' href="#"><ImLinkedin /></a></li>
                            <li><a className='text-[30px] text-whiteColor' href="#"><FaSquareInstagram /></a></li>
                            <li><a className='text-[30px] text-whiteColor' href="#"><IoLogoTwitter /></a></li>
                            <li><a className='text-[30px] text-whiteColor' href="#"><FaFacebook />
                            </a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-[20px] font-medium text-whiteColor font-poppins pb-[36px]'>Office</h5>
                        <a  className='text-[16px] font-normal font-poppins text-whiteColor' href="#">
                        18 Office Park Building 21th Floor Unit C. <br /> Jl. TB Simatupang Kav. 18, <br /> Jakarta Selatan ,12520
                        </a>
                    </div>
                    <div>
                        <h5 className='text-[20px] font-medium text-whiteColor font-poppins pb-[36px]'>Contact</h5>
                        <span className='text-[16px] font-light font-poppins text-whiteColor block'>Email : <a href="mailto:contact@jhontraktor.com">contact@jhontraktor.com</a></span>
                        
                        <span className='text-[16px] font-light font-poppins text-whiteColor'>Call Us: <a href="tel:(+62) 877-2469-7246">(+62) 877-2469-7246</a></span>
                    </div>
                    <div>
                    <h5 className='text-[20px] font-medium text-whiteColor font-poppins pb-[36px]'>Link</h5>
                    <div>
                    <ul className='flex justify-center items-start flex-col gap-x-[23px]'>
                        {Navitem.map((item)=>{
                            return(
                                <li>
                                    <a key={item.id} className='text-[16px] font-normal font-poppins text-whiteColor relative  navitems' href="#">{item.items}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                    </div>
                </div>
                <div>
                    <p className='flex justify-center text-[12px] font-normal font-poppins pb-3 text-[rgba(255,255,255,0.51)]'>Copyright © 2023 CandyAP. All Rights Reserved</p>
                </div>
        </div>
      </section>
    </>
  )
}

export default Footer
