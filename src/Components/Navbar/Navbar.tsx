import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import TitleText from "./TitleText/TitleText";
import InputSearchBox from "./InputSearchBox/InputSearchBox";
import FiltersSideBar from "./FiltersSideBar/FiltersSideBar";
import AddTaskIcon from "./AddTaskIcon/AddTaskIcon";
import "./Navbar.styles.css";
const Navbar = ({
  data,
  setData,
  setFilterValues,
  filterValues,
  setShowFiltersBox,
}: any) => {
  return (
    <div className="navbar-container d-flex">
      <Container
        fluid
        className="justify-content-center align-items-center d-flex"
      >
        <Row className="w-100">
          <Col
            sm="12"
            md="6"
            className="justify-content-center
            my-3 my-md-0 justify-content-md-start d-flex align-items-center"
          >
            <TitleText />
          </Col>
          <Col
            sm="12"
            md="6"
            className="d-flex justify-content-center
            my-3 my-md-0 justify-content-md-end align-items-center"
          >
            <InputSearchBox
              filterValues={filterValues}
              setFilterValues={setFilterValues}
            />
            <FiltersSideBar setShowFiltersBox={setShowFiltersBox} />
            <AddTaskIcon data={data} setData={setData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Navbar;
