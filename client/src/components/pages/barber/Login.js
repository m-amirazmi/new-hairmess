import * as Yup from 'yup'
import AuthLayout from '../../layouts/AuthLayout'

export default function Login() {
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
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      lists: [
        { label: 'Email', name: 'email', type: 'email', placeholder: 'janedoe@email.com' },
        { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter your password' },
      ]
    }

    const submit = {
      btnText: 'LOGIN',
      handleSubmit: () => { },
    }

    const validations = Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    })

    return <AuthLayout type={type} forms={forms} submit={submit} validations={validations} />
  }

  return renderLogin()
}
