import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:null,
    userinfo:{},
    responses:"responses"

}

export const addUser=createAsyncThunk(
    'user/addUser',
    async(data,thunkApi)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3001/adduser',requestOptions)
        // console.log(res,"response")
        return res.json();
    }
)
export const readUser=createAsyncThunk(
    'readUser',
    async(data,thunkApi)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3001/queryUser',requestOptions)
        // console.log(res,"response")
        return res.json();
    }
)

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.email=action.payload
        }
    },
    extraReducers:{
        [addUser.pending]: (state, action)=>{
            console.log('pending');
        },
        [addUser.rejected]:(state,action)=>{
            console.log(state,"Got rejected from pushing user in ADDUSER")
            state.responses=action.payload.message
        },
        [addUser.fulfilled]:(state,action)=>{
            console.log(state,"fullfilled from in ADDUSER")
            state.responses=action.payload.index
        },
        [readUser.rejected]:(state,action)=>{
            console.log(state,"Got rejected from Getting user in ADDUSER")
            state.responses=action.payload.index
        },
        [readUser.fulfilled]:(state,action)=>{
            console.log(action.payload,"fullfilled from in GetUSER")
            state.responses=action.payload.message
            state.isLoggedIn=action.payload.uid
        }
    }
})

export const { add } = userSlice.actions