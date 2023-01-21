import React from 'react'
import MiniDrawer from './sidebar'
import CurrentWeather from './Card'
import { Card } from '@mui/material'

import cardImage from '../Components/images/mazar-e-quaid.png'
import ModalCard from './ModalCard'
// import DetailedInfo from './ModalCard'
export default function ProjectDashboard(){
     let Current = {temp:"16 ", description:"Sunny", city:"Karachi", iconid:{cardImage}};
     return(
         <React.Fragment>
             <MiniDrawer component={<CurrentWeather obj={Current}/>}/>
        </React.Fragment>
   )
 }

