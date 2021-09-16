import { React } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AddTodo, DeleteTodo } from "../modules/todo";
import { AddInprogress, DeleteInprogress } from "../modules/inprogress";
import { AddDone, DeleteDone } from "../modules/done";

import Table from "../components/Table";

const TableContainer = () => {
  const { todo, inprogress, done } = useSelector((state) => ({
    todo: state.todo,
    inprogress: state.inprogress,
    done: state.done,
  }));

  const dispatch = useDispatch();

  const addTodo = (log) =>
    dispatch(AddTodo(log.log_id, log.time, log.title, log.priority));
  const addInprogress = (log) =>
    dispatch(AddInprogress(log.log_id, log.time, log.title, log.priority));
  const addDone = (log) =>
    dispatch(AddDone(log.log_id, log.time, log.title, log.priority));
  const removeTodo = (log_id) => dispatch(DeleteTodo(log_id));
  const removeInprogress = (log_id) => dispatch(DeleteInprogress(log_id));
  const removeDone = (log_id) => dispatch(DeleteDone(log_id));

  return (
    <Table
      todo={todo}
      inprogress={inprogress}
      done={done}
      addTodo={addTodo}
      addInprogress={addInprogress}
      addDone={addDone}
      removeTodo={removeTodo}
      removeInprogress={removeInprogress}
      removeDone={removeDone}
    />
  );
};

export default TableContainer;
