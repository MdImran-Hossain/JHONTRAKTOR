import React from 'react'
import logo from '../assets/logo.png'
import { GiWorld } from 'react-icons/gi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import CommonButton from '../Component/CommonButton'
const Navbar = () => {
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
      <nav className='bg-primaryColor py-[40px]'> 
        <div className="container m-auto">
            <div className='flex justify-between items-center'>
                <div>
                    <picture>
                        <img src={logo} alt={logo} />
                    </picture>
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-x-[23px]'>
                        {Navitem.map((item)=>{
                            return(
                                <li>
                                    <a key={item.id} className='text-[24px] font-medium font-poppins text-whiteColor relative  navitems' href="#">{item.items}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-[24px]'>
                  <div>
                    <a className='flex justify-center items-center text-whiteColor text-[24px] font-medium font-poppins' href="#"><span className='pr-2'><GiWorld /></span>English <span className='pl-0.5'><MdKeyboardArrowDown />
                    </span></a>
                  </div>
                  <div>
                    <CommonButton ButtonText={'Contact Us'} />
                  </div>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
