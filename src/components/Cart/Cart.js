import React, {useEffect, useState} from 'react'
import "./Cart.css"
import { Backdrop } from '../Meals/ChoicesScreen'
import ReactDOM from "react-dom";
import {useSelector, connect, useDispatch} from 'react-redux';
import { itemAmountIncrease } from '../../store/orderStore';
import { removeItem } from '../../store/orderStore';
import {cleanStore} from '../../store/orderStore';

function Item(props){

  const dispatch = useDispatch();

  function removeItemFromList(){

  dispatch(removeItem({id:props.id,price:props.price}));
  }

  return(<div className='item'>
    
    <span className='itemName'>{props.name}</span>
    <span className='itemSize'>{props.size}</span>
    <span className='itemToGo'>{props.toSitToGo}</span>
    <span className='changeAmount'>
      <span className='itemsNumber'>{props.amount}</span>
    </span>
    <span className='itemPrice'>{props.price} &#8362;</span>
    <span className='closeButton' onClick={removeItemFromList}>X</span>
  </div>)
}
function Cart(props) {

const dispatch = useDispatch();
const totalPrice = useSelector((state) =>state.orderStoreReducer.price);
const ordersList = useSelector((state) =>state.orderStoreReducer.items);

const [orderButtonActive,orderButtonHandler]=useState(true);
const [customerName,customerNameHandler] = useState('');
const [screenSwitch, screenSwitchHandler] = useState(true);

const orderListItems = ordersList.map((order)=>(

  <Item name={order.name}
              size={order.size}
              toSitToGo={order.toSitToGo}
              price={order.price}
              amount={order.amount}
              id={order.id}
  />

))

const CartScreen = (<div className='Cart'>
<span className='head'>Your Order</span>
<span className='closeScreenBtn' onClick={props.onConfirm}>x</span>
<span className='itemTemplate'>
<span className='itemName'>Name </span>  
<span className='size'>Size</span>
<span className='toSit'>to Sit/ TA </span>
<span className='amount'>Amount</span>
<span className='templatePrice'>Price</span>
  </span>
<span className='itemsList'>
  {orderListItems}
</span>
<span className='orderDetails'>
  <input type='text' onChange={nameChange}  placeholder='Customer Name' value={customerName}></input>
  <span className='totalPrice'>Total : {totalPrice} &#8362;</span>
</span>
<span className='buttonDiv'>
    <button disabled={!orderButtonActive} onClick={submitOrder}>Order</button>
</span>
</div>);

const LastScreen = (<div className='lastScreen'>
  <h1>Thank you for order <span className='lastScreenName'>{customerName}</span>!</h1>
  <h2>Your order will be ready in 7 minutes.</h2>
  <button className='destroyButton' onClick={destroyOrder}>Close</button></div>)

function nameChange(event){

  const value=event.target.value;
  customerNameHandler(value);
}
function submitOrder(){

  screenSwitchHandler(!screenSwitch);
}
function destroyOrder(){

    dispatch(cleanStore());
    props.onConfirm();

    window.scrollTo({

      top: document.getElementById('landingPage').offsetTop,
      behavior: "smooth"
  })
}
useEffect(() => {
  
  if(ordersList.length===0 || customerName===''){
  

    orderButtonHandler(false);
  }
  else {

    orderButtonHandler(true);
  }


}, [orderListItems,nameChange])

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
   { ReactDOM.createPortal(
     (screenSwitch ? CartScreen : LastScreen),
      document.getElementById("overlay-root"))}
      </React.Fragment>
  )
}

export default Cart;