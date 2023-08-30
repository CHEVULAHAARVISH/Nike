import React from 'react'
import Button from '../components/Button'

import { shoe8 } from '../assets/images'
import { motion } from "framer-motion";


const SuperQuality = () => {
  return (
    <section  id="about-us" className='flex justify-between gap-10 w-full max-lg:flex-col items-center max=container'>
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You 
          <span className="text-red-600"> Super </span>
          <span className="text-red-600">Quality</span> Shoes
          </h2>
          <p  className ="mt-4 lg:max-w-lg info-text">Step into a world of unparalleled style and quality with Nike.
          Our superlative footwear collection seamlessly blends innovation and fashion, 
          ensuring every step is a testament to excellence. 
          Discover the perfect fusion of cutting-edge technology and timeless design, 
          elevating your stride to new heights.</p>
          <p className='mt-6 lg:max-w-lg info-text'>Our dedication to details and excellence ensures your satisfaction</p>
          <div className='mt-11'>
          <Button label="View Details"/>
          </div>
         
      </div>
      <div className='flex flex-1 justify-center items-center'>
      <motion.div
      whileHover={{ x: 20, transition: { duration: 0.3 } }} // Move along the x-axis on hover
      className="object-contain relative z-10">
        <img src={shoe8}
        alt='Quality shoe'
        width={517}
        height={522}
        className='object-contain'/>
      </motion.div>
      </div>

    </section>
  )
}

export default SuperQuality