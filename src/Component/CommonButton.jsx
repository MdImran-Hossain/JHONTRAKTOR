import React from 'react'

const CommonButton = ({ButtonText, ButtonDesing} ) => {
  return (
    < >
     <button className={`${ButtonDesing} px-[30px] py-[15px] rounded-2xl relative overflow-hidden z-10 hover:text-whiteColor botton transition-all bg-whiteColor text-[24px] font-medium font-poppins text-primaryColor`}>
        {ButtonText}
     </button>
    </>
  )
}

export default CommonButton
