import {createSlice, configureStore} from '@reduxjs/toolkit';


const initialState = {value: "Default"};

export const subButtonsSlice = createSlice({

    name: 'subButtons',
    initialState,
    reducers:{

          deals(state) {

            state.value="Deals";
          },

          hotDrinks(state) {

            state.value="Hot Drinks";
          },

          coldDrinks(state) {

            state.value="Cold Drinks"
          },

          bakery(state){

            state.value = "Bakery"
          },

          breakfast(state){

            state.value="Breakfast"
          },
          lunch(state){

            state.value="Lunch"
          },
          adding(state){

            state.value="Adding"
          }
    }
});

export const { deals,hotDrinks,coldDrinks,bakery,breakfast,lunch,adding} = subButtonsSlice.actions;
export default subButtonsSlice.reducer;