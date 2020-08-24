import React, { useState } from "react";
import { Button, Spinner } from "reactstrap";
import { removeAllTodo } from "../../redux/actions/todoAction";
import { useSelector, useDispatch } from "react-redux";

const DeleteAll = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(removeAllTodo());
    setLoading(false);
  };
  const state = useSelector((state) => ({
    todos: state.todoReducer,
  }));
  return (
    <>
      {(state.todos.todos.length > 0 || state.todos.priority.length > 0) && (
        <div className="text-right">
          <Button color="danger" onClick={(e) => onSubmit(e)}>
            {loading ? <Spinner size="sm"></Spinner> : "Delete All Tasks"}
          </Button>

          <hr />
        </div>
      )}
    </>
  );
};

export default DeleteAll;
