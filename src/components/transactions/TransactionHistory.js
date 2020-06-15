import React from "react";
import styles from "./transactions.module.css";
import transactions from "../../data/transactions.json";
import { Transactions, Thead } from "./Transactions";
const { transactionHistory } = styles;

export const TransactionHistory = () => (
  <table className={transactionHistory}>
    <Thead />
    <>
      {transactions.map((transaction) => (
        <Transactions key={transaction.id} {...transaction} />
      ))}
    </>
  </table>
);
