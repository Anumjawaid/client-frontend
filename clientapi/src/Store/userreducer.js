import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:null,
    userinfo:{},
    WeatherArr:[],
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

export const getWeather=createAsyncThunk(
    'getWeather',
    async(data,thunkApi)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3001/getWeather',requestOptions)
        // console.log(res,"response")
        return res.json();
    }
)
export const getUserDashboard=createAsyncThunk(
    'getUserDashboard',
    async(data,thunkApi)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3001/getUserDashboard',requestOptions)
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
            state.responses=action.payload.message
        },
        [readUser.rejected]:(state,action)=>{
            console.log(state,"Got rejected from Getting user in ADDUSER")
            state.responses=action.payload.index
        },
        [readUser.fulfilled]:(state,action)=>{
            console.log(action.payload,"fullfilled from in GetUSER")
            state.responses=action.payload.message
            state.isLoggedIn=action.payload.uid
        },
        [getWeather.fulfilled]:(state,action)=>{
            console.log(action.payload,"Weather of a city")
            state.responses=action.payload.message
            state.WeatherArr=action.payload
        },
        [getWeather.rejected]:(state,action)=>{
            console.log(state,"Got rejected from Getting user in ADDUSER")
        }
        
    }
})

export const { add } = userSlice.actions