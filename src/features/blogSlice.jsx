import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogList:[],
    currentBlog:null,
    loading:false,
    error:false,
}

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    startPhase:(state)=>{
        state.loading= true;
        state.error= false;
    },
    successPhase:(state,{payload})=>{
        state.loading= false;
        state.blogList= payload;
    },
    failPhase:(state)=>{
        state.error= true;
        state.loading= false;
    },
  }
});

export const {startPhase, successPhase, failPhase} = blogSlice.actions

export default blogSlice.reducer