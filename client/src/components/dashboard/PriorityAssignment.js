import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { Spinner, Table } from "reactstrap";
import { getTodos } from "../../redux/actions/todoAction";

const PriorityAssignment = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    todos: state.todoReducer,
  }));
  useEffect(() => {
    dispatch(getTodos(true));
  }, []);

  return (
    <div className="mt-5">
      {state.todos.loading ? (
        <Spinner color="warning" />
      ) : (
        state.todos.priority.length > 0 && (
          <Table striped>
            <thead>
              <tr>
                <th>CreateDate</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {state.todos.priority.map((todo) => (
                <TodoList todo={todo} key={todo._id} />
              ))}
            </tbody>
          </Table>
        )
      )}
    </div>
  );
};

export default PriorityAssignment;
