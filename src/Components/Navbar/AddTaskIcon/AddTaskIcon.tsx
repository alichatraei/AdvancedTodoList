import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import TaskModal from "../../TaskModal/TaskModal";
const AddTaskIcon = ({ data, setData }: any) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalMode, setModalMode] = React.useState<string>();
  return (
    <>
      <BsPencilSquare
        className="ml-2"
        style={{ cursor: "pointer", fontSize: "25px" }}
        onClick={() => {
          setModalShow(true);
          setModalMode("Add");
        }}
      />
      <TaskModal
        mode={modalMode}
        show={modalShow}
        onHide={() => setModalShow(false)}
        setData={setData}
        data={data}
      />
    </>
  );
};
export default AddTaskIcon;
