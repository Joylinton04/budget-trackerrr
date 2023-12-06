import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Analytics from '../pages/Analytics';
import Expenses from '../pages/Expenses';

const Approute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='budget/:id/expense' element={<Expenses/>}/>
    </Routes>
  )
}

export default Approute;