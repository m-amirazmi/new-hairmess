import { Form, Formik } from 'formik'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import InputSelect from './InputSelect'
import InputText from './InputText'
import 'react-day-picker/lib/style.css';

export default function ModalUpdate({ head, body, foot }) {
  const renderHead = () => {
    return (
      <div className='modal-header'>
        <h5 className='modal-title' id='exampleModalLabel'>{head}</h5>
        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
      </div>
    )
  }

  const renderBody = () => {
    const inputs = body?.forms?.lists.map((input) => {
      if (input.type === 'select') return (
        <div className='col-md-6'>
          <InputSelect label={input.label} name={input.name} type={input.type} options={input.options} value={input.value} />
        </div>
      )

      if (input.type === 'date') return (
        <div className='col-md-6'>
          <div>Date of Birth</div>
          <DayPickerInput selectedDays={input.start} onDayChange={input.setDate} />
        </div>
      )

      return (
        <div className='col-md-6'>
          <InputText key={input.label} label={input.label} name={input.name} type={input.type} placeholder={input.placeholder} value={input.value} />
        </div>
      )
    })

    return (
      <div className='modal-body'>
        <Formik initialValues={body?.forms?.initialValues} validationSchema={body?.validations} onSubmit={body?.submit?.handleSubmit}>
          {({ isSubmitting }) => (
            <Form className='form-floating'>
              <div className='row'>
                {inputs}
              </div>
              <button disabled={isSubmitting} type='submit' className='btn btn-primary w-100'>{body?.submit?.btnText}</button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }

  const renderFoot = () => {
    return (
      <div className='modal-footer'>
        {foot}
      </div>
    )
  }

  const renderModal = () => {

    return (
      <div className='__modal'>
        <div className='__modal-content'>
          <div className='modal-dialog' >
            <div className='modal-content'>
              {renderHead()}
              {renderBody()}
              {renderFoot()}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return renderModal()

}
