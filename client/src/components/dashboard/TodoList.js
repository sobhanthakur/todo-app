import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Badge,
  Collapse,
  Button,
  Form,
  FormGroup,
  Input,
  Spinner,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../../redux/actions/todoAction";

const TodoList = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    todo.description && setDesc(todo.description);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(updateTodo(todo.priority, todo._id, desc));
    setLoading(false);
  };
  return (
    <>
      <tr>
        <td>{todo.createdAt.split("T")[0]}</td>
        <td>
          <Button color="link" onClick={toggle}>
            {todo.title}
          </Button>
          <Collapse isOpen={isOpen}>
            <Form onSubmit={(e) => onSubmit(e)}>
              <FormGroup>
                <Input
                  type="textarea"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Button color="warning" size="sm">
                  {loading ? <Spinner size="sm"></Spinner> : "update"}
                </Button>
              </FormGroup>
            </Form>
          </Collapse>
        </td>
        <td>
          {todo.priority ? (
            <Badge color="success">Priority</Badge>
          ) : (
            <Badge color="warning">Not Priority</Badge>
          )}
        </td>
        <td>
          <Badge
            color="danger"
            onClick={(e) => dispatch(removeTodo(todo.priority, todo._id))}
          >
            X
          </Badge>
        </td>
      </tr>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
