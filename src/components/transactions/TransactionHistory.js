import React from "react";
import styles from "./transactions.module.css";
import transactions from "../../data/transactions.json";
import { Transactions } from "./Transactions";
const {transactionHistory } = styles;

export const TransactionHistory = () => (
  <table className={transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <>
    {transactions.map((transaction) => (
      <Transactions key={transaction.id} {...transaction} />
    ))}
  </>
    </table>

);
