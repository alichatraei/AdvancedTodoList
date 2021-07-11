/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./TaskModal.styles.css";
const TaskModal = ({
  mode,
  show,
  modalData,
  onHide,
  setData,
  data,
}: any): JSX.Element => {
  const [input, setInput] = React.useState(modalData);
  const handleChangeInputs = (event: React.ChangeEvent<any>) => {
    console.log(event);
    setInput({
      ...input,
      id: Math.random() * 10,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {mode === "show"
              ? mode === "Add"
                ? "ذخیره اطلاعات"
                : "نمایش اطلاعات"
              : "ویرایش اطلاعات"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mx-2">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-right w-100">کار</Form.Label>
              <Form.Control
                name="toDoTitle"
                type="text"
                placeholder={""}
                disabled={mode === "show" ? true : false}
                onChange={(event) => {
                  handleChangeInputs(event);
                }}
              />
            </Form.Group>
          </div>
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
              disabled={mode === "show" ? true : false}
              onChange={(event) => {
                handleChangeInputs(event);
              }}
            >
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
              disabled={mode === "show" ? true : false}
              onChange={(event) => {
                handleChangeInputs(event);
              }}
            >
              <option value="toDo">انجام نشده</option>
              <option value="doing">درحال انجام</option>
              <option value="done">انجام شده</option>
            </Form.Control>
          </div>
          <div
            className="deadLine d-flex text-right align-items-center
    justify-content-between mx-3"
          >
            <input
              name="deadLine"
              disabled={mode === "show" ? true : false}
              type="date"
              id="date-picker"
              onChange={(event) => {
                handleChangeInputs(event);
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="w-100 d-flex justify-content-around">
          <Button className="bg-secondary" onClick={onHide}>
            بستن
          </Button>
          {mode !== "show" ? (
            <Button
              onClick={() => {
                if (mode === "edit")
                  setData(
                    data.map((item: any) =>
                      item.id === modalData.id ? { ...input } : item
                    )
                  );
                setData([...data, { ...input }]);
                onHide();
              }}
            >
              ذخیره
            </Button>
          ) : (
            false
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TaskModal;
