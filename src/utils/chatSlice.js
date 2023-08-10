import { createSlice } from "@reduxjs/toolkit";


const chatSlice=createSlice({
    name:'chat',
    initialState:{
        message:[],
    },
    reducers:{
        addChats:(state,action)=>{
            if(state.message.length > 25){
                state.message.pop();
            }
            state.message.unshift(action.payload);
        }
    }
})
export const {addChats}=chatSlice.actions;
export default chatSlice.reducer;