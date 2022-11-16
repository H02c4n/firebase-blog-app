import { createSlice } from '@reduxjs/toolkit'

const initialState = {
userList:[],
currentUser:null,
loading:false,
error:false,
token:null,
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
        state.currentUser = payload.firstName +" " + payload.lastName ;
    },
    authFail:(state) =>{
        state.error= true;
        state.loading=false;
    }
  }
});

export const {registerSuccess, authStart, authFail} = authSlice.actions

export default authSlice.reducer