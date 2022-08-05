import React, { useState } from "react"
import { randomId } from "../util/utils";

export default function Transactions({ addNewTransaction }) {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("")

    function addTransaction(type) {
        const data = { id: randomId(), name: name, amount: parseInt(amount), type: type }
        addNewTransaction(data)
        setName("")
        setAmount("")
    }

    return (
        <section className="transactions">
            <h3><i class="bi bi-bookmark-plus-fill"></i> Add new transaction:</h3>
            <hr />
            <div className="transactions-form">
                <label>Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} class="form-control" type="text" placeholder="Enter Name" />
                <br />
                <label>Amount:</label>
                <input onChange={(e) => setAmount(e.target.value)} value={amount} class="form-control" type="number" placeholder="Enter Amount " />
                <br />
                <div className="d-flex justify-content-between">
                    <button onClick={() => addTransaction("income")} className="btn btn-success">Add Income</button>
                    <button onClick={() => addTransaction("expense")} className="btn btn-danger">Add Expense</button>
                </div>
            </div>
        </section>
    )
}