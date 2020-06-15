import React from "react";
import stats from "../../data/statistical-data.json";
import styles from "./statistic.module.css";
import { StatisticComponentList, Title } from "./StatisticComponent.js";

const { statistics, list } = styles;

export const StatisticList = () => (
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
