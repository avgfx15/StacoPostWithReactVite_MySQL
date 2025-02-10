import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';

import { FaMoon } from 'react-icons/fa';

import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const loggedInUser = false;
  return (
    <Navbar fluid rounded className='bg-transparent pt-5 mb-3 w-11/12 mx-auto'>
      <Navbar.Brand href='/'>
        <img src={logo} className='mr-3 h-16' alt='Flowbite React Logo' />
        <span className='self-center whitespace-nowrap text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-900 py-1 px-3 rounded'>
          StacoPost
        </span>
      </Navbar.Brand>

      <div className='flex md:order-2 mx-2'>
        <div className='mr-3 text-sm'>
          <Button className='hidden sm:inline h-110 w-12' color='white' pill>
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
              <span className='block text-sm text-white'>Bonnie Green</span>
              <span className='block truncate text-sm text-white font-medium'>
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item className='text-sm text-white'>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item className='text-sm text-white'>
              Settings
            </Dropdown.Item>
            <Dropdown.Item className='text-sm text-white'>
              Earnings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className='text-sm text-white'>
              Sign out
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <div className='flex items-center mr-2'>
            <Link to='/signin' className='text-white text-base'>
              Sign In
            </Link>
          </div>
        )}

        <Navbar.Toggle className='text-sky-400' />
      </div>

      <Navbar.Collapse className='mx-2'>
        <Navbar.Link href='/' className='text-white text-base'>
          Home
        </Navbar.Link>
        <Navbar.Link href='/about' className='text-white text-base'>
          About
        </Navbar.Link>
        <Navbar.Link href='/services' className='text-white text-base'>
          Services
        </Navbar.Link>
        <Navbar.Link href='/' className='text-white text-base'>
          Pricing
        </Navbar.Link>
        <Navbar.Link href='/contactus' className='text-white text-base'>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
