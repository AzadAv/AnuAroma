import React from 'react'
import "./Bakery.css"

import Carousel,{CarouselItem} from '../UI/Carousel'
import BakeryFirst from './BakeryCarouselItems/BakeryFirst'
import BakerySecond from './BakeryCarouselItems/BakerySecond'
import BakeryThird from './BakeryCarouselItems/BakeryThird'
function Bakery() {
  return (
    <div className='bakery'>
      
    <Carousel>
            <CarouselItem><BakeryFirst/></CarouselItem>
            <CarouselItem><BakerySecond /></CarouselItem>
            <CarouselItem><BakeryThird /></CarouselItem>
        </Carousel>
    <span><em>...and of course Bakery :)</em></span>    
    </div>
  )
}

export default Bakery