import { React } from "react";
import classNames from "classnames";

import "../styles/DoPage.scss";
import { FaBackward, FaForward } from "react-icons/fa";

const Table = ({
  todo,
  inprogress,
  done,
  addTodo,
  addInprogress,
  addDone,
  removeTodo,
  removeInprogress,
  removeDone,
}) => {
  const TableItem = ({ log, category }) => {
    return (
      <>
        <div
          className={classNames(
            {
              "dopage-tablebox-item-wrapper-1":
                log.priority === "1" ? true : false,
            },
            {
              "dopage-tablebox-item-wrapper-2":
                log.priority === "2" ? true : false,
            },
            {
              "dopage-tablebox-item-wrapper-3":
                log.priority === "3" ? true : false,
            }
          )}
        >
          <div className="dopage-tablebox-item-title">{log.title}</div>
          <div className="dopage-tablebox-item-time">{log.time}</div>
          {category === "todo" && (
            <FaForward
              className="dopage-tablebox-item-button-right"
              onClick={() => {
                addInprogress(log);
                removeTodo(log.log_id);
              }}
            />
          )}
          {category === "inprogress" && (
            <div className="dopage-tablebox-item-button">
              <FaBackward
                className="dopage-tablebox-item-button-left"
                onClick={() => {
                  addTodo(log);
                  removeInprogress(log.log_id);
                }}
              />
              <FaForward
                className="dopage-tablebox-item-button-right"
                onClick={() => {
                  addDone(log);
                  removeInprogress(log.log_id);
                }}
              />
            </div>
          )}
          {category === "done" && (
            <FaBackward
              className="dopage-tablebox-item-button-left"
              onClick={() => {
                addInprogress(log);
                removeDone(log.log_id);
              }}
            />
          )}
        </div>
      </>
    );
  };
  const TableBox = ({ header, children }) => {
    return (
      <div className="dopage-tablebox">
        <div className="dopage-tablebox-title">{header}</div>
        <hr className="dopage-tablebox-bar" />
        <div className="dopage-tablebox-list">{children}</div>
      </div>
    );
  };

  return (
    <div className="dopage-table-wrapper">
      <TableBox header="Todo">
        {todo.map((log) => (
          <TableItem log={log} key={log.log_id} category="todo" />
        ))}
      </TableBox>
      <TableBox header="In Progress">
        {inprogress.map((log) => (
          <TableItem log={log} key={log.log_id} category="inprogress" />
        ))}
      </TableBox>
      <TableBox header="Done">
        {done.map((log) => (
          <TableItem log={log} key={log.log_id} category="done" />
        ))}
      </TableBox>
      <TableBox header="D-3" />
    </div>
  );
};

export default Table;
