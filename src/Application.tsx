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
    search: string;
    priority: string;
    status: string;
    deadLine: string;
  }>({
    search: "",
    priority: "",
    status: "",
    deadLine: "",
  });
  const [indexOfLastPost, setIndexOfLastPost] = React.useState<any>();
  const [indexOfFirstPost] = React.useState<any>();
  const [currentPage, setCurrentPage] = React.useState<any>(1);
  const [postsPerPage, setPostsPerPage] = React.useState<any>();
  React.useEffect(() => {
    if (currentPage && postsPerPage) {
      setIndexOfLastPost(currentPage * postsPerPage);
      setCurrentPage(Math.ceil(data.length / postsPerPage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postsPerPage]);
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
      <TableSection
        indexOfLastPost={indexOfLastPost}
        indexOfFirstPost={indexOfFirstPost}
        filterValues={filterValues}
        data={data}
        setData={setData}
      />
      <PaginationSection
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
        data={data}
      />
    </>
  );
}

export default Application;
