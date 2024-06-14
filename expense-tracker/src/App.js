import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main'
import Expense from './Components/PopUpElement/Expense';
const App = () => {
  return (
    // <Routes>
    //   <Route path='/' element={<Main/>}/>
    // </Routes>
    <>
      <Expense/>
    </>
  )
}

export default App