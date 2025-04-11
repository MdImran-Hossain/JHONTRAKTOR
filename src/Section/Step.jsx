import React from 'react'

const Step = () => {
    const Content=[
        {
            id:1,
            contentText:"Evaluation And Signing",
            contentSpan:"Of The Contract",
            Step:"Step 1"
        },
        {
            id:2,
            contentText:"Preparation Of The",
            contentSpan:"Work Plan",
            Step:"Step 2"
        },
        {
            id:3,
            contentText:"Implementation Of",
            contentSpan:"Quality Works",
            Step:"Step 3"
        },
        {
            id:4,
            contentText:"Delivering The Project",
            contentSpan:"To The Customer",
            Step:"Step 4"
        }
    ]
  return (
    <>
      <section className='py-[55px] bg-BandColor'>
        <div className="container m-auto">
            <div className='flex justify-center items-center'>
                {
                    Content.map((Content)=>{
                        return(
                            <div className="px-[75px] border-b-2 border-whiteColor pb-[30px] flex flex-col items-center relative after:content-[''] after:absolute after:top-[92%] after:left-[50%] after:w-[20px] after:h-[20px] after:translate-x-[-50%] after:bg-whiteColor after:rounded-full before:content-[''] before:absolute before:top-[85%] before:left-[50%] before:w-[35px] before:h-[35px] before:translate-x-[-50%] before:bg-whiteColor before:rounded-full before:opacity-50">
                            <h3 className='text-[20px] font-medium font-poppins text-whiteColor '>{Content.contentText} <br />
                            <span className='flex justify-center'>{Content.contentSpan}</span></h3>
                            <p className='text-[14px] font-medium font-poppins text-whiteColor pt-3'>{Content.Step}</p>
                        </div>
                        )
                    })
                }
               
            </div>
        </div>
      </section>
    </>
  )
}

export default Step
