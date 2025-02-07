import React from 'react';

// ~ Styling
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import AboutComponent from './Components/AboutComponent/AboutComponent';
import SignInSignUPComponent from './Components/SignInSignUPComponent/SignInSignUPComponent';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeComponent />} />
      <Route path='/about' element={<AboutComponent />} />
      <Route path='/signin' element={<SignInSignUPComponent />} />
    </Routes>
  );
};

export default App;
