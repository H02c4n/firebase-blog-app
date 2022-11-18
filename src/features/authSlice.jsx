import { createSlice } from '@reduxjs/toolkit'

const initialState = {
currentUser: null,
displayName: null,
loading:false,
error:false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart:(state) =>{
        state.loading= true;
        state.error= false;
    },
    registerSuccess:(state,{payload})=>{
        //state.displayName = payload?.displayName;
        //state.currentUser = payload?.data?.email;
        state.loading = false;
    },
    loginSuccess:(state, {payload})=>{
      state.currentUser = payload?.email;
      state.displayName = payload?.displayName;
      state.loading= false;
    },
    authFail:(state) =>{
        state.error= true;
        state.loading=false;
    },
    logoutSuccess:(state)=>{
      state.currentUser=null;
      state.displayName=null;

    }
  }
});

export const {registerSuccess, authStart, authFail, loginSuccess, logoutSuccess} = authSlice.actions

export default authSlice.reducer