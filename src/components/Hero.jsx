import { motion } from 'framer-motion';
import React from 'react';
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='pt-40 text-center '>
          <div className="">
            <span className='roboto-font2 text-[2rem] md:text-[4rem] lg:text-[6rem]'>Hi! I'm <span className='text-font-purple roboto-font3'>Muhammad Ali</span></span>
            <br className='first-br'></br>
            <span className='roboto-font2 text-[2rem] md:text-[4rem] lg:text-[6rem]'>A Software Engineer.</span>
            <br></br>
            <br></br>
            <span className='roboto-font text-[0.82rem] md:text-[1rem] lg:text-[1.2rem]'>I also specialize in creating innovative and user-centric web/app</span>
            <br></br>
            <span className='roboto-font text-[0.82rem] md:text-[1rem] lg:text-[1.2rem]'>experiences that connect people and ideas in meaningful ways</span>
          </div>
      </div>
    </section>

  )
}


export default Hero