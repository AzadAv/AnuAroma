import React from 'react'
import "./Coffee.css"
import Carousel,{CarouselItem} from '../UI/Carousel'
import CoffeeFirst from './CoffeeCarouselItems/coffeeFirst'
import CoffeeSecond from './CoffeeCarouselItems/CoffeeSecond'
import CoffeeThird from './CoffeeCarouselItems/coffeeThird'

function Coffee() {
  return (
    <div className='coffee'>
         
        <Carousel>
            <CarouselItem><CoffeeFirst/></CarouselItem>
            <CarouselItem><CoffeeSecond/></CarouselItem>
            <CarouselItem><CoffeeThird /></CarouselItem>
        </Carousel>
      
        <span><em>First of all, Coffee.</em></span>
    </div>
  )
}

export default Coffee