import React from 'react'
import MiniDrawer from './sidebar'
import CurrentWeather from './Card'
import { Card } from '@mui/material'
import ModalCard from './ModalCard'
// import DetailedInfo from './ModalCard'
export default function ProjectDashboard(){
     let Current = {temp:"cities.detail.temp", description:"cities.condition.text", city:"cities.Name", iconid:'cities.detail.condition.icon'};
     return(
         <React.Fragment>
             <MiniDrawer component={<CurrentWeather obj={Current}/>}/>
        </React.Fragment>
   )
 }

