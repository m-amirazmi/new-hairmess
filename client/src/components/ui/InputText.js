import { useField } from 'formik';

export default function InputText({ label, ...props }) {
  const [field, meta] = useField(props);
  const valid = meta.touched && meta.error && 'is-invalid'
  return (
    <div className='d-flex flex-column mb-3'>
      <label className='form-label m-0 text-capitalize' htmlFor={props.id || props.name}>{label}</label>
      <input className={`form-control ${valid}`} aria-describedby="validationServer03Feedback" required {...field} {...props} />

      {meta.touched && meta.error ? (
        <div id="validationServer03Feedback" className="error invalid-feedback">
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}
