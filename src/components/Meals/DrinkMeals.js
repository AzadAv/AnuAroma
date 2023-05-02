import React from 'react'
import "./DrinkMeals.css"
import Meal from './Meal'
import { useState } from 'react'
import capuccino from "./pics/capuccino.jpg"
import americano from "./pics/americano.jpg"
import espresso from "./pics/espresso.jpg"
import moka from "./pics/moka.jpg"
import maciato from "./pics/maciato.jpg"
function DrinkMeals() {

  
  var dummy_drinks = [
    {id:1,
      name:'Espresso',
      description:'Taste the coolest espresso of TLV ',
      smallPrice:8,
      addToPrice:2,
      size:['short','long','double short','double long'],
      pic : espresso
    },
    {id:2,
     name:'Americano',
     description:'The classic coffee type made of hot water and espresso',
     smallPrice:10,
     addToPrice:2,
     size:['small','big'],
     pic : americano
    },
    
    {id:3,
      name:'Maciato',
      description:'Delicious choice, espresso with foam on top',
      smallPrice:8,
      addToPrice:2,
      size:['short','long','double short','double long'],
      pic : maciato
    },

    {id:4,
      name:'Capuccino',
      description:'Famous drink made of milk, foam and espresso',
      smallPrice:10,
      addToPrice:2,
      size:['small','big'],
      pic : capuccino
    },

    {id:5,
      name:'Moka',
      description:'Enjoy incredible hot drink made of chocolate balls, milk and espresso',
      smallPrice:10,
      addToPrice:2,
      size:['middle'],
      pic : moka
    
    },
    ]


    
  return (
    <div className='drinkMeals'>
    
     {dummy_drinks.map((drink) =>(
      <Meal 
      name={drink.name}
      description={drink.description}
      picture={drink.pic}
      price={drink.smallPrice}
      size={drink.size}
      addToPrice={drink.addToPrice}
      />
      ))}
      
    </div>
  )
}

export default DrinkMeals