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
const ResetLink = () => {

  const actionData = useActionData();

  const navigation = useNavigation();

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (actionData) {
      showSnackbar({message: actionData.message, type: actionData.ok ? 'info' : 'error', timeOut: 8000, });
    }
  }, [actionData, showSnackbar]);

  return (
    <>
    <PageTitle title="Reset Password" />
    <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
      <div className='flex flex-col p-4'>
        <Logo classes='mb-auto mx-auto lg:mx-0'/>

        <div className="flex flex-col gap-2 max-w-[480px] w-full mx-auto">
          <h2 className="text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center">Forgot your Password?</h2>
          <p className="text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2">Enter your email, and we&apos;ll send you a reset link.</p>

          <Form method='POST' className='grid grid-cols-1 gap-4'>
          <TextField type="email" helperText='The varification link sent to your email will valid for 1 hour' name="email" placeholder=" " label={"Email"} required = {true} autoFocus = {true} />
          <Button type = "submit" disabled={navigation.state === 'submitting'}> {navigation.state === 'submitting' ? <CircularProgress size='small' /> : 'Send Reset Link'}</Button>
          </Form>
          
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

export default ResetLink;