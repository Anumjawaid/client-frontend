import { useState } from 'react'
import { add, addUser, readUser } from '../Store/userreducer'
import { LayoutStateForm } from './helper'
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from 'react-router'
import { useEffect } from 'react'


export default function Login() {

    const navigate = useNavigate()
    const [userdata, setUserdata] = useState({

        email: "",
        password: ""
    })
    const response = useSelector((state) => state.users.responses)

    console.log(response, "response")
    useEffect(() => {
        console.log("Useefeect runnning", response)

        if (response == "valid ") {
            navigate('/udashboard')
        }
        else {
            console.log("nav not")

        }

    }, [response])
    const mapUser = (event) => {
        const { name, value } = event.target
        // console.log("On map user",event.target.name,event.target.value)
        setUserdata((data) => {
            return {
                ...data,
                [name]: value
            }
        })

    }
    const dispatch = useDispatch()
    const LoginUser = () => {
        console.log("Login User", userdata)
        dispatch(readUser({ data: userdata }))
    }
    return (
        <>
            <LayoutStateForm
                step="Login"
                steptag="Doesnot have an Account ?"
                link='/'
                linkname='SIGNUP'
                b2={[{ "label": "Email", onChange: (e) => mapUser(e), value: userdata.email, name: 'email' }]}
                b3={[{ "label": "Password", onChange: (e) => mapUser(e), value: userdata.password, name: 'password' }]}
                b4={[{ 'label': 'Login', onClick: () => LoginUser() }]}
            />
        </>
    )
}