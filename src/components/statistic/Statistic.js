import React from "react";
import stats from "../../data/statistical-data.json";
import styles from "./statistic.module.css";
// import { StatisticComponent } from "./StatisticComponent.js";

const { statistics, titles, a, item, wrapper, list } = styles;

const StatisticComponentList = ({ label, percentage }) => (
  <>
    <li className={(a, item)}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  </>
);

const Title = ({ title }) => (
  <div className={wrapper}>
    {{ title } && <h2 className={titles}>{title}</h2>}
  </div>
);

export const StatisticList = () => (  //App
  <>
    <section className={statistics}>
      <Title title={"Upload stats"} />

      <ul className={list}>
        {stats.map((item) => (
          <StatisticComponentList key={item.id} {...item} />
        ))}
      </ul>
    </section>
  </>
);
