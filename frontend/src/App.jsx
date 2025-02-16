// ~ Styling
import './App.css';

import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ~ Components
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import AboutComponent from './Components/AboutComponent/AboutComponent';
import SignInSignUPComponent from './Components/SignInSignUPComponent/SignInSignUPComponent';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import { useSelector } from 'react-redux';
import { loggedInUserState } from './Redeux/Auth/AuthSlice';

const App = () => {
  const loggedInUser = useSelector(loggedInUserState);
  console.log(loggedInUser);

  return (
    <div className='w-full min-h-screen'>
      <NavbarComponent />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Slide}
      />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/about' element={<AboutComponent />} />
        <Route path='/signin' element={<SignInSignUPComponent />} />
      </Routes>
    </div>
  );
};

export default App;
