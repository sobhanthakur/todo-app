import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const TodoForm = () => {
  return (
    <>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Title
          </Label>
          <Col sm={10}>
            <Input type="text" name="title" placeholder="Enter Title" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Description
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="description"
              placeholder="Enter Some Description"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>
            Priority
          </Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Check this for Priority
                assignment
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup className="text-center">
          <Button color="info" className="text-center">
            Submit
          </Button>
        </FormGroup>
      </Form>
      <hr />
    </>
  );
};

export default TodoForm;
