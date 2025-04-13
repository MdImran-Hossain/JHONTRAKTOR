import React from 'react'
import Contratbg from '../assets/contractbg.png'
import { FaCircleCheck } from 'react-icons/fa6'
const Contract = () => {
  return (
    <>
      <section 
              className="bg-cover bg-center contact relative py-[100px] z-10"
              style={{ backgroundImage: `url(${Contratbg})` }}>
        <div className="container m-auto">
            <div>
                <div>
                    <h2 className='text-[64px] font-semibold font-poppins text-whiteColor flex justify-center '>Leading Way In Building & Civil Construction</h2>
                </div>
                <div className='flex justify-center items-center gap-[44px] pt-6 pb-[50px]'>
                    <p className='text-[24px] font-medium font-poppins text-whiteColor flex items-center gap-3'><span><FaCircleCheck /></span>Professional Staff</p>
                    
                    <p className='text-[24px] font-medium font-poppins text-whiteColor flex items-center gap-3'><span><FaCircleCheck /></span>100% Satisfaction</p>
                    
                    <p className='text-[24px] font-medium font-poppins text-whiteColor flex items-center gap-3'><span><FaCircleCheck /></span>Accurate Testing</p>
                    <p className='text-[24px] font-medium font-poppins text-whiteColor flex items-center gap-3'><span><FaCircleCheck /></span>Transparent Pricing</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='w-[963px] py-[42px] px-[54px] bg-BandColor rounded-2xl'>
                    <div>
                        <h5 className='text-[24px] font-medium font-poppins text-whiteColor'>Request A Quote</h5>
                        <p className='text-[20px] font-normal font-poppins text-whiteColor py-[20px]'>Complete control over products allow us to our customers the best quality <br />
                        prices and services. We take great pride in everything that we do in Jhontraktor </p>
                    </div>
                    <div>
                        <form action="#">
                            <div className='flex justify-center gap-[18px] flex-wrap'>
                                <input type="text"  className='w-[415px] rounded-2xl text-[20px] font-normal font-poppins text-primaryColor py-6 px-12 bg-whiteColor' placeholder='Name' />
                                <input type="e-mail"  className='w-[415px] rounded-2xl text-[20px] font-normal font-poppins text-primaryColor py-6 px-12 bg-whiteColor' placeholder='E-mail' />
                                <input type="text"  className='w-[415px] rounded-2xl text-[20px] font-normal font-poppins text-primaryColor py-6 px-12 bg-whiteColor' placeholder='Phone' />
                                <input type="text" className='w-[415px] rounded-2xl text-[20px] font-normal font-poppins text-primaryColor py-6 px-12 bg-whiteColor'  placeholder='Select Your Service' />
                                <input type="text" className='w-[845px] h-[116px] rounded-2xl text-[20px] font-normal font-poppins text-primaryColor py-6 px-12 bg-whiteColor'  placeholder='Additional Details!' />
                            </div>
                            <button className='py-[23px] flex justify-center bg-primaryColor px-[50px] text-[20px] font-normal font-poppins text-whiteColor rounded-2xl mt-6 w-full'>Submit Request</button>
                        </form>
                    </div>

                </div>
                <div className='w-[500px] py-[42px] px-[54px] bg-BandColor rounded-2xl'>
                    <h4 className='text-[24px] font-medium font-poppins text-whiteColor pb-[25px]'>Contact Info</h4>
                    <div>
                        <h6 className='text-[24px] font-medium font-poppins text-whiteColor pb-1'>Our Location</h6>
                        <a href="#" className='text-[16px] font-light font-poppins text-whiteColor'>18 Office Park Building 21th Floor Unit C. Jl. TB Simatupang Kav. 18, Jakarta Selatan ,12520</a>
                    </div>
                    <div className='pt-[20px]'>
                        <h6 className='text-[24px] font-medium font-poppins text-whiteColor pb-1'>Quick Contact</h6>
                        
                        <span className='text-[16px] font-light font-poppins text-whiteColor block'>Email : <a href="mailto:contact@jhontraktor.com">contact@jhontraktor.com</a></span>
                        
                        <span className='text-[16px] font-light font-poppins text-whiteColor'>Call Us: <a href="tel:(+62) 877-2469-7246">(+62) 877-2469-7246</a></span>
                    </div>
                    <div className='pt-[20px]'>
                        <h6 className='text-[24px] font-medium font-poppins text-whiteColor pb-1'>Opening Hours</h6>
                        <p className='text-[16px] font-light font-poppins text-whiteColor'>Monday - Friday <br />
                        09:00 AM - 06:00 PM</p>
                    </div>
                    <p className='text-[20px] font-medium font-poppins text-whiteColor pb-1 pt-[20px]'>Do You Have Any Question, Just Contact Us To Get Help!</p>
                    <button className='py-[23px] flex justify-center bg-primaryColor px-[50px] text-[20px] font-normal font-poppins text-whiteColor rounded-2xl mt-5 w-full'>Contact Us</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contract
