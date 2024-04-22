'use client'
import './App.css'
import {  Login, QuizPage, SignUp, ToughnessPage , Result } from './components'
import { Route , Routes, BrowserRouter } from 'react-router-dom';



function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
        <Route path="/" element={<Login />}  />
        <Route path="/toughnesspage"  element={<ToughnessPage />} />
        <Route path="/quizpage"  element={<QuizPage />} />
        <Route path="/signup"  element={<SignUp />} />
        <Route path="/result"  element={<Result />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
