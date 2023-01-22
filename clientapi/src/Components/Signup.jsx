import { useState } from 'react'
import { add, addUser, readUser } from '../Store/userreducer'
import { LayoutStateForm } from './helper'
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { Grid, Modal } from '@mui/material'
import { Box } from '@mui/system'


export default function Signup() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const response = useSelector((state) => state.users.responses)
    
    console.log(response, "response")
    useEffect(()=>{
        console.log("Useefeect runnning",response)
        if (response == 0) {
            navigate('/udashboard')
        }
        else {
            console.log("nav not")
    
        }

    },[response])
   

    const [userdata, setUserdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

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

    const RegisterUser = () => {
        console.log("Register User", userdata)
        dispatch(addUser({ data: userdata }))
        navigate('/udashboard')

        //  *******************************This part doesnot work because of callback queue****************************

        // setTimeout(()=>{
        //     response=='Users Added Successfully' ?
        //     navigate('/login')
        //     :
        //     console.log("Unable to login",response)
        // },3000)
        



    }


    return (
        <>
        <Grid>
        <LayoutStateForm
                step='step #01'
                b1={[{ "label1": "First Name", onChange: mapUser, value: userdata.fname, name: 'firstName' }, { "label2": "Last Name", onChange: (e) => mapUser(e), value: userdata.lname, name: 'lastName' }]}
                b2={[{ "label": "Email", onChange: (e) => mapUser(e), value: userdata.email, name: 'email' }]}
                b3={[{ "label": "Password", onChange: (e) => mapUser(e), value: userdata.password, name: 'password' }]}
                b4={[{ 'label': 'Signup', onClick: () => RegisterUser() }]}
            />
                </Grid>

          
        </>
    )
}