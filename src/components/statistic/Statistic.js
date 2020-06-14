import React from "react";
import stats from "../../data/statistical-data.json";
import styles from "./statistic.module.css";
const { statistics, titles, a, item, wrapper, list } = styles;
// import { StatisticComponent } from "./StatisticComponent.js";

// export const Statistic = () => (
//   <>
//     <section className="statistics">
//       {/* {{ title } && <h2 className="title">{title}</h2>} */}
//       <ul className="stat-list">
//         {stats.map((item) => (
//           <StatisticComponent key={stats.id} title={"Upload stats"} {...item} />
//         ))}
//       </ul>
//     </section>
//   </>
// );

const StatisticComponentList = ({ label, percentage }) => (
  <>
    <li className={(a, item)}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  </>
);

export const StatisticList = ({ title }) => (
  <>
    <section className={statistics}>
      <div className={wrapper}>
        {{ title } && <h2 className={titles}>{title}</h2>}
      </div>
      <ul className={list}>
        {stats.map((item) => (
          <StatisticComponentList key={item.id} {...item} />
        ))}
      </ul>
    </section>
  </>
);
