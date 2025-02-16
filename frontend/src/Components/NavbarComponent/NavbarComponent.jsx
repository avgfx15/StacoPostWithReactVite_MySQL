import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';

import { FaMoon } from 'react-icons/fa';

import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

import { themeChangeAction } from '../../Redeux/Theme/ThemeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { loggedInUserState } from '../../Redeux/Auth/AuthSlice';
import { signOutAction } from '../../Redeux/Auth/AuthAction';

const NavbarComponent = () => {
  const dispatch = useDispatch();

  const loggedInUser = useSelector(loggedInUserState);

  const handleSignOut = () => {
    dispatch(signOutAction());
  };

  const handleThemeChange = () => {
    dispatch(themeChangeAction());
  };
  return (
    <Navbar
      fluid
      rounded
      className='mb-3 w-11/12 mx-auto bg-transparent dark:bg-transparent'
    >
      <Navbar.Brand href='/'>
        <img src={logo} className='mr-3 h-16' alt='Flowbite React Logo' />
        <span className='self-center whitespace-nowrap text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-900 py-1 px-3 rounded'>
          StacoPost
        </span>
      </Navbar.Brand>

      <div className='flex md:order-2 mx-2'>
        <div className='mr-3 text-sm'>
          <Button
            className='hidden sm:inline h-110 w-12'
            pill
            onClick={handleThemeChange}
          >
            <FaMoon />
          </Button>
        </div>
        {loggedInUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            className=' bg-sky-950'
            label={
              <Avatar
                alt='User settings'
                img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                rounded
                className='mx-2'
              />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>Bonnie Green</span>
              <span className='block truncate text-sm font-medium'>
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item className='text-sm'>Dashboard</Dropdown.Item>
            <Dropdown.Item className='text-sm'>Settings</Dropdown.Item>
            <Dropdown.Item className='text-sm'>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className='text-sm' onClick={handleSignOut}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <div className='flex items-center mr-2 text-sky-950 dark:text-white'>
            <Link to='/signin' className='text-base'>
              Sign In
            </Link>
          </div>
        )}

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className='mx-2'>
        <Navbar.Link href='/' className='text-base'>
          Home
        </Navbar.Link>
        <Navbar.Link href='/about' className='text-base'>
          About
        </Navbar.Link>
        <Navbar.Link href='/services' className='text-base'>
          Services
        </Navbar.Link>
        <Navbar.Link href='/' className='text-base'>
          Pricing
        </Navbar.Link>
        <Navbar.Link href='/contactus' className='text-base'>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
