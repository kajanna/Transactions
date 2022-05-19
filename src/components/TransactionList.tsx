import React from "react";
import Transaction from "./Transaction";
import Card from "../shared/Card";

import "./TransactionList.css";

const TRANSACTUONS = [
  {
    id: "t1",
    name: "na kota",
    amountEUR: 6.52,
    amountPLN: 120,
  },
  {
    id: "t4",
    name: "na drugiego kota",
    amountEUR: 6.52,
    amountPLN: 120,
  },
  {
    id: "t6",
    name: "na trzeciego kota",
    amountEUR: 6.52,
    amountPLN: 120,
  },
];

const TransactionList = () => {
  return (
    <Card title="Transactions List">
      {TRANSACTUONS.map((t) => (
        <Transaction
          id={t.id}
          key={t.id}
          name={t.name}
          amountEUR={t.amountEUR}
          amountPLN={t.amountPLN}
        />
      ))}
    </Card>
  );
};

export default TransactionList;
