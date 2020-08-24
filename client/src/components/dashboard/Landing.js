import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { Spinner, Table } from "reactstrap";
import { getTodos } from "../../redux/actions/todoAction";

const Landing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos(false));
  }, []);
  const state = useSelector((state) => ({
    todos: state.todoReducer,
  }));
  return (
    <div className="mt-5">
      <TodoForm />
      {state.todos.loading ? (
        <Spinner color="warning" />
      ) : (
        state.todos.todos.length > 0 && (
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
              {state.todos.todos.map((todo) => (
                <TodoList todo={todo} key={todo._id} />
              ))}
            </tbody>
          </Table>
        )
      )}
    </div>
  );
};

export default Landing;
