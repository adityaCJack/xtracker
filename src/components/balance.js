import React from "react"

export default function Balance({ income, expense }) {
    return (
        <section className="balance">

            <h2><i class="bi bi-bank"></i> Your total balance: {income - expense}</h2>

            <div className="row">
                <div className="col-md-6">
                    <div className="in-btn pb-4">
                        <p>Income:</p>
                        <h3>₹ {income} <i class="bi bi-cash-coin"></i></h3>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="ex-btn pb-4 mt-3 mt-md-0">
                        <p>Expense:</p>
                        <h3>₹ {expense} <i class="bi bi-emoji-angry-fill"></i></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}