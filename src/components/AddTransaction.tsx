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
  .typeError("transaction amount must be a number")
  .notOneOf([0], "minimum transaction amount is 0.01")
  .max(9007199254740991, "maximum transaction amount is 9007199254740991")
  .test("is-min", "minimum transaction amount is 0.01 or -0.01", values => Number(values) > 0.01 || Number(values)  < -0.01)
  .required("transaction amount is required")
});

const AddTransaction = () => {
  const dispatch = useAppDispatch();
  const initialValues: AddTransactionValues = {
    name: "",
    amount: "",
  };

  return (
    <Card title="Add transactions">
      <UserForm>
        <Formik
          initialValues={initialValues}
          validationSchema={transactionSchema}
          onSubmit={(values: AddTransactionValues, { resetForm }) => {
            const newTransaction = {
              name: values.name,
              amount: values.amount,
            };
            dispatch(addTransaction(newTransaction));
            resetForm();
          }}
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
                label="amount/EUR"
                error={errors.amount}
                touched={touched.amount}
              />
              <Button type="submit" text="ADD TRANSACTION" />
            </Form>
          )}
        </Formik>
      </UserForm>
    </Card>
  );
};

export default AddTransaction;
