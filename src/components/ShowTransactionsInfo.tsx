import { useAppSelector } from "../shared/hooks/reduxHooks";

import Transaction from "./Transaction";
import Card from "../shared/Card";

import "./ShowTransactionInfo.css";

const ShowTransactionsInfo = () => {
  const maxTransactions = useAppSelector(
    (state) => state.transactions.maxTransactions
  );
  return (
    <Card title="Transactions with the highest amount">
        <div>
        {maxTransactions.length === 0 && (
          <p className="center">No transactions.</p>
        )}
        {maxTransactions.map((t) => (
          <Transaction
            showDeleteButton={false}
            id={t.id}
            name={t.name}
            amountEUR={t.amountEUR}
            amountPLN={t.amountPLN}
          />
        ))}
      </div>
    </Card>
  );
};

export default ShowTransactionsInfo;
