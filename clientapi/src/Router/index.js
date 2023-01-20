import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from '../Components/Signup';
import ProjectDashboard from '../Components/test';

export default function AppRouter() {
    return (
        <>
            <Router>
               
                <Routes>
                    <Route path='/' element={<ProjectDashboard />}></Route>
                </Routes>
              
               
            </Router>
        </>
    )
}