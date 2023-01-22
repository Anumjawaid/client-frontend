import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:null,
    userinfo:{
        firstName:"",
        lastName: "",
        email: "",
        password: "",
        
    },
    cities:[],
    currentCities:{},
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
export const addCity=createAsyncThunk(
    'addCity',
    async(data,thunkApi)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        
        const res = await fetch('http://localhost:3001/addCity',requestOptions)
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
            state.userinfo=action.payload.result
            state.isLoggedIn=action.payload.result._id
            state.cities=action.payload.result.cities
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
            state.currentCities=action.payload.data
            console.log(state.currentCities)
        },
        [getWeather.rejected]:(state,action)=>{
            console.log(state,"Got rejected from Getting Weather")
        },
        [addCity.fulfilled]:(state,action)=>{
            console.log(action.payload,"City Added")
            state.cities=action.payload.result.cities
        },
        [addCity.rejected]:(state,action)=>{
            console.log(state,"City Added got rejected")
        }
        
    }
})

export const { add } = userSlice.actions