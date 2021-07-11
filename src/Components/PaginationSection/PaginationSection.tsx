import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./PaginationSection.styles.css";
const PaginationSection: React.FC<any> = ({ setPostsPerPage, data }) => (
  <Container>
    <Row>
      <Col sm="12" className="d-flex justify-content-end">
        <div className="pagination-section d-flex align-items-center">
          <div className="selectItemCounts d-flex justify-content-between align-items-center">
            <small className="text-muted">تعداد در هر صفحه</small>
            <Form.Control
              as="select"
              className="w-75 mx-2"
              onChange={(event) => {
                setPostsPerPage(parseInt(event.target.value));
              }}
            >
              <option value="5">۵</option>
              <option value="10">۱۰</option>
              <option value="15">۱۵</option>
              <option value="allItems">همه</option>
            </Form.Control>
          </div>
        </div>
        <div className="navigation-page d-flex align-items-center mx-2">
          <small>تعداد سطر ها {data.length}</small>
          {/* <div className="next-previous mx-1">
            <GrFormNext size="25" />
            <GrFormPrevious size="25" />
          </div> */}
        </div>
      </Col>
    </Row>
  </Container>
);
export default PaginationSection;
