import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogList:[],
    currentPost:JSON.parse(localStorage.getItem("currentPost")) || null,
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
    loadComment:(state, {payload})=>{
      console.log("update comment");
    },
    failPhase:(state)=>{
        state.error= true;
        state.loading= false;
    },
  }
});

export const {startPhase, failPhase, loadPosts, loadCurrentPost, loadComment} = blogSlice.actions

export default blogSlice.reducer