import React from 'react';

import "./UserForm.css"

const UserForm = ({ children }: React.PropsWithChildren<{}>) => {
    return <div className="form">{children}</div>;
  };

export default UserForm;