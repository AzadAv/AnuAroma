import React, {useEffect,useState} from 'react'
import "./Navbar.css"

import CartIcon from '../Cart/CartIcon'
import LandingIcon from "./Icons/LandingIcon"
import CoffeeIcon from './Icons/CoffeeIcon'
import SanwichIcon from './Icons/SandwichIcon'
import SaladIcon from "./Icons/SaladIcon"
import Logo from "./logo.JPG"
import Cart from '../Cart/Cart'

import {useSelector, connect, useDispatch} from 'react-redux';

function Navbar() {

    const [show, setShow] = useState(false);
    const [cart, cartHandler] = useState(false);
    const totalItems = useSelector((state) =>state.orderStoreReducer.items.length);
    
    function showCart(){

        cartHandler(!cart);
    }

    const controlNavbar = () => {

      if (window.scrollY > 250 ) {
          setShow(false)
      }else{
        setShow(true)
      }
    }
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
    }, [])
    function goToLanding(){

        window.scrollTo({

            top: document.getElementById('landingPage').offsetTop,
            behavior: "smooth"
        })
    }
    function goToCoffee(){

        console.log(window.scrollY);
        window.scrollTo({

            top: document.getElementById('coffeeDiv').offsetTop,
            behavior: "smooth"
        })
    }
    function goToSandwiches(){

        console.log(window.scrollY);
        window.scrollTo({
            top: document.getElementById('sandwichDiv').offsetTop,
            behavior: "smooth"
        })
    }
    function goToSalads(){

        console.log(window.scrollY);
        window.scrollTo({
            top: document.getElementById('saladDiv').offsetTop,
            behavior: "smooth"
        })

    }
   
  return (<nav>
    <div  onClick={goToLanding} className={show ? 'logo':'none'}></div>
    <div className={'navbarButtons'}>
        <ul>
            <li onClick={goToLanding}><em><LandingIcon /></em></li>
            <li onClick={goToCoffee}><em><CoffeeIcon /></em></li>
            <li onClick={goToSandwiches}><em><SanwichIcon /></em></li>
            <li onClick={goToSalads}><em><SaladIcon /></em></li>
        </ul>
    
    </div>

     <div className={totalItems!=0?'cartActive':'cart'} onClick={showCart}><CartIcon />{totalItems!=0?totalItems:""}</div>
     {cart && <Cart 
     onConfirm={showCart}
     />}
     </nav>
  )
}

export default Navbar