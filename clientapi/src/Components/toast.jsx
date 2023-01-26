import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { add, addUser, readUser,socketUpdate } from '../Store/userreducer'

export default function ToastCustom() {
    const dispatch = useDispatch()
    const response = useSelector((state) => state.users.responses)
    const display1 = useSelector((state) => state.users.display)
    return (
        <>
            <div className='' style={{ display:'block',borderTopRightRadius: '20px', borderBottomLeftRadius: '25px', width: '20%', backgroundColor: '#F3904F', position: 'relative', top: '-39px',left:'75rem' }}>

                <h1 style={{ margin: '20px', padding: '10px' }}>{response}</h1>


            </div>
        </>
    )
}