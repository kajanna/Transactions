import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../shared/hooks/reduxHooks";
import { changeExchangeRate } from "../redux/transactionSlice";

import Card from "../shared/Card";
import Modal from "../shared/Modal";
import Button from "../shared/Button";

const ShowExchangeRate = () => {
  const dispatch = useAppDispatch();
  const exchangeRate = useAppSelector(
    (state) => state.transactions.exchangeRate
  );
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let myHeaders = new Headers();
    myHeaders.append("apikey", process.env.REACT_APP_APIKEY!);

    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    fetch(
      "https://api.apilayer.com/exchangerates_data/convert?to=PLN&from=EUR&amount=1",
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => {
        const result = JSON.parse(data);
        setLoading(false);
        dispatch(changeExchangeRate(result.result));
      })
      .catch((error) => {
        setLoading(false);
        setError(
          new Error(
            "We couldn't get current exchange rate. This application will use average EUR 2022 exchange rate. You can also Provide your own exchange rate"
          )
        );
      });
  }, []);

  return (
    <>
      {error && (
        <Modal title="Error" close={() => setError(null)}>
          <div>
            <p>{error?.message}</p>
            <Button
              text="Ok"
              type="button"
              onClick={() => setError(undefined)}
            />
          </div>
        </Modal>
      )}
      <Card title="Current exchange rate">
        <div className="center">
          1 <span className="currency-name">EUR</span> - {exchangeRate}{" "}
          <span className="currency-name">PLN</span>
        </div>
      </Card>
    </>
  );
};

export default ShowExchangeRate;
