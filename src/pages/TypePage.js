import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Input from "../components/Input";
// import Button from "../components/Button";

import { FaListUl } from "react-icons/fa";
import "../styles/TypePage.scss";

const TypePage = ({ logs, addTodo, removeTodo }) => {
  const [logButton, setLogbutton] = useState(false);
  const [timeLength, setTimelength] = useState(0);
  const [titleLength, setTitlelength] = useState(0);
  const [priorityLength, setPrioritylength] = useState(0);

  const nextId = useRef(5);

  const [inputs, setInputs] = useState({
    time: "",
    title: "",
    priority: "",
  });
  const { time, title, priority } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    if (e.target.name === "time") {
      setTimelength(e.target.value.length);
    } else if (e.target.name === "title") {
      setTitlelength(e.target.value.length);
    } else if (e.target.name === "priority") {
      setPrioritylength(e.target.value.length);
    }
  };

  const onCreate = () => {
    // 입력창 중에 하나가 빈칸이라면 onCreate 안 함
    if (timeLength === 0 || titleLength === 0 || priorityLength === 0) {
      alert("Need to Type Something");
    } else if (priority === "1" || priority === "2" || priority === "3") {
      nextId.current += 1;
      const log = {
        log_id: nextId.current,
        time,
        title,
        priority,
        category: "todo",
      };
      // 입력창 다시 초기화
      setInputs({
        ...inputs,
        time: "",
        title: "",
        priority: "",
      });
      addTodo(log);
      // 입력창 글자수 초기화
      setTimelength(0);
      setTitlelength(0);
      setPrioritylength(0);
      // onCreate 후에 로그창 보여줌
      setLogbutton(true);
    } else {
      alert("Priority must be 1, 2, or 3");
    }
  };

  const LogListbutton = () => {
    return (
      <FaListUl
        className={classNames(
          { "typepage-log-button-false": !logButton },
          { "typepage-log-button-true": logButton }
        )}
        onClick={() => {
          setLogbutton(!logButton);
        }}
        size="20px"
      />
    );
  };

  const LogList = () => {
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
            <Log log={log} key={log.log_id} />
          ))}
        </div>
      </div>
    );
  };

  const Log = ({ log }) => {
    return (
      <div className="typepage-typelog" onClick={() => removeTodo(log.log_id)}>
        <div className="typepage-typelog-time">{log.time}</div>
        <div className="typepage-typelog-title">{log.title}</div>
        <div className="typepage-typelog-priority">{log.priority}</div>
      </div>
    );
  };

  return (
    <div className="typepage-wrapper">
      <div className="typepage-logo-wrapper">
        <Link className="typepage-logo-type" to="/type">
          Type
        </Link>
        <div className="typepage-logo-and"> & </div>
        <Link className="typepage-logo-do" to="/do">
          Do
        </Link>
      </div>

      <Input
        time={time}
        title={title}
        priority={priority}
        onChange={onChange}
        onCreate={onCreate}
      />

      <div className="typepage-log-wrapper">
        <LogListbutton />
        {logButton && <LogList />}
      </div>
    </div>
  );
};
export default TypePage;
