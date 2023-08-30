import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpeacialOffer = () => {
  return (
    <section className='flex justify-wrap max-xl:flex-col-reverse items-center gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer}
        width={773}
        height={687}
        className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-red-600"> Special </span>Offer
          </h2>
          <p  className ="mt-4 lg:max-w-lg info-text">Discover Our Exclusive Special Offer, Elevate your style with Nike's premium footwear selection. Explore our limited-time deal and step into unmatched comfort and performance.</p>
          <p className='mt-6 lg:max-w-lg info-text'> Unleash your potential with Nike's footwear range, now available at a special price. Don't miss this chance to upgrade your collection.</p>
          <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop Now"
          iconURL={arrowRight}/>
          <Button label="Learn more"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"/>
          </div>
      </div>
    </section>
  )
}

export default SpeacialOffer