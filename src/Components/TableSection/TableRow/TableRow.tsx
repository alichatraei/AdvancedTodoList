import React from "react";
import { BiShow } from "react-icons/bi";
import { MdEdit, MdDelete } from "react-icons/md";
import TaskModal from "../../TaskModal/TaskModal";
import "./TableRow.styles.css";
import { IData } from "../../../Application";
interface IProps {
  data: IData[];
  filterValues: {
    search: string;
    priority: string;
    status: string;
    deadLine: string;
  };
  indexOfFirstPost: number;
  indexOfLastPost: number;
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
}
const TableRow: React.FC<IProps> = ({
  indexOfFirstPost,
  indexOfLastPost,
  filterValues,
  data,
  setData,
}): JSX.Element => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalMode, setModalMode] = React.useState<string>("show");
  const [modalData, setModalData] = React.useState<any>();
  const handleDelete = (id: number) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  return (
    <>
      {data &&
        data
          .slice(0, indexOfLastPost)
          .filter((item) => {
            if (filterValues["search"]) {
              return item.toDoTitle
                .toLowerCase()
                .includes(filterValues["search"].toLowerCase());
            }
            if (filterValues["priority"]) {
              if (filterValues["priority"] === "all") return item;
              return item.priotity === filterValues["priority"];
            }
            if (filterValues["status"]) {
              if (filterValues["status"] === "all") return item;
              return item.status === filterValues["status"];
            }
            if (filterValues["deadLine"]) {
              if (filterValues["deadLine"] === "all") return item;
              if (filterValues["deadLine"] === "overdue")
                return parseInt(item.deadLine.slice(0)) < 2021;
              if (filterValues["deadLine"] === "forFuture")
                return parseInt(item.deadLine.slice(0)) > 2021;
            }
            return item;
          })
          .map((item) => {
            return (
              <>
                <tr key={item.id}>
                  <td>
                    <span>{item.toDoTitle}</span>
                  </td>
                  <td>
                    <span
                      className="data-values py-2 px-3"
                      style={{
                        backgroundColor:
                          item.priotity === "low"
                            ? "gray"
                            : item.priotity === "medium"
                            ? "yellow"
                            : "red",
                      }}
                    >
                      {item.priotity === "low"
                        ? "کم"
                        : item.priotity === "medium"
                        ? "متوسط"
                        : "زیاد"}
                    </span>
                  </td>
                  <td>
                    <span
                      className="data-values py-2 px-3"
                      style={{
                        backgroundColor:
                          item.status === "todo"
                            ? "blue"
                            : item.status === "doing"
                            ? "orange"
                            : "green",
                      }}
                    >
                      {item.status === "todo"
                        ? "انجام نشده"
                        : item.status === "doing"
                        ? "درحال انجام"
                        : "انجام شده"}
                    </span>
                  </td>
                  <td>
                    <span
                      className="data-values py-2 px-3"
                      style={{
                        color:
                          item.deadLine.split("-", 1)[0] &&
                          parseInt(item.deadLine.split("-", 1)[0]) >= 2021
                            ? "green"
                            : "red",
                        border:
                          item.deadLine.split("-", 1)[0] &&
                          parseInt(item.deadLine.split("-", 1)[0]) >= 2021
                            ? "1px solid green"
                            : "1px solid red",
                      }}
                    >
                      {item.deadLine}
                    </span>
                  </td>
                  <td>
                    <BiShow
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setModalShow(true);
                        setModalMode("show");
                        setModalData(item);
                      }}
                    />
                    <MdEdit
                      onClick={() => {
                        setModalShow(true);
                        setModalMode("Edit");
                        setModalData(item);
                      }}
                      style={{ cursor: "pointer" }}
                      className="mx-2"
                    />
                    <MdDelete
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
                <TaskModal
                  data={data}
                  mode={modalMode}
                  show={modalShow}
                  modalData={modalData}
                  onHide={() => setModalShow(false)}
                  setData={setData}
                />
              </>
            );
          })}
    </>
  );
};
export default TableRow;
