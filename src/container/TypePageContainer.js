import { React } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AddTodo, DeleteTodo } from "../modules/todo";
import TypePage from "../pages/TypePage";

const TypePageContainer = () => {
  const logs = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const addTodo = (log) =>
    dispatch(AddTodo(log.log_id, log.time, log.title, log.priority));
  const removeTodo = (log_id) => dispatch(DeleteTodo(log_id));

  return <TypePage logs={logs} addTodo={addTodo} removeTodo={removeTodo} />;
};

export default TypePageContainer;
