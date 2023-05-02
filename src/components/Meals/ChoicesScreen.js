import React,{useState, useEffect} from 'react'
import "./choicesScreen.css"
import ReactDOM from "react-dom";
import Choice from './Choice';


export const Backdrop = (props) => {

    return <div className='backdrop' onClick={props.onConfirm}></div>
}

function choicesScreen(props) {
  
  return (

    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Choice 
        name={props.name}
        description={props.description}
        picture={props.picture}
        price={props.price}
        addToPrice={props.addToPrice}
        size={props.size}
        onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>


  )
}

export default choicesScreen