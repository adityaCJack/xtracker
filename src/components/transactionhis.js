import React from "react"

export default function Transactionhis({ transactions, handleDelete, setTransactions }) {

    function handleClear() {
        setTransactions([])
    }

    return (
        <section className="transactionhis">
            <h2><i class="bi bi-clipboard-data-fill"></i> Transactions history {transactions.length >= 2 && <button onClick={handleClear} className="btn btn-danger">Clear All</button>}</h2>
            <ul className="transaction-list">
                {
                    transactions.map((item) => {
                        return (
                            <li>
                                <span>{item.name}</span>
                                <span>{item.amount}</span>
                                <button onClick={() => handleDelete(item.id)} className="list-button">X</button>
                            </li>
                        )
                    })

                }
            </ul>
        </section>

    )
}