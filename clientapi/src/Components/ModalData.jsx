import React from 'react'
import { add, addUser, readUser ,currentCityChange} from '../Store/userreducer'
import { LayoutStateForm } from './helper'
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { Grid, Modal } from '@mui/material'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography';
import { FilledButton } from './helper';
import { ChangeCircle } from '@mui/icons-material'




export default function SingleTemp() {
    const style = {
        position: 'absolute',
         
      
      };
      const navigate = useNavigate()

      let change=()=>{
        dispatch(currentCityChange())
        navigate('/udashboard')
      }
    const dispatch = useDispatch()
    const currentCities = useSelector((state) => state.users.currentCities)
    console.log(currentCities,'city')
    return (
        <>
            <Box sx={style}>
			<FilledButton name={"BACK"} fn={() => change()} />

                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
                    Your City's Descriptive Data
                </Typography>

                <img src={currentCities.current.condition.icon}/>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <p style={{ textAlign: 'center' }}>City Name:{currentCities.location.name}</p>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <p style={{ textAlign: 'center' }}>Temprature:{currentCities.current.temp_c} 'C</p>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <p style={{ textAlign: 'center' }}>WindSpeed: {currentCities.current.wind_kph}</p>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <p style={{ textAlign: 'center' }}><p>Sunset:</p></p>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <p style={{ textAlign: 'center' }}>Description: {currentCities.current.condition.text}</p>
                </Typography>
               
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <p style={{ textAlign: 'center' }}>Date:  {currentCities.current.last_updated}</p>
                </Typography>
            </Box>
        </>
    )
}