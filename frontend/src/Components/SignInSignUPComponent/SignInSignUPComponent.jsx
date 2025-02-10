// ~ Flowbite Components
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

// ~ Icon from heroicon/react
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'; // Import icons

// ~ Login Page Image
import loginImg from '../../assets/images/christin-hume-mfB1B1s4sMc-unsplash.jpg';

// ~ React Hook
import { useState } from 'react';

// # Main SingIn SIgnUp Function
const SignInSignUPComponent = () => {
  // & Toggle SignIn SignUp
  const [toggleSignInSignUp, setToggleSignInSignUp] = useState(false);

  // & Toggle ShowPassword
  const [showPassword, setShowPassword] = useState(false);

  // & Toggle agreeTerms and Conditions
  const [agreeWithTerms, setAgreeWithTerms] = useState(false);

  // & Toggle Show Terms and Conditions
  const [showTermsAndCondition, setShowTermsAndContition] = useState(false);

  // & Get Input Data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    cPassword: '',
  });

  // % Handle Change
  const handleChange = async (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // % Handle SignUp Submit
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.cPassword || !formData.email || !formData.password) {
        console.log('All fields are required');
      } else if (formData.cPassword !== formData.password) {
        console.log('Password and Confirmed Password do not match');
      } else if (!agreeWithTerms) {
        console.log('You must agree to the Terms and Conditions');
      } else {
        console.log(formData);
        console.log('Sign Up Successful');
      }
    } catch (error) {
      console.log(error);
    }
  };
  // % Handle SignIN Submit
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.email || !formData.password) {
        console.log('All fields are required');
      } else {
        console.log(formData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // # Render Function
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='bg-white w-11/12 h-3/4 mx-auto my-auto flex flex-col lg:flex-row justify-center items-center rounded-lg'>
        <div className='w-full lg:w-1/2 p-3'>
          <img
            src={loginImg}
            alt='Login'
            className='w-full h-auto rounded-lg'
          />
        </div>
        {toggleSignInSignUp ? (
          <div className='w-full lg:w-1/2 p-3 border-t-2 lg:border-t-0 lg:border-l-2 border-sky-950'>
            <div className=''>
              <h1 className='text-2xl font-bold text-center text-sky-900'>
                Sign Up
              </h1>
              <form
                className='flex flex-col gap-4 md:w-full'
                onSubmit={handleSignUpSubmit}
              >
                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='email' value='Your email' />
                  </div>
                  <TextInput
                    id='email'
                    type='email'
                    placeholder='test@gmail.com'
                    onChange={handleChange}
                    shadow
                  />
                </div>
                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='password' value='Your password' />
                  </div>
                  <TextInput
                    id='password'
                    type='password'
                    shadow
                    onChange={handleChange}
                  />
                </div>
                <div className='relative'>
                  <div className='mb-2 block'>
                    <Label htmlFor='cPassword' value='Confirm password' />
                  </div>
                  <TextInput
                    id='cPassword'
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChange}
                  />
                  <button
                    type='button'
                    className='absolute inset-y-0 right-3 top-8 flex items-center'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className='w-5 h-5 text-sky-950' />
                    ) : (
                      <EyeIcon className='w-5 h-5 text-sky-950' />
                    )}
                  </button>
                </div>
                <div className='flex items-center gap-2'>
                  <Checkbox
                    id='agree'
                    className='border-sky-950 border-2'
                    checked={agreeWithTerms}
                    onChange={() => setAgreeWithTerms(!agreeWithTerms)}
                  />
                  <Label htmlFor='agree' className='flex'>
                    I agree with the&nbsp;{''}
                    <button
                      type='button'
                      className='text-blue-600 underline'
                      onClick={() => setShowTermsAndContition(true)}
                    >
                      Terms & Conditions
                    </button>
                  </Label>
                </div>
                {/* Terms & Conditions Modal */}
                {showTermsAndCondition && (
                  <Modal
                    show={showTermsAndCondition}
                    onClose={() => setShowTermsAndContition(false)}
                  >
                    <Modal.Header>Terms & Conditions</Modal.Header>
                    <Modal.Body>
                      <p className='text-sm'>
                        1. You must be at least 18 years old to register. <br />
                        2. Your personal data will be securely stored. <br />
                        3. You cannot share your account credentials with
                        others. <br />
                        4. Violation of terms may result in account suspension.{' '}
                        <br />
                        5. We reserve the right to update these terms anytime.
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <button
                        className='bg-blue-600 text-white px-4 py-2 rounded-lg'
                        onClick={() => setShowTermsAndContition(false)}
                      >
                        Close
                      </button>
                    </Modal.Footer>
                  </Modal>
                )}
                <Button
                  type='submit'
                  className='bg-gradient-to-r from-sky-600 to-sky-900'
                >
                  Register new account
                </Button>
              </form>
              <p className='text-sm'>
                If You have already account, Please{' '}
                <span className='text-lg text-sky-900 font-semibold'>
                  <button
                    onClick={() => setToggleSignInSignUp(!toggleSignInSignUp)}
                  >
                    Sign In
                  </button>
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className='w-full lg:w-1/2 p-3 border-t-2 lg:border-t-0 lg:border-l-2 border-sky-950'>
            <div className=''>
              <h1 className='text-2xl font-bold text-center text-sky-900'>
                Sign In
              </h1>
              <form
                className='flex flex-col gap-4 md:w-full'
                onSubmit={handleSignInSubmit}
              >
                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='email2' value='Your email' />
                  </div>
                  <TextInput
                    id='email'
                    type='email'
                    placeholder='name@flowbite.com'
                    required
                    onChange={handleChange}
                    shadow
                  />
                </div>
                <div>
                  <div className='mb-2 block'>
                    <Label htmlFor='password2' value='Your password' />
                  </div>
                  <TextInput
                    id='password'
                    type='password'
                    required
                    shadow
                    onChange={handleChange}
                  />
                </div>

                {/* <div className='flex items-center gap-2'>
                  <Checkbox id='agree' />
                  <Label htmlFor='agree' className='flex'>
                    I agree with the&nbsp;
                    <Link
                      href='#'
                      className='text-cyan-600 hover:underline dark:text-cyan-500'
                    >
                      terms and conditions
                    </Link>
                  </Label>
                </div> */}
                <Button
                  type='submit'
                  className='bg-gradient-to-r from-sky-600 to-sky-900'
                >
                  Sign In
                </Button>
              </form>
              <p className='text-sm'>
                If You have already account, Please{' '}
                <span className='text-lg text-sky-900 font-semibold'>
                  <button
                    onClick={() => setToggleSignInSignUp(!toggleSignInSignUp)}
                  >
                    Sign Up
                  </button>
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInSignUPComponent;
