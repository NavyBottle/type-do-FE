import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import "../styles/DoPage.scss";
import { FaBackward, FaForward } from "react-icons/fa";

const DoPage = () => {
  useEffect(() => {
    // 처음 렌더링
    console.log("DoPage start");
  }, []);

  const [todoLogs, setTodoLogs] = useState([
    {
      log_id: 1,
      time: "2021-04-05",
      title: "Something todo",
      priority: 1,
      type: "todo",
    },
    {
      log_id: 2,
      time: "2021-05-23",
      title: "Mid term",
      priority: 3,
      type: "todo",
    },
    {
      log_id: 3,
      time: "2021-06-13",
      title: "Final term",
      priority: 2,
      type: "todo",
    },
  ]);
  const [inprogressLogs, setInprogressLogs] = useState([
    {
      log_id: 4,
      time: "2021-08-12",
      title: "Now starting",
      priority: 1,
      type: "inprogress",
    },
  ]);
  const [doneLogs, setDoneLogs] = useState([
    {
      log_id: 5,
      time: "2021-06-08",
      title: "Just Finished",
      priority: 2,
      type: "done",
    },
  ]);

  const addTodo = (log) => {
    setTodoLogs(todoLogs.concat(log));
  };
  const addInprogress = (log) => {
    setInprogressLogs(inprogressLogs.concat(log));
  };
  const addDone = (log) => {
    setDoneLogs(doneLogs.concat(log));
  };
  const removeTodo = (log_id) => {
    setTodoLogs(todoLogs.filter((todolog) => todolog.log_id !== log_id));
  };
  const removeInprogress = (log_id) => {
    setInprogressLogs(
      inprogressLogs.filter((inprogresslog) => inprogresslog.log_id !== log_id)
    );
  };
  const removeDone = (log_id) => {
    setDoneLogs(doneLogs.filter((donelog) => donelog.log_id !== log_id));
  };

  const TableItem = ({ log, type }) => {
    return (
      <>
        <div
          className={classNames(
            {
              "dopage-tablebox-item-wrapper-1":
                log.priority === 1 ? true : false,
            },
            {
              "dopage-tablebox-item-wrapper-2":
                log.priority === 2 ? true : false,
            },
            {
              "dopage-tablebox-item-wrapper-3":
                log.priority === 3 ? true : false,
            }
          )}
        >
          <div className="dopage-tablebox-item-title">{log.title}</div>
          <div className="dopage-tablebox-item-time">{log.time}</div>
          {type === "todo" && (
            <FaForward
              className="dopage-tablebox-item-button-right"
              onClick={() => {
                addInprogress(log);
                removeTodo(log.log_id);
              }}
            />
          )}
          {type === "inprogress" && (
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
          {type === "done" && (
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

  const Table = () => {
    return (
      <div className="dopage-table-wrapper">
        <TableBox header="Todo">
          {todoLogs.map((log) => (
            <TableItem log={log} key={log.log_id} type="todo" />
          ))}
        </TableBox>
        <TableBox header="In Progress">
          {inprogressLogs.map((log) => (
            <TableItem log={log} key={log.log_id} type="inprogress" />
          ))}
        </TableBox>
        <TableBox header="D-3" />
        <TableBox header="Done">
          {doneLogs.map((log) => (
            <TableItem log={log} key={log.log_id} type="done" />
          ))}
        </TableBox>
      </div>
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
    <div className="dopage-wrapper">
      <div className="dopage-logo-wrapper">
        <Link className="dopage-logo-type" to="/type">
          Type
        </Link>
        <div className="dopage-logo-and"> & </div>
        <Link className="dopage-logo-do" to="/do">
          Do
        </Link>
      </div>

      <Table />
    </div>
  );
};

export default DoPage;
