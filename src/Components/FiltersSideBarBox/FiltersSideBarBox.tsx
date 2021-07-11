import React from "react";
import { Form } from "react-bootstrap";
import "./FiltersSideBar‌Box‌.styles.css";
interface IProps {
  showFiltersBox: boolean;
  setFilterValues: any;
  filterValues: any;
}
const FiltersSideBarBox: React.FC<IProps> = ({
  filterValues,
  setFilterValues,
  showFiltersBox,
}) => {
  return (
    <div id="filtersSideBarBox" className={showFiltersBox ? "d-block" : ""}>
      <h4 className="text-right m-0 py-3 px-2">فیلتربندی</h4>
      <hr className="mt-0" />
      <div
        className="priority d-flex text-right align-items-center
    justify-content-between mx-3"
      >
        <label htmlFor="priority" className="m-0">
          اولویت
        </label>
        <Form.Control
          as="select"
          name="priority"
          className="w-50"
          id="priority"
          onChange={(event) => {
            setFilterValues({
              ...filterValues,
              priority: event.target.value,
            });
          }}
        >
          <option value="all">همه</option>
          <option value="low">کم</option>
          <option value="medium">متوسط</option>
          <option value="high">زیاد</option>
        </Form.Control>
      </div>
      <div
        className="status d-flex text-right align-items-center
    justify-content-between mx-3 my-3"
      >
        <label htmlFor="status" className="m-0">
          وضعیت
        </label>
        <Form.Control
          as="select"
          name="status"
          className="w-50"
          id="status"
          onChange={(event) => {
            setFilterValues({
              ...filterValues,
              status: event.target.value,
            });
          }}
        >
          <option value="all">همه</option>
          <option value="todo">انجام نشده</option>
          <option value="doing">درحال انجام</option>
          <option value="done">انجام شده</option>
        </Form.Control>
      </div>
      <div
        className="deadLine d-flex text-right align-items-center
    justify-content-between mx-3"
      >
        <label htmlFor="deadLine" className="m-0">
          مهلت
        </label>
        <Form.Control
          as="select"
          name="deadLine"
          className="w-50"
          id="deadLine"
          onChange={(event) => {
            setFilterValues({
              ...filterValues,
              deadLine: event.target.value,
            });
          }}
        >
          <option value="all">همه</option>
          <option value="overdue">گذشته</option>
          <option value="forToday">امروز</option>
          <option value="forFuture">آینده</option>
        </Form.Control>
      </div>
    </div>
  );
};
export default FiltersSideBarBox;
