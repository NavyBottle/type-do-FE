import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Input from "../components/Input";
// import Button from "../components/Button";

import { FaListUl } from "react-icons/fa";
import "../styles/TypePage.scss";

const TypePage = () => {
  const [logButton, setLogbutton] = useState(false);
  const [timeLength, setTimelength] = useState(0);
  const [todoLength, setTodolength] = useState(0);
  const [priorityLength, setPrioritylength] = useState(0);

  const [logs, setLogs] = useState([
    {
      id: 0,
      time: "8/12 , 12:00",
      todo: "GIST_Infoteam 개발시작하기",
      priority: 1,
    },
    {
      id: 1,
      time: "8/14 , 16:00",
      todo: "WING_AI 개발시작하기",
      priority: 2,
    },
  ]);
  const nextId = useRef(1);

  const [inputs, setInputs] = useState({
    time: "",
    todo: "",
    priority: "",
  });
  const { time, todo, priority } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    if (e.target.name === "time") {
      setTimelength(e.target.value.length);
    } else if (e.target.name === "todo") {
      setTodolength(e.target.value.length);
    } else if (e.target.name === "priority") {
      setPrioritylength(e.target.value.length);
    }
  };

  const onCreate = () => {
    if (timeLength === 0 || todoLength === 0 || priorityLength === 0) {
      alert("Need to Type Something");
    } else {
      nextId.current += 1;
      const log = {
        id: nextId.current,
        time,
        todo,
        priority,
      };
      setInputs({
        ...inputs,
        time: "",
        todo: "",
        priority: "",
      });
      setLogs(logs.concat(log));
      setLogbutton(true);
      setTimelength(0);
      setTodolength(0);
      setPrioritylength(0);

      console.log(timeLength, todoLength, priorityLength);
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

  const Log = ({ index }) => {
    return (
      <div className="typepage-typelog">
        <div className="typepage-typelog-time">
          {logs[nextId.current - index].time}
        </div>
        <div className="typepage-typelog-todo">
          {logs[nextId.current - index].todo}
        </div>
        <div className="typepage-typelog-priority">
          {logs[nextId.current - index].priority}
        </div>
      </div>
    );
  };

  return (
    <div className="typepage-wrapper">
      <div className="typepage-title-wrapper">
        <Link className="typepage-title-type" to="/type">
          Type
        </Link>
        <div className="typepage-title-and"> & </div>
        <Link className="typepage-title-do" to="/do">
          Do
        </Link>
      </div>

      <Input
        time={time}
        todo={todo}
        priority={priority}
        onChange={onChange}
        onCreate={onCreate}
      />

      <div className="typepage-log-wrapper">
        <LogListbutton />

        {logButton && (
          <div className="typepage-log-list">
            <div className="typepage-log-title">
              <span className="typepage-log-title-time">Time</span>
              <span className="typepage-log-title-todo">Todo</span>
              <span className="typepage-log-title-priority">Priority</span>
            </div>
            <hr className="typepage-log-bar" />

            {logs.map((log, index) => (
              <Log logs={log} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TypePage;
