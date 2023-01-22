import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { add, addUser, readUser } from '../Store/userreducer'
import MiniDrawer from './sidebar'
import CurrentWeather from './Card'




export default function UserDashboard() {
    let Current = { temp: "16 ", description: "Sunny", city: "Karachi", };

    const dispatch = useDispatch()
    const cities = useSelector((state) => state.users.cities)
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn)
    console.log(cities, "response")

    console.log(isLoggedIn, "loggedin")
    // useEffect(() => {
    //     // console.log("Useefeect runnning", response)


    // }, [response])

    return (
        <>
            {
                isLoggedIn != null ?
                    <>
                        <React.Fragment>
                            <MiniDrawer component={<CurrentWeather/>} />
                        </React.Fragment>
                    </>
                    :
                    <>
                        <h3>You First Need To Login</h3>
                    </>
            }
        </>
    )
}
