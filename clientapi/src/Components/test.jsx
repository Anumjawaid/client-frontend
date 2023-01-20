import React from 'react'
import MiniDrawer from './sidebar'
import WeatherCard from './Card'

export default function ProjectDashboard(){

    return(
        <React.Fragment>
            <MiniDrawer component={<WeatherCard/>}/>
        </React.Fragment>
    )
}