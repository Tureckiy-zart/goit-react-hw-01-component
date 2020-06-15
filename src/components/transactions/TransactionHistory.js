import React from "react";
import transactions from "../../data/transactions.json";
import { TransactionsBody, TransactionsThead, Table } from "./Transactions";

export const TransactionHistory = () => (
  <Table>
    <TransactionsThead />
    {transactions.map((transaction) => (<TransactionsBody key={transaction.id} {...transaction} />))}
  </Table>
);
