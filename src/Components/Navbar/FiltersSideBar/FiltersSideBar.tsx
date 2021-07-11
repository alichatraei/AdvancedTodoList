/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BiFilterAlt } from "react-icons/bi";
const FiltersSideBar = ({ setShowFiltersBox }: any) => {
  const [show, setShow] = React.useState(setShowFiltersBox);
  const updateShowState = () => {
    setShow((previous: any, then: any) => {
      return (then = !previous);
    });
    setShowFiltersBox(show);
  };
  React.useEffect(updateShowState, [setShowFiltersBox]);
  return (
    <>
      <BiFilterAlt
        className="ml-2"
        style={{ cursor: "pointer", fontSize: "25px" }}
        onClick={updateShowState}
      />
    </>
  );
};
export default FiltersSideBar;
