import React from 'react'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import HomePage from './Home/HomePage'
import PostPage from './Post/PostPage'
import Header from './includes/Header'


const RoutesPath = () => (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/post/:id" element={<PostPage/>}/>
        </Routes>
    </Router>
)

export default RoutesPath
