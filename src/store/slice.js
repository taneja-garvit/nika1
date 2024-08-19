import { createSlice } from "@reduxjs/toolkit";

const initialState={
    navOpen:false,
}

const slice = createSlice({
    name:'main',
    initialState,
    reducers:{
        setNavOpen:(state,action)=>{
            state.navOpen = action.payload
        },
    }
})

export const {setNavOpen} = slice.actions;

export default slice.reducer;