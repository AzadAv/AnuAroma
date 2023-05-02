import React,{useState, useReducer} from 'react'
import "./Choice.css"
import ReactDOM from "react-dom";

import ToSitFood from './choicesSvg/ToSitFood';
import ToGo from './choicesSvg/ToGo';
import {useSelector, connect, useDispatch} from 'react-redux';
import { addItem } from '../../store/orderStore';
import { updateTotalPrice } from '../../store/orderStore';
import { updateItemsNumber } from '../../store/orderStore';

const initialState = {toSit:true,toGo:false,value:'toSit'}
function myReducer(state,action){

    switch(action.type){

        case 'toSit':
            return {toSit:true,toGo:false,value:'toSit'};
        case 'toGo':
            return {toSit:false,toGo:true,value:'toGo'};
        default:
            return (alert("Error"));
    }
}
const ListItem=(props) =>{

    return(
   <option value={props.value} >{props.value}</option>
    )
  }
  
const Choice = (props) =>{

    const dispatch = useDispatch();
    const itemsNumber = useSelector((state) =>state.orderStoreReducer.itemsNum);
    
    var [size,sizeHandler]=useState(props.size[0]);
    var [toSitOrToGo,toGoDispatch]=useReducer(myReducer,initialState);
    var [price,priceHandler]=useState(props.price);
    var [amount,amountHandler]=useState(1);
    var [finalPrice,finalPriceHandler] = useState(price*amount);

    function changeSizeAndPrice(e){

        sizeHandler(e.target.value);
        
       if(e.target.value===props.size[0]){
        
        priceHandler(props.price);
        finalPriceHandler(props.price*amount) 
       }
       else {

        priceHandler(props.price+props.addToPrice);
        finalPriceHandler((props.price+props.addToPrice)*amount) 

       } 
    }

    function increaseAmount(){

        amountHandler(amount+1);

        finalPriceHandler(price+price*amount);
    }

    function decreaseAmount(){

        if(amount>1){
            amountHandler(amount-1)
            finalPriceHandler(finalPrice-price);
        }
    }

    function sendToStore(){

        var itemsNum = itemsNumber+1;
        dispatch(updateItemsNumber({itemsNum}))
        console.log("reducer Num "+itemsNumber)
        
        
        dispatch(addItem({
            
            id:itemsNum,
            name:props.name,
            size:size,
            toSitToGo:toSitOrToGo.value,
            price:finalPrice,
            amount:amount
        
        }))

        dispatch(updateTotalPrice({finalPrice}));
        props.onConfirm();
        

    }
  

   const sizeListItems =(
   <select value={size} onChange={changeSizeAndPrice}>
    {props.size.map((element) =>
   
   <ListItem value={element} />
   )}
   </select>)
 
     return (
     <div className='screen' >
         <div className='mealDetails'>
             <span className='mealName' >{props.name}</span>
             <span className='description'>{props.description}
                 <span className='mealPrice'>{price} &#8362;</span>
             </span>       
             <div className='mealImage'
             style={{
                 backgroundImage: `url(${props.picture})`,
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'center',
                 }}>
             </div>
         </div>
         
         <div className='mealSize'>
            <span className='text'><em>Choose size</em></span>
            <span className='choiceItemContainer'>
             {sizeListItems}
             </span>
          <span className='itemsNumber'>
          <span className='add' onClick={increaseAmount}>+</span>
        <span className='itemsNum'>{amount}</span>
        <span className='remove' onClick={decreaseAmount}>-</span>
          </span>
         </div>
         <div className='toGo'>
             <span className='text'><em>To sit / To go ?</em></span>
             <span className='choiceItemContainer'>
             <span className={toSitOrToGo.toSit ? 'choiceItemActive':'choiceItem'} onClick={()=>toGoDispatch({type:'toSit'})}><ToSitFood /></span>
             <span className={toSitOrToGo.toGo ? 'choiceItemActive':'choiceItem'} onClick={()=>toGoDispatch({type:'toGo'})}><ToGo /></span>
             </span>
             <span className='finalPrice'>Total : {finalPrice}  &#8362;</span>
         </div>
         <div className='buttons'>
             <button onClick={sendToStore}>Add to Cart</button>
             
          </div>
         <button className='closeButton' onClick={props.onConfirm}>X</button>
        
     </div>)
 }

 export default Choice;