import { Field } from "formik";

import "./UserInput.css";

interface UserInputProps {
  name: string;
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
}

const UserInput = ({ name, label, touched, error }: UserInputProps) => {
  return (
    <div className="user-input">
      <label className="user-input__label" htmlFor={name}>
        {label}
      </label>
      <Field className="user-input__field" name={name} />
      {error && touched && <div className="user-input__error">{error}</div>}
    </div>
  );
};

export default UserInput;
