import { useState } from 'react'
import {add,addUser,readUser} from '../Store/userreducer'
import { LayoutStateForm } from './helper'
import { useDispatch, useSelector } from "react-redux"


export default function Login(){
    const [userdata,setUserdata]=useState({
       
        email:"",
        password:""
    })

    const mapUser=(event)=>{
        const {name,value}=event.target
        // console.log("On map user",event.target.name,event.target.value)
        setUserdata((data)=>{
            return{
            ...data,
            [name]:value
            }
        })

    }
    const dispatch=useDispatch()
    const LoginUser=()=>{
        console.log("Login User",userdata)
        dispatch(readUser({data:userdata}))
    }
    return (
        <>
        <LayoutStateForm 
        step="Login Here"
        b2={[{"label":"Email",onChange:(e)=>mapUser(e),value:userdata.email,name:'email'}]}
        b3={[{"label":"Password",onChange:(e)=>mapUser(e),value:userdata.password,name:'password'}]}
        b4={[{'label':'Login',onClick:()=>LoginUser()}]}
        />
        </>
    )
}