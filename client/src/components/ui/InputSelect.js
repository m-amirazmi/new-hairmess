import { Field } from "formik";

export default function InputSelect({ label, ...props }) {
  return (
    <div className='mb-3'>
      <label htmlFor={props.name} className='form-label text-capitalize'>{label}</label>
      <Field
        component={props.type}
        id={props.name}
        name={props.name}
        className='form-select'
      >
        <option value='' disabled>Please Select</option>
        {props.options}
      </Field>
    </div>
  );
};
