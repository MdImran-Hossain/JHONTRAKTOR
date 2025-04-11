import React from 'react'

const CommonButton = ({ButtonText, ButtonDesing, ButtonIcon} ) => {
  return (
    < >
     <button className={`${ButtonDesing} px-[30px] py-[15px] rounded-2xl relative overflow-hidden z-10 hover:text-whiteColor botton transition-all bg-whiteColor text-[24px] font-medium font-poppins text-primaryColor`}>
        {ButtonText} <span>{ButtonIcon}</span>
     </button>
    </>
  )
}

export default CommonButton
