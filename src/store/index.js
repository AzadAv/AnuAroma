import {configureStore} from '@reduxjs/toolkit';
import orderStore from './orderStore';

const store = configureStore({

    reducer: {orderStoreReducer: orderStore},
});

export default store;