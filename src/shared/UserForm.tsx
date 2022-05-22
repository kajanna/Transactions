import { Wrapper } from "./interfaces";

import "./UserForm.css";

const UserForm = ({ children }: Wrapper) => {
  return <div className="form">{children}</div>;
};

export default UserForm;
