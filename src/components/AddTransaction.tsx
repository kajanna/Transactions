import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "../shared/hooks/reduxHooks";
import { addTransaction } from "../redux/transactionSlice";

import { AddTransactionValues } from "../shared/interfaces";
import Card from "../shared/Card";
import Button from "../shared/Button";
import UserInput from "../shared/UserInput";
import UserForm from "../shared/UserForm";

const transactionSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  amount: Yup.number()
    .typeError("amount must be a number")
    .positive("amount must be greater than zero")
    .required("amount is required"),
});

const AddTransaction = () => {
  const dispatch = useAppDispatch();

  const initialValues: AddTransactionValues = {
    name: "",
    amount: 0,
  };
  const onSubmit = (values: AddTransactionValues) => {
    const newTransaction = {
      name: values.name,
      amount: +values.amount,
    };
    dispatch(addTransaction(newTransaction));
  };
  return (
    <Card title="Add transactions">
      <UserForm>
        <Formik
          initialValues={initialValues}
          validationSchema={transactionSchema}
          onSubmit={onSubmit}
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
