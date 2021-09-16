import { React } from "react";
import LogsContainer from "../container/TypePageContainer";

import "../styles/TypePage.scss";

const Logs = ({ logs, addTodo, removeTodo }) => {
  const onRemove = (log_id) => {
    removeTodo(log_id);
  };

  const Log = ({ log }) => {
    return (
      <div className="typepage-typelog" onClick={() => onRemove(log.log_id)}>
        <div className="typepage-typelog-time">{log.time}</div>
        <div className="typepage-typelog-title">{log.title}</div>
        <div className="typepage-typelog-priority">{log.priority}</div>
      </div>
    );
  };

  return (
    <div className="typepage-log-list">
      <div className="typepage-log-title">
        <span className="typepage-log-title-time">Time</span>
        <span className="typepage-log-title-title">Todo</span>
        <span className="typepage-log-title-priority">Priority</span>
      </div>
      <hr className="typepage-log-bar" />
      <div className="typepage-log-reverse">
        {logs.map((log) => (
          <Log log={log} key={log.log_id} onClick={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default Logs;
