'use client'
import './App.css'
import {  Login, QuizPage, Signup, ToughnessPage } from './components'
import { Route , Routes, BrowserRouter } from 'react-router-dom';



function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>

        <Route path="/" element={<Login />}  />
        <Route path="/Toughnesspage"  element={<ToughnessPage />} />
        <Route path="/QuizPage"  element={<QuizPage />} />
        <Route path="/Signup"  element={<Signup />} />


      </Routes>
    </BrowserRouter>
    {/* <ToughnessPage /> */}
    {/* <QuizPage /> */}
    </>
  )
}

export default App
