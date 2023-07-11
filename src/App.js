import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Components/login';
import SignUp from './Components/signup';
import './App.css';
import Login from './Components/login';

function App() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
       <Route path = "/" element = {<Login />} />
       <Route path = "/signup" element = {<SignUp />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
