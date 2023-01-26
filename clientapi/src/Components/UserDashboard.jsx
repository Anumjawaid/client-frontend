import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { add, addUser, readUser,socketUpdate } from '../Store/userreducer'
import MiniDrawer from './sidebar'
import CurrentWeather from './Card'
import Login from './Login'

import { io } from "socket.io-client";
const socket = io.connect("http://localhost:3001");




export default function UserDashboard() {
    let Current = { temp: "16 ", description: "Sunny", city: "Karachi", };

    const dispatch = useDispatch()
    const cities = useSelector((state) => state.users.cities)
    const cityList = useSelector((state) => state.users.cityList)
    console.log(cityList,"city Listdd")
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn)
    // console.log(cities, "response")

    // console.log(isLoggedIn, "loggedin")
    useEffect(() => {
        // console.log("Useefeect runnning", response)

        socket.emit("click", {
            "msg": isLoggedIn,
            "cities":cityList
        });


    }, [])
    useEffect(()=>{
        socket.on(isLoggedIn,(msg)=>{
            console.log("I am click 1",msg);
            dispatch(socketUpdate({
                message:"Updated Temprature Through Socket",
                cities:msg.data
            })
            )
            console.log("dispatch running")

        })
    })

    return (
        <>
            {
                isLoggedIn != null ?
                    <>
                        <React.Fragment>
                            <MiniDrawer component={<CurrentWeather />} />
                        </React.Fragment>
                    </>
                    :
                    <>
                        <h3>You First Need To Login</h3>
                        <Login />
                    </>
            }
        </>
    )
}
