import { useAppSelector } from "../shared/hooks/reduxHooks";

import Transaction from "./Transaction";
import Card from "../shared/Card";

const TransactionList = () => {
  const transactions = useAppSelector(
    (state) => state.transactions.transactions
  );
  return (
    <Card title="Transactions List">
      <div>
        {transactions.length === 0 && (
          <p className="centerText greyText">No transactions.</p>
        )}
        {transactions.map((t) => (
          <Transaction
            id={t.id}
            key={t.id}
            name={t.name}
            amountEUR={t.amountEUR}
            amountPLN={t.amountPLN}
          />
        ))}
      </div>
    </Card>
  );
};

export default TransactionList;
