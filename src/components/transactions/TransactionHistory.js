import React from "react";
import styles from "./transactions.module.css";
import transactions from "../../data/transactions.json";
import { TransactionsBody, TransactionsThead } from "./Transactions";

const { transactionHistory } = styles;

export const TransactionHistory = () => (
  <table className={transactionHistory}>
    <TransactionsThead />
    <>
      {transactions.map((transaction) => (
        <TransactionsBody key={transaction.id} {...transaction} />
      ))}
    </>
  </table>
);
