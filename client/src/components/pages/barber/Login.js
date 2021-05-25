import axios from 'axios'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import * as Yup from 'yup'
import AuthLayout from '../../layouts/AuthLayout'

export default function Login() {

  const { push } = useHistory()

  useEffect(() => {
    const ac = new AbortController
    return () => ac.abort()
  }, [])

  const login = async (values, { setSubmitting }) => {
    setSubmitting(true)
    const { REACT_APP_API } = process.env
    const URL = REACT_APP_API + '/login'

    try {
      const user = await axios.post(URL, values, {
        withCredentials: true,
      })
      await localStorage.setItem('jwt', JSON.stringify(user.data))
      push('/barber/dashboard')
    } catch (error) {
      console.log(error.response.data.error)
    }
    setSubmitting(false)
  }

  const renderLogin = () => {

    const type = {
      title: 'Login as a Barber',
      description: 'Welcome back! Let\'s make money now.',
      footerText: 'Don\'t have an account yet?',
      footerLink: '/barber/register',
      footerLinkText: 'REGISTER HERE'
    }

    const forms = {
      initialValues: {
        email: '',
        password: '',
      },
      lists: [
        { label: 'Email', name: 'email', type: 'email', placeholder: 'janedoe@email.com' },
        { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter your password' },
      ]
    }

    const submit = {
      btnText: 'LOGIN',
      handleSubmit: login,
    }

    const validations = Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    })

    return <AuthLayout type={type} forms={forms} submit={submit} validations={validations} />
  }

  return renderLogin()
}
