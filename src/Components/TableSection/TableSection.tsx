import React from "react";
import TableRow from "./TableRow/TableRow";
import { Table } from "react-bootstrap";
import "./TableSection.styles.css";
import { IData } from "../../Application";
interface IProps {
  data: IData[];
  filterValues: any;
  indexOfFirstPost: number;
  indexOfLastPost: number;
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
}
const TableSection: React.FC<IProps> = ({
  indexOfFirstPost,
  indexOfLastPost,
  filterValues,
  data,
  setData,
}): JSX.Element => (
  <Table responsive className="text-center">
    <thead>
      <tr>
        <th>
          <span>کار</span>
        </th>
        <th>
          <span className="filterRow bg-transparent">اولویت</span>
        </th>
        <th>
          <span className="filterRow bg-transparent">وضعیت</span>
        </th>
        <th>
          <span className="filterRow bg-transparent">مهلت</span>
        </th>
        <th>
          <span>عمل</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <TableRow
        indexOfLastPost={indexOfLastPost}
        indexOfFirstPost={indexOfFirstPost}
        filterValues={filterValues}
        data={data}
        setData={setData}
      />
    </tbody>
  </Table>
);
export default TableSection;
