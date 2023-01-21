import React from 'react'
import MiniDrawer from './sidebar'
import CurrentWeather from './Card'
import { Card } from '@mui/material'
import ModalCard from './ModalCard'
// import DetailedInfo from './ModalCard'
export default function ProjectDashboard(){
     let Current = {temp:"16", description:"Sunny", city:"Karachi", iconid:'1'};
     return(
         <React.Fragment>
             <MiniDrawer component={<CurrentWeather obj={Current}/>}/>
        </React.Fragment>
   )
 }

// export default function ProjectDashboard(){

//     let Current = {high:"10", low:"10", humidity:"10", windSpeed:"1",sunrise:"21-01-2023",sunset:"21-01-2023",time:"21-01-2023"};
//     return(
//         <React.Fragment>
//             <MiniDrawer component={<DetailedInfo obj={Current}/>}/>
//         </React.Fragment>
//     )
// }

// export default function ProjectDashboard(){

//      return(
//         <React.Fragment>
//              <MiniDrawer component={<ModalCard/>}/>
//          </React.Fragment>
//      )
//  }