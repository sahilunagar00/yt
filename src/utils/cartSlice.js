import {createSlice} from '@reduxjs/toolkit';

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        item:[],
        menu : true,
    },
    reducers:{
        toggle:(state)=>{
            state.menu=!state.menu
        },
        closeMenu:(state)=>{
            state.menu=false;
        }

    }

})
export const {toggle ,closeMenu } = cartSlice.actions;
export default cartSlice.reducer;