import React from 'react'
import "./Meal.css"
import { useState } from 'react'
import ChoicesScreen from './ChoicesScreen';
function Meal(props) {

  const [modal,modalHandler] = useState(false);

  function showModal(){

    modalHandler(!modal);
  }

  return (
    <div className='meal'>
       <div className='img' 
       style={{
       backgroundImage: `url(${props.picture})`,
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundPosition: 'center',
       }}></div>
       <span className='name'>{props.name}</span>
       <span className='description'>{props.description}</span>
       <button className='addButton' onClick={showModal}>Add to Cart</button>
        {modal && (
          <ChoicesScreen 
          name={props.name}
          description={props.description}
          picture={props.picture}
          price={props.price}
          addToPrice={props.addToPrice}
          size={props.size}
          onConfirm={showModal}/>
        )}
    </div>
  )
}

export default Meal