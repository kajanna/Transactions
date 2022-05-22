import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import ShowTransactionsInfo from "./components/ShowTransactionsInfo";
import ShowExchangeRate from "./components/ShowExchangeRate";
import ChangeExchangeRate from "./components/ChangeExchangeRate";
import TotalAmount from "./components/TotalAmount";

import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <div>
          <AddTransaction />
          <ShowExchangeRate />
          <ChangeExchangeRate />
        </div>
        <div>
          <TotalAmount />
          <ShowTransactionsInfo />
          <TransactionList />
        </div>
      </main>
    </div>
  );
}

export default App;
