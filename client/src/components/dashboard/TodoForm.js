import React, { useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoAction";

const initialState = {
  description: "",
  title: "",
  priority: false,
};

const TodoForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { title, description, priority } = formData;
  const changeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(addTodo(priority, formData));
    setLoading(false);
    setFormData(initialState);
  };
  return (
    <>
      <Form onSubmit={(e) => onSubmit(e)}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Title
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="title"
              placeholder="Enter Title"
              onChange={(e) => changeFormData(e)}
              value={title}
              required
            />
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
              onChange={(e) => changeFormData(e)}
              value={description}
              required
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
                <Input
                  type="checkbox"
                  id="checkbox2"
                  name="priority"
                  onChange={(e) =>
                    setFormData({ ...formData, priority: !priority })
                  }
                  checked={priority}
                />{" "}
                Check this for Priority assignment
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup className="text-center">
          {loading ? (
            <Spinner size="sm"></Spinner>
          ) : (
            <Button color="info" className="text-center">
              Submit
            </Button>
          )}
        </FormGroup>
      </Form>
      <hr />
    </>
  );
};

export default TodoForm;
