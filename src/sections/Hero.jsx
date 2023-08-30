import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes,statistics } from "../constants"
import { useState } from "react"
import { motion } from "framer-motion";


const Hero = () => {
  const[bigShoeImg,setBigShoeImg]= useState(bigShoe1)
  return (
    <section id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col items-start justify-center w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-red-600">Our Cool Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative xl:z-10 sm:z-0 pr-10">The New Arrival</span>
          <br/>
          <span className="text-red-600 inline-block mt-3">Nike</span> Shoes
          </h1>
          <p  className ="text-slate-gray p-2 font-montserrat text-lg leading-8 sm:max-w-sm "> Crafted for Champions: Conquer Your Goals in Nike Shoes.</p>
          <Button label="Shop Now"
          iconURL={arrowRight}/>
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat)=>(
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))}
          </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-hero bg-center"> 
      <motion.div
      whileHover={{ x: 20, transition: { duration: 0.3 } }} // Move along the x-axis on hover
      className="object-contain relative z-10">
        <img src={bigShoeImg}
        alt="shoes collection"
        width={500}
        height={500}
        className="object-contain relative z-10"/>
      </motion.div>
        <div className="flex sm:gap-5 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-4">
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard 
              imgURL ={shoe}
              changeBigShoeImage=
              {(shoe)=>setBigShoeImg(shoe)} 
              bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  )
}

export default Hero