import {createSlice, configureStore} from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';


const initialState = {
    items:[

    // {
    //     name:"Default",
    //     size:"small",
    //     toSitToGo: "to Sit",
    //     price:"0",
    //     amount: 0
    // },
    // {
    //     name:"Default",
    //     size:"small",
    //     toSitToGo: "to Sit",
    //     price:"0",
    //     amount: 1
    // },
],
    price:0,
    itemsNum:0
}

export const orderSlice = createSlice({
name:'Order',
initialState,
reducers:{

    addItem: (state,action) =>{
     
     state.items = [...state.items,action.payload]     

   },
    removeItem: (state,action)=>{

    state.items = state.items.filter(item => item.id !== action.payload.id);
    state.price = state.price-action.payload.price;
   },
   updateTotalPrice: (state,action) =>{

    console.log(action.payload);
    state.price += action.payload.finalPrice;
    
   },
   updateItemsNumber: (state,action) =>{

    state.itemsNum = action.payload.itemsNum;
   },
   cleanStore:(state,action) =>{

    state.items = [];
    state.price=0;
    state.itemsNum=0;
   },
}

});

export const {addItem,updateTotalPrice,removeItem,updateItemsNumber,cleanStore} = orderSlice.actions;
export default orderSlice.reducer;