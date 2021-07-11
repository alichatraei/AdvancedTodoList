import React from "react";
import "./Application.css";
import {
  Navbar,
  TableSection,
  PaginationSection,
  FiltersSideBarBox,
} from "./Components";
import { dataLists } from "./data";
export interface IData {
  id: number;
  toDoTitle: string;
  priotity: string;
  status: string;
  deadLine: string;
}
function Application() {
  const [showFiltersBox, setShowFiltersBox] = React.useState(false);
  const [data, setData] = React.useState<IData[]>(dataLists);
  const [filterValues, setFilterValues] = React.useState<{
    search?: string;
    priority?: string;
    status?: string;
    deadLine?: string;
  }>({});
  return (
    <>
      <FiltersSideBarBox
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        showFiltersBox={showFiltersBox}
      />
      <Navbar
        data={data}
        setData={setData}
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        setShowFiltersBox={setShowFiltersBox}
      />
      <TableSection filterValues={filterValues} data={data} setData={setData} />
      <PaginationSection data={data} />
    </>
  );
}

export default Application;
