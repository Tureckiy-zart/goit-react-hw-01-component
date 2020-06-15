import React from "react";
import styles from "./statistic.module.css";

// import stats from "../../data/statistical-data.json";
const { titles, a, item, wrapper } = styles;

export const StatisticComponentList = ({ label, percentage }) => (
  <>
    <li className={(a, item)}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  </>
);

export const Title = ({ title }) => (
  <div className={wrapper}>
    {{ title } && <h2 className={titles}>{title}</h2>}
  </div>
);
