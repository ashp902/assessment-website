import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExamScreen from './components/pages/ExamScreen';
//import Home from './components/pages/Home';
import LandingPage from './components/pages/LandingPage';
import StudentProfile from './components/pages/StudentProfile';
import Create from './components/pages/Create';
import History from './components/pages/History';
import AdminLanding from './components/pages/AdminLanding';
import AdminLogin from './components/pages/AdminLogin';

function App() {
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} ></Route>
          <Route path='/studentProfile' element={<StudentProfile />} ></Route>
          <Route path='/examScreen' element={<ExamScreen />} ></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/history' element={<History />}></Route>
          <Route path = '/adminlogin' element = { < AdminLogin / > } > </Route>  
          <Route path = '/adminlanding' element = { < AdminLanding / > } > </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;