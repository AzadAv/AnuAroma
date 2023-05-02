import React from 'react'
import "./SandwichMeals.css"
import Meal from './Meal'

import omlet from './pics/omlet.jpg'
import haloumi from './pics/haloumi.jpg'
import shakshouka from './pics/shakshouka.jpg'
import salmon from './pics/salmon.jpg'
function SandwichMeals() {

  var dummy_sandwiches = [

    {
      id:1,
      name:'Omlet',
      description:'Fresh omlet with cream cheese, tomato, pickles and lettuce',
      smallPrice:22,
      addToPrice:5,
      size:['half','whole'],
      pic : omlet
    },
    {
      id:2,
      name:'Haloumi',
      description:'Fried haloumi cheese with cream cheese, tomato, pickles and lettuce',
      smallPrice:23,
      addToPrice:5,
      size:['half','whole'],
      pic : haloumi
    },
    
    {
      id:4,
      name:'Shakshouka',
      description:'Shakshouka mixed with eggs, petro and tahini',
      smallPrice:22,
      addToPrice:5,
      size:['half','whole'],
      pic : shakshouka
    },
    {
      id:5,
      name:'Salmon',
      description:'Smoked salmon prepared with cream cheese, onion and lettuce',
      smallPrice:25,
      addToPrice:5,
      size:['half','whole'],
      pic : salmon
    },
    {
      id:3,
      name:'Goat Cheese',
      description:'Goat cheese with tomato, basil, onion, walnuts and honey',
      smallPrice:25,
      addToPrice:5,
      size:['half','whole'],
      pic : haloumi
    },
  ]
  return (
    <div className='sandwichMeals'>
    {dummy_sandwiches.map((sandwich) =>(
      <Meal 
      name={sandwich.name}
      description={sandwich.description}
      picture={sandwich.pic}
      price={sandwich.smallPrice}
      addToPrice={sandwich.addToPrice}
      size={sandwich.size}
      
      />
      ))}
      </div>
  )
}

export default SandwichMeals