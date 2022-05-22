import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "../shared/hooks/reduxHooks";
import { changeExchangeRate } from "../redux/transactionSlice";

import Card from "../shared/Card";
import Button from "../shared/Button";
import UserInput from "../shared/UserInput";
import UserForm from "../shared/UserForm";

interface exchangeRateValues {
  exchangeRate: string;
}

const exchangeRateSchema = Yup.object().shape({
  exchangeRate: Yup.number()
    .typeError("exchange rate must be a number")
    .min(0.01, "minimum exchange rate is 0.01")
    .max(9007199254740991, "maximum exchange rate is 9007199254740991")
    .required("exchange rate is required"),
});

const ChangeExchangeRate = () => {
  const dispatch = useAppDispatch();

  const initialValues: exchangeRateValues = {
    exchangeRate: "",
  };
  return (
    <Card title="Provide your own Exchange Rate">
      <UserForm>
        <Formik
          initialValues={initialValues}
          validationSchema={exchangeRateSchema}
          onSubmit={(values: exchangeRateValues, { resetForm }) => {
            dispatch(changeExchangeRate(values.exchangeRate));
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <UserInput
                name="exchangeRate"
                label="exchange rate/PLN"
                error={errors.exchangeRate}
                touched={touched.exchangeRate}
              />
              <Button type="submit" text="ADD EXCHANGE RATE" />
            </Form>
          )}
        </Formik>
      </UserForm>
    </Card>
  );
};

export default ChangeExchangeRate;
