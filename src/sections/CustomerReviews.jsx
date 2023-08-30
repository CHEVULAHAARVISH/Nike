import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/Reviewcard'

const CustomerReviews = () => {
  return (
    <section className='max-container '>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-red-600 '> Customers </span> Say?
      </h3>
      <p className='m-auto info-text mt-4 text-center max-w-lg'>Hear genuine stories from out satisfied customers about their exceptional experiance with us.</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review)=>( 
          <ReviewCard
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}/>
          
        ))}
      </div>
      
    </section>
  )
}

export default CustomerReviews