import { useAppSelector } from "../shared/hooks/reduxHooks";
import Card from "../shared/Card";

const TotalAmount = () => {
  const allTransactions = useAppSelector(
    (state) => state.transactions.allTransactions
  );
  return (
    <Card title="Total amount of all transactions">
      <div className="center">
        {allTransactions} <span className="currency-name">EUR</span>
      </div>
    </Card>
  );
};

export default TotalAmount;
