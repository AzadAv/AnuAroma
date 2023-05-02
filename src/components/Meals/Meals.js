import React, {useState} from 'react'
import "./Meals.css"


import DrinkMeals from './DrinkMeals';
import SandwichMeals from './SandwichMeals';
import SaladMeals from './SaladMeals';
function Meals() {

  return (
    <div className='meals'>
      
        <div className='layout'>
            <div  id="coffeeDiv"><DrinkMeals /></div>
            <div  id="sandwichDiv"><SandwichMeals /></div>
            <div  id="saladDiv"><SaladMeals /></div>
        </div>
        
    </div>
  )
}

export default Meals