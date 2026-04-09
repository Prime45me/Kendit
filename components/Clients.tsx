"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { InfiniteMovingCards } from './ui/InfinteMovingCards';
import { testimonials } from '@/data';

const Clients = () => {
  return (
    <section className='py-20' id='testimonials'>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='heading'
      >
        Kind words from{' '}
        <span className='text-purple'>satisfied clients</span>
      </motion.h1>
      <div className='flex flex-col items-center mt-10 md:mt-16 w-full'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='rounded-md flex flex-col antialiased items-center relative overflow-hidden w-full'
        > 
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </motion.div>
      </div>
    </section>
  ) 
}

export default Clients;