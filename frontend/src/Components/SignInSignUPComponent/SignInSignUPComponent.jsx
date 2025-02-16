// ~ Flowbite Components
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

// ~ Icon from heroicon/react
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'; // Import icons

// ~ Login Page Image
import loginImg from '../../assets/images/christin-hume-mfB1B1s4sMc-unsplash.jpg';

// ~ React Hook
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authErrorMessageState } from '../../Redeux/Auth/AuthSlice';
import { toast } from 'react-toastify';
import { signInAction, signUpAction } from '../../Redeux/Auth/AuthAction';

// # Main SingIn SIgnUp Function
const SignInSignUPComponent = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // & Toggle SignIn SignUp
  const [toggleSignInSignUp, setToggleSignInSignUp] = useState(false);

  // & Toggle ShowPassword
  const [showPassword, setShowPassword] = useState(false);

  // & Toggle agreeTerms and Conditions
  const [agreeWithTerms, setAgreeWithTerms] = useState(false);

  // & Toggle Show Terms and Conditions
  const [showTermsAndCondition, setShowTermsAndContition] = useState(false);

  // / Get Current State From Redux Store

  const authErrorMessage = useSelector(authErrorMessageState);

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

    if (!formData.cPassword || !formData.email || !formData.password) {
      toast.info('All fields are required');
    } else if (formData.cPassword !== formData.password) {
      toast.info('Password and Confirmed Password do not match');
    } else if (!agreeWithTerms) {
      toast.info('You must agree to the Terms and Conditions');
    } else {
      const response = await dispatch(signUpAction(formData));

      if (response.meta.requestStatus === 'rejected') {
        toast.error(response.payload);
      } else if (response.meta.requestStatus === 'fulfilled') {
        toast.success(response.payload.message);
      } else {
        toast.info('Something went wrong');
      }
    }
    setFormData({
      email: '',
      password: '',
      cPassword: '',
    });
  };
  // % Handle SignIN Submit
  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.email || !formData.password) {
        toast.info('All fields are required');
      } else {
        const response = await dispatch(signInAction(formData));

        if (response.meta.requestStatus === 'rejected') {
          toast.error(response.payload);
        } else if (response.meta.requestStatus === 'fulfilled') {
          toast.success(response.payload.message);
          navigate('/');
        } else {
          toast.info('Something went wrong');
        }
      }
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      toast.error(authErrorMessage, error);
    }
  };

  // # Render Function
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='bg-sky-950 text-white dark:text-sky-950 dark:bg-white w-11/12 h-3/4 mx-auto my-auto flex flex-col lg:flex-row justify-center items-center rounded-lg'>
        <div className='w-full lg:w-1/2 p-3'>
          <img
            src={loginImg}
            alt='Login'
            className='w-full h-auto rounded-lg'
          />
        </div>
        {toggleSignInSignUp ? (
          <div className='w-full lg:w-1/2 p-3 border-t-2 lg:border-t-0 lg:border-l-2 border-sky-950 my-3'>
            <div className=''>
              <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
              <form
                className='flex flex-col gap-4 md:w-full'
                onSubmit={handleSignUpSubmit}
              >
                <div>
                  <div className='mb-2 block'>
                    <Label
                      htmlFor='email'
                      value='Your email'
                      className='text-white dark:text-sky-950'
                    />
                  </div>
                  <TextInput
                    id='email'
                    type='email'
                    placeholder='test@gmail.com'
                    value={formData.email}
                    onChange={handleChange}
                    shadow
                  />
                </div>
                <div>
                  <div className='mb-2 block'>
                    <Label
                      htmlFor='password'
                      value='Your password'
                      className='text-white dark:text-sky-950'
                    />
                  </div>
                  <TextInput
                    id='password'
                    type='password'
                    shadow
                    onChange={handleChange}
                    value={formData.password}
                  />
                </div>
                <div className='relative'>
                  <div className='mb-2 block'>
                    <Label
                      htmlFor='cPassword'
                      value='Confirm password'
                      className='text-white dark:text-sky-950'
                    />
                  </div>
                  <TextInput
                    id='cPassword'
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChange}
                    value={formData.cPassword}
                  />
                  <button
                    type='button'
                    className='absolute inset-y-0 right-3 top-8 flex items-center'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className='w-5 h-5 text-sky-950 dark:text-white' />
                    ) : (
                      <EyeIcon className='w-5 h-5 text-sky-950 dark:text-white' />
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
                  <Label
                    htmlFor='agree'
                    className='flex text-white dark:text-sky-950'
                  >
                    I agree with the&nbsp;{''}
                    <button
                      type='button'
                      className='underline'
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
                        className='bg-blue-600 px-4 py-2 rounded-lg'
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
                  disabled={!agreeWithTerms}
                >
                  Register new account
                </Button>
              </form>
              <p className='text-sm my-3'>
                If You have already account, Please{' '}
                <span className='text-lg font-semibold'>
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
              <h1 className='text-2xl font-bold text-center'>Sign In</h1>
              <form
                className='flex flex-col gap-4 md:w-full'
                onSubmit={handleSignInSubmit}
              >
                <div>
                  <div className='mb-2 block'>
                    <Label
                      htmlFor='email2'
                      value='Your email'
                      className='text-white dark:text-sky-950'
                    />
                  </div>
                  <TextInput
                    id='email'
                    type='email'
                    placeholder='name@flowbite.com'
                    required
                    onChange={handleChange}
                    value={formData.email}
                    shadow
                  />
                </div>
                <div>
                  <div className='mb-2 block'>
                    <Label
                      htmlFor='password2'
                      value='Your password'
                      className='text-white dark:text-sky-950'
                    />
                  </div>
                  <TextInput
                    id='password'
                    type='password'
                    required
                    shadow
                    onChange={handleChange}
                    value={formData.password}
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
                  className='bg-gradient-to-r from-sky-600 to-sky-900 mt-3'
                >
                  Sign In
                </Button>
              </form>
              <p className='text-sm mt-3'>
                If You have already account, Please{' '}
                <span className='text-lg font-semibold'>
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
