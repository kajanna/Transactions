import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import ShowTransactionsInfo from "./components/ShowTransactionsInfo";
import ShowExchangeRate from "./components/ShowExchangeRate";
import ChangeExchangeRate from "./components/ChangeExchangeRate";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <AddTransaction />
        <ShowExchangeRate />
        <ChangeExchangeRate />
        <TransactionList />
        <ShowTransactionsInfo />
      </main>
    </div>
  );
}

export default App;
