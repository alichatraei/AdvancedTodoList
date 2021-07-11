import React from "react";
import { BsSearch } from "react-icons/bs";
import "./InputSearchBox.styles.css";
const InputSearchBox = ({ filterValues, setFilterValues }: any) => {
  return (
    <div className="input-box d-flex align-items-center p-1 mx-2">
      <input
        type="text"
        placeholder="سرچ کنید..."
        onChange={(event) => {
          setFilterValues({ ...filterValues, search: event.target.value });
        }}
      />
      <BsSearch style={{ cursor: "pointer", fontSize: "20px" }} />
    </div>
  );
};
export default InputSearchBox;
