import Navbar from "./components/navbar"
import Balance from "./components/balance";
import Transactions from "./components/transactions";
import Transactionhis from "./components/transactionhis";
import { useEffect, useState } from "react";


function App() {


  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("Transactions")) || [])


  function calculateInExp() {
    let income = 0, expense = 0;

    transactions.forEach((item) => {

      if (item.type === "income") {
        income = income + item.amount;
      }
      else if (item.type === "expense") {
        expense = expense + item.amount;
      }
    }
    )


    setIncome(income);
    setExpense(expense);
  }


  function addNewTransaction(trans) {
    setTransactions([...transactions, trans])

  }

  function handleDelete(id) {

    setTransactions(transactions.filter((item) => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("Transactions", JSON.stringify(transactions));
    calculateInExp();
  })

  useEffect(() => {
    calculateInExp()
  }, [transactions])


  return (
    <div className="my-app">
      <div className="container">
        <Navbar />

        <div className="row">
          <div className="col-lg-7">
            <Balance income={income} expense={expense} />

          </div>
          <div className="col-lg-5">
            <Transactions addNewTransaction={addNewTransaction} />

          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <Transactionhis transactions={transactions} setTransactions={setTransactions} handleDelete={handleDelete} />
          </div>
        </div>
        <div><p className="footer" style={{ backgroundColor: "#fff", textAlign: "center", padding: "1%" }}>Designed and Devloped with  <i style={{ color: "red" }} className="bi bi-heart-fill"></i>  by Aditya</p></div>
      </div>
    </div >
  );
}

export default App;
