import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogList:[],
    currentPost:null,
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
    loadPosts:(state, {payload})=>{
      state.blogList = payload;
      state.loading= false;
    },
    loadCurrentPost:(state, {payload})=>{
      state.currentPost = payload;
      state.loading = false;
    },
    failPhase:(state)=>{
        state.error= true;
        state.loading= false;
    },
  }
});

export const {startPhase, failPhase, loadPosts, loadCurrentPost} = blogSlice.actions

export default blogSlice.reducer