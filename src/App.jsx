import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddStudents from './AddStudents'
import ShowStudent from './ShowStudent'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div >
          <Link to="/">All Student</Link>
          <Link to="/add-student">Add Student</Link>
        </div>
        <Routes>
          <Route path='/add-student' element={<AddStudents />} />
          {/* <Route path='/' element={<ShowStudent />} /> */}
        </Routes>
      </BrowserRouter>



    </>

  )
}

export default App
