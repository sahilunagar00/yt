import { createSlice } from "@reduxjs/toolkit";
import {YOUTUBE_SEARCH_API} from '../utils/constatnt'


const urlSlice=createSlice({
    name:'url',
    initialState:{
        url :YOUTUBE_SEARCH_API,
        onoff:false,
        payload:''
    },
    reducers:{
        updateURL:(state,action)=>{
          state.payload=action.payload;
          
        },
        urlonoff:(state,action)=>{
            if(action.payload==='on'){
                state.onoff=true;
            }else{
                state.onoff=false;
            }
        }
    }
})
export const {updateURL,urlonoff}=urlSlice.actions;
export default urlSlice.reducer;