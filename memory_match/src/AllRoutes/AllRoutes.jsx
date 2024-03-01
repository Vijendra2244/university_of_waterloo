import React from 'react'
import Home from '../pages/Home'
import Next from '../pages/Next'
import {Routes,Route} from "react-router-dom"
import Start from '../pages/Start'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/next" element={<Next/>} />
             <Route path="/start" element={<Start/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes