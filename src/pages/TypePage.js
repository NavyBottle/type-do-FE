import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Input from "../components/Input";
// import Button from "../components/Button";

import { FaListUl } from "react-icons/fa";
import "../styles/TypePage.scss";

const TypePage = () => {
  const [logButton, setLogbutton] = useState(false);
  const [startLength, setStartlength] = useState(0);
  const [titleLength, setTitlelength] = useState(0);
  const [priorityLength, setPrioritylength] = useState(0);

  const [logs, setLogs] = useState([
    {
      log_id: 1,
      start: "2021-09-16",
      title: "GIST_Infoteam 개발시작하기",
      priority: 1,
    },
    {
      log_id: 2,
      start: "2021-09-21",
      title: "WING_AI 개발시작하기",
      priority: 2,
    },
  ]);
  const nextId = useRef(2);

  const [inputs, setInputs] = useState({
    start: "",
    title: "",
    priority: "",
  });
  const { start, title, priority } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    if (e.target.name === "start") {
      setStartlength(e.target.value.length);
    } else if (e.target.name === "title") {
      setTitlelength(e.target.value.length);
    } else if (e.target.name === "priority") {
      setPrioritylength(e.target.value.length);
    }
  };

  const onCreate = () => {
    if (startLength === 0 || titleLength === 0 || priorityLength === 0) {
      alert("Need to Type Something");
    } else {
      nextId.current += 1;
      const log = {
        log_id: nextId.current,
        start,
        title,
        priority,
      };
      setInputs({
        ...inputs,
        start: "",
        title: "",
        priority: "",
      });
      setLogs(logs.concat(log));
      setLogbutton(true);
      setStartlength(0);
      setTitlelength(0);
      setPrioritylength(0);

      console.log(startLength, titleLength, priorityLength);
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
    if (nextId.current === 0) {
      return;
    } else {
      return (
        <div className="typepage-typelog">
          <div className="typepage-typelog-start">
            {logs[nextId.current - 1 - index].start}
          </div>
          <div className="typepage-typelog-title">
            {logs[nextId.current - 1 - index].title}
          </div>
          <div className="typepage-typelog-priority">
            {logs[nextId.current - 1 - index].priority}
          </div>
        </div>
      );
    }
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
        start={start}
        title={title}
        priority={priority}
        onChange={onChange}
        onCreate={onCreate}
      />

      <div className="typepage-log-wrapper">
        <LogListbutton />

        {logButton && (
          <div className="typepage-log-list">
            <div className="typepage-log-title">
              <span className="typepage-log-title-start">Time</span>
              <span className="typepage-log-title-title">Todo</span>
              <span className="typepage-log-title-priority">Priority</span>
            </div>
            <hr className="typepage-log-bar" />

            {logs.map((log, index) => (
              <Log logs={log} index={index} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TypePage;
