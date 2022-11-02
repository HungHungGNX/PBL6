import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchBox() {
  return (
    <Form inline>
      <Row>
        <Col>
          {" "}
          <Form.Control
            type="text"
            name="q"
            className="mr-sm-2 ml-sm-5"
          ></Form.Control>
        </Col>
        <Col>
          {" "}
          <Button type="submit" variant="outline-success" className="p-2 mx-5">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBox;
