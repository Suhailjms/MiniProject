import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUp from './Components/signup';
import './App.css';
import Login from './Components/login';
import HomePage from './Components/home';
import DonatePage from './Components/donate';
import FundraisePage from './Components/fundraise';
import AboutPage from './Components/about';
import DonationPage from './Components/donation';
import HospitalsPage from './Components/hospital';
import EducationPage from './Components/education';
import FoodPage from './Components/food';
import PetPage from './Components/pet';
import Hospital1Page from './Components/hospital1';
import Accountpage from './Components/account';

function App() {
  return (
    <div>
        <ToastContainer />
    <BrowserRouter>
    <Routes>
       <Route path = "/" element = {<Login />} />
       <Route path = "/signup" element = {<SignUp />} />
       <Route path = "/home" element = {<HomePage />} />
       <Route path = "/donate" element = {<DonatePage />} />
       <Route path = "/fundraise" element = {<FundraisePage />} />
       <Route path = "/about" element = {<AboutPage />} />
       <Route path = "/donation" element = {<DonationPage />} />
       <Route path = "/hospital" element = {<HospitalsPage />} />
       <Route path = "/education" element = {<EducationPage />} />
       <Route path = "/food" element = {<FoodPage />} />
       <Route path = "/pet" element = {<PetPage/>} />
       <Route path = "/hospital1" element = {<Hospital1Page/>}/>
       <Route path = "/account" element = {<Accountpage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
