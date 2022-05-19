import React, { useEffect } from 'react';

import Card from "../shared/Card";

const ShowExchangeRate = () => {

    useEffect(() => {
        //get exchange rate
    })
    return (
        <Card title='Exchange Rate'>
            <div>
            1EUR = xPLN
            </div>
        </Card>
    );
};

export default ShowExchangeRate;