import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const Popularproduct = () => {
  return (
    <section id='products'
    className=' max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our<span className='text-red-500 '> Popular </span>Products</h2>
        <p className='text-slate-gray lg:max-w-lg mt-2 font-montserrat'>Ignite Your Cool Factor: Walk in the Footsteps of the Popular with Nike.</p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-12'>
        {products.map((product)=>(
          <PopularProductCard key={product.map} {...product}/>
        ))}
      </div>

    </section>
  )
}

export default Popularproduct