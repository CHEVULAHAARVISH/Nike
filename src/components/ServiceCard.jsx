import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='w-11 h-11 justify-center items-center bg-red-600 rounded-full flex '>
            <img src={imgURL}
            alt='Service Review'
            width={24}
            height={24}/>
        </div>
        <div>
            <h3 className='font-semibold mt-5 font-palanquin text-3xl leading-normal'>{label}</h3>
            <p className='text-slate-gray font-montserrat mt-3 break-words leading-normal text-lg'>{subtext}</p>
        </div>
    </div>
  )
}

export default ServiceCard