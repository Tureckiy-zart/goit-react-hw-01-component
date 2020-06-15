import React from "react";
import stats from "../../data/statistical-data.json";
import {StatisticComponentList, Title,SectionInsert,UlInsert} from "./StatisticComponent.js";

export const StatisticList = () => (
  <SectionInsert>
    <Title title={"Upload stats"} />
    <UlInsert>
      {stats.map((item) => (
        <StatisticComponentList key={item.id} {...item} />
      ))}
    </UlInsert>
  </SectionInsert>
);
