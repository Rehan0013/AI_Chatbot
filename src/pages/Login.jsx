import React from 'react'
import PageTitle from '../components/PageTitle'
import TextField from '../components/TextField'
import { Link, Form, useNavigation, useActionData } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

import { banner } from '../assets/assets'
import { Button } from '../components/Button'
import { LinearProgress, CircularProgress } from '../components/Progress'
import { useSnackbar } from '../hooks/useSnackbar'
import Logo from '../components/Logo'
const Login = () => {

  const error = useActionData();

  const navigation = useNavigation();

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (error?.message ) {
      showSnackbar({message: error.message, type: 'error',});
    }
  }, [error, showSnackbar]);

  return (
    <>
    <PageTitle title="Login" />
    <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
      <div className='flex flex-col p-4'>
        <Logo classes='mb-auto mx-auto lg:mx-0'/>

        <div className="flex flex-col gap-2 max-w-[480px] w-full mx-auto">
          <h2 className="text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center">Welcome Back to Phoenix</h2>
          <p className="text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2">Enter your account details to Login.</p>

          <Form method='POST' className='grid grid-cols-1 gap-4'>
          <TextField type="email" name="email" placeholder=" " label={"Email"} required = {true} autoFocus = {true} />
          <TextField type="password" name="password" placeholder=" " label={"Password"} required = {true} />
          <div className="text-right"><Link to='/reset-link' className='link text-labelLarge inline-block'>Forgot Password?</Link></div>
          <Button type = "submit" disabled={navigation.state === 'submitting'}> {navigation.state === 'submitting' ? <CircularProgress size='small' /> : 'Sign In'}</Button>
          </Form>

          <p className="text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-4">Don&apos;t have an account? <Link to="/register" className='link inline-block ms-1 text-labelLarge text-light-onSurface dark:text-dark-onSurface'>Create now</Link></p>

          <p className="mt-auto mx-auto text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant lg:mx-0">&copy; Phoenix 2024 Rehan Ali.</p>
        </div>
      </div>

      <div className="hidden lg:block lg:relative lg:rounded-large img-box">
        <img src={banner} alt="" className="img-cover" />
        <p className="absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-light-onSurface drop-shadow-sm 2xl:text-[72px]">ChatBot is a powerful tool that helps you in your daily life.</p>
      </div>
    </div>

    <AnimatePresence>
    {navigation.state === 'Loading' && (
      <LinearProgress className='absolute top-0 left-0 right-0'></LinearProgress>
    )}
    </AnimatePresence>

    </>
    
  )
}

export default Login;