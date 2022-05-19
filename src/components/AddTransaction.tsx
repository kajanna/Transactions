import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Card from "../shared/Card";
import Button from '../shared/Button';
import UserInput from '../shared/UserInput';
import UserForm from "../shared/UserForm";

const transactionSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required"),
  amount: Yup.number()
    .typeError("amount must be a number")
    .positive("amount must be greater than zero")
    .required("amount is required"),
});


const AddTransaction = () => {
  return (
    <Card title="Add transactions">
        <UserForm>
      <Formik
        initialValues={{
         name: "",
         amount: 0.00,
        }}
        validationSchema={transactionSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <UserInput 
                name="name"
                label="name"
                error={errors.name}
                touched={touched.name}
            />
            <UserInput 
                name="amount"
                label="amount"
                error={errors.amount}
                touched={touched.amount}
            />
            <Button type="submit" text="ADD" />
          </Form>
        )}
      </Formik>
      </UserForm>
    </Card>
  );
};

export default AddTransaction;