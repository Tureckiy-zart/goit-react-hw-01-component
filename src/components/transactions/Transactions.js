import React from "react";
import styles from "./transactions.module.css";

export const Transactions = ({ type, amount, currency }) => (
  <>
    {/* <table className="transaction-history"> */}

      <tbody>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    {/* </table> */}
  </>
);

export const Thead = ()=>(
    <>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead></>
)

