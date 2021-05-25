import { useState } from 'react'
import * as Yup from 'yup'
import axios from 'axios'
import AuthLayout from '../../layouts/AuthLayout'
import ModalSuccess from '../../ui/ModalSuccess'
import { useHistory } from 'react-router'
import ModalError from '../../ui/ModalError'

export default function Register() {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const { push } = useHistory()

  const register = async (values, { setSubmitting }) => {
    setSubmitting(true)

    const { REACT_APP_API } = process.env
    const URL = REACT_APP_API + '/register'
    const save = {
      name: values.name,
      email: values.email,
      password: values.password,
      role: 'barber'
    }

    try {
      await axios.post(URL, save)
      setSuccess(true)
    } catch (error) {
      setError(error.response.data.error)
    }

    setSubmitting(false)
  }

  const renderConfirmModal = () => {
    const head = 'Registration Success'
    const body = (
      <div>
        <p className='text-center'>You've registered as Barber at Hairmess. Please LOGIN with the credentials that you've registered. Thank your</p>
      </div>
    )
    const foot = <button className='btn btn-primary' onClick={() => push('/barber/login')}>LOGIN NOW</button>

    return <ModalSuccess head={head} body={body} foot={foot} />
  }

  const renderErrorModal = () => {
    const head = 'Error'
    const body = (
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <i className="bi bi-exclamation-diamond fs-1 text-danger"></i>
        <p className='text-center text-capitalize'>{error.split(':')[2]}</p>
      </div>
    )
    const foot = <button className='btn btn-danger' onClick={() => setError('')}>CLOSE</button>

    return <ModalError head={head} body={body} foot={foot} />
  }

  const renderRegister = () => {

    const type = {
      title: 'Register as a Barber',
      description: 'Join us as a barber to earn money by cut people\'s hair and make your client happy!',
      footerText: 'Already have an account?',
      footerLink: '/barber/login',
      footerLinkText: 'LOGIN HERE'
    }

    const forms = {
      initialValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      lists: [
        { label: 'Name', name: 'name', type: 'text', placeholder: 'John Doe' },
        { label: 'Email', name: 'email', type: 'email', placeholder: 'janedoe@email.com' },
        { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter your password' },
        { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Re enter same password' },
      ]
    }

    const submit = {
      btnText: 'REGISTER',
      handleSubmit: register,
    }

    const validations = Yup.object({
      name: Yup.string().max(32, 'Must be 32 characters or less').required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    return <AuthLayout type={type} forms={forms} submit={submit} validations={validations} />
  }

  return (
    <>
      {renderRegister()}
      {success && renderConfirmModal()}
      {error && renderErrorModal()}
    </>
  )
}
