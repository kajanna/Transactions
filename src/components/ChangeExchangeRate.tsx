import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "../shared/hooks/reduxHooks";
import { changeExchangeRate } from "../redux/transactionSlice";

import Card from "../shared/Card";
import Button from "../shared/Button";
import UserInput from "../shared/UserInput";
import UserForm from "../shared/UserForm";

interface exchangeRateValues {
  exchangeRate: number;
}

const exchangeRateSchema = Yup.object().shape({
  exchangeRate: Yup.number()
    .typeError("amount must be a number")
    .positive("amount must be greater than zero")
    .required("amount is required"),
});

const ChangeExchangeRate = () => {
  const dispatch = useAppDispatch();

  const initialValues: exchangeRateValues = {
    exchangeRate: 0,
  };
  const onSubmit = (values: exchangeRateValues) => {
    dispatch(changeExchangeRate(+values.exchangeRate));
  };
  return (
    <Card title="Provide your own Exchange Rate">
      <UserForm>
        <Formik
          initialValues={initialValues}
          validationSchema={exchangeRateSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <UserInput
                name="exchangeRate"
                label="exchangeRate"
                error={errors.exchangeRate}
                touched={touched.exchangeRate}
              />
              <Button type="submit" text="ADD" />
            </Form>
          )}
        </Formik>
      </UserForm>
    </Card>
  );
};

export default ChangeExchangeRate;
