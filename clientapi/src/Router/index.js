import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import ProjectDashboard from '../Components/test';
import UserDashboard from '../Components/UserDashboard';

export default function AppRouter() {
    return (
        <>
            <Router>
               
                <Routes>
                    <Route path='/' element={<Signup />}></Route>
                </Routes>

                <Routes>
                    <Route path='/dashboard' element={<ProjectDashboard />}></Route>
                </Routes>

                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
                <Routes>
                    <Route path='/udashboard' element={<UserDashboard />}></Route>
                </Routes>
              
               
            </Router>
        </>
    )
}