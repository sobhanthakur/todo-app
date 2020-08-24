import React, { useState } from "react";
import PropTypes from "prop-types";
import { Badge, Collapse, Button } from "reactstrap";

const TodoList = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <tr>
        <td>{todo.createdAt}</td>
        <td>
          <Button color="link" onClick={toggle}>
            {todo.title}
          </Button>
          <Collapse isOpen={isOpen}>
                {todo.description}
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
          <Badge color="danger">X</Badge>
        </td>
      </tr>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
