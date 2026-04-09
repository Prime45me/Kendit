import { section } from 'framer-motion/client'
import React from 'react'
import { BentoGrid,BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section className='flex-1 mx-3'>
        <BentoGrid >
            {gridItems.map((item)=> (
              <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description= {item.description}
              className= {item.className}
              img = {item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
              />
               ))}
        </BentoGrid>
    </section>
  )
}


export default Grid