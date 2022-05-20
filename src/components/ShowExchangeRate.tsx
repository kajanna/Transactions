import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../shared/hooks/reduxHooks';
import { changeExchangeRate } from '../redux/transactionSlice';

import Card from "../shared/Card";

const ShowExchangeRate = () => {
  const dispatch = useAppDispatch();
  const exchangeRate = useAppSelector(state => state.transactions.exchangeRate);

  useEffect(() => {
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
         const result =  JSON.parse(data);
        dispatch(changeExchangeRate(+result.result.toFixed(2)))})
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Card title="Exchange rate">
      <div className='centerText'>1 EUR - {exchangeRate} PLN</div>
    </Card>
  );
};

export default ShowExchangeRate;