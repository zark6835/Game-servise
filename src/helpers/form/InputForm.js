import { Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
  .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, "Invalid Email")
    .required("Required"),
});

const JoinTeamSignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, "Invalid Email")
      .required("Required"),
    portfolio: Yup.string()
    .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid Link")
    .required("Required"),

    file: Yup.array().required("Required")
   })
   



const InputForm = ({error, touched, name, type, className, id, onChange, placeholder, value}) => {
    return ( 
        <Field autocomplete="off" name={name} type={type} value={value} className={className} id={id} onChange={onChange} placeholder={placeholder}/>
     );
}
 
export {InputForm, JoinTeamSignupSchema, SignupSchema};