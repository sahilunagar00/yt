import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';
import urlSlice from './urlSlice'

const store = configureStore({
    reducer:{
        cart:cartSlice,
        search:searchSlice,
        chat:chatSlice,
        url:urlSlice,
    }
});

export default store ;