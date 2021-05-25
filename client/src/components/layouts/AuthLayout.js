import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/images/logo.svg'
import InputText from '../ui/InputText'

export default function AuthLayout({ type, forms, submit, validations }) {
  const renderTitle = () => {
    return (
      <div className='auth_title'>
        <img src={LOGO} alt='brand.svg' className='auth_logo' />
        <p className='text-center'>{type.description}</p>
        <h4>{type.title}</h4>
      </div>
    )
  }

  const renderForm = () => {
    const inputs = forms.lists.map((input) => <InputText key={input.label} label={input.label} name={input.name} type={input.type} placeholder={input.placeholder} />)
    return (
      <Formik initialValues={forms.initialValues} validationSchema={validations} onSubmit={submit.handleSubmit}>
        {({ isSubmitting }) => (
          <Form className='form-floating'>
            {inputs}
            <button disabled={isSubmitting} type='submit' className='btn btn-primary w-100'>{submit.btnText}</button>
          </Form>
        )}
      </Formik>
    )
  }

  const renderFooter = () => {
    return (
      <div className='mt-3 d-flex'>
        <p className='ms-auto'>{type.footerText} <Link to={type.footerLink} className='fw-bold'>{type.footerLinkText}</Link></p>
      </div>
    )
  }

  const renderContent = () => {
    return (
      <div className='auth'>
        <div className='container auth_container'>
          <div className='card card-body shadow-sm rounded-3 auth_card'>
            {renderTitle()}
            {renderForm()}
            {renderFooter()}
          </div>
        </div>
      </div>
    )
  }

  return renderContent()
}
