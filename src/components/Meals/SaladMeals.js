import React from 'react'
import "./SaladMeals.css"
import Meal from './Meal'

import haloumiSalad from "./pics/haloumiSalad.jpg"
import kinoaSalad from "./pics/kinoaSalad.jpg"
import shawarmaSalad from "./pics/shawarmaSalad.jpg"
import aromaSalad from "./pics/aromaSalad.jpg"
import yerushalmiSalad from "./pics/yerushalmiSalad.jpg"
function SaladMeals() {

  var dummy_salads = [

    {
     id:1,
     name:'Haloumi',
     description:'Haloumi cooked with onion and asian dressing, served with lettuce, cucumbers, tomatoes,',
     smallPrice:30,
     addToPrice:12,
     size:['small','big'],
     pic : haloumiSalad
    },
    {
     id:2,
     name:'Aroma',
     description:'Hasa, cucumbers, tomatoes, onion mashed with asian dressing',
     smallPrice:25,
     addToPrice:12,
     size:['small','big'],
     pic : aromaSalad
    },
    {
     id:3,
     name:'Yerushalmi',
     description:'Boiled egg with tahini and crutons, served with cucumbers, tomatoes and onion',
     smallPrice:25,
     addToPrice:12,
     size:['small','big'],
     pic : yerushalmiSalad
    },
    {
      id:4,
      name:'Kinoa',
      description:'Hard to describe and also prepare',
      smallPrice:40,
      addToPrice:12,
      size:['big'],
      pic : kinoaSalad
    },
    {
      id:4,
      name:'Shawarma',
      description:'Vegan salad served with letuce, carrot, cherry, onion and soy shawarma',
      smallPrice:40,
      addToPrice:12,
      size:['big'],
      pic : shawarmaSalad
    },
  ]
  return (
    <div className='saladMeals'>
      {dummy_salads.map((salad) =>(
      <Meal 
      name={salad.name}
      description={salad.description}
      picture={salad.pic}
      price={salad.smallPrice}
      size={salad.size}
      addToPrice={salad.addToPrice}
      />
      ))}
    </div>
  )
}

export default SaladMeals