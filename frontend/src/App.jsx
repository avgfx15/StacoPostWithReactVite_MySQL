import React from 'react';

// ~ Styling
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import AboutComponent from './Components/AboutComponent/AboutComponent';
import SignInSignUPComponent from './Components/SignInSignUPComponent/SignInSignUPComponent';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/about' element={<AboutComponent />} />
        <Route path='/signin' element={<SignInSignUPComponent />} />
      </Routes>
    </div>
  );
};

export default App;
