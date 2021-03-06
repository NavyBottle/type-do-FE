import { React, useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Input from "../components/Input";
// import Button from "../components/Button";

import { FaListUl } from "react-icons/fa";
import "../styles/TypePage.scss";

const url = "http://127.0.0.1:8000/logs/";

const TypePage = () => {
  const [logButton, setLogbutton] = useState(true);
  const [startLength, setStartlength] = useState(0);
  const [titleLength, setTitlelength] = useState(0);
  const [priorityLength, setPrioritylength] = useState(0);

  const [logs, setLogs] = useState([]);
  const nextId = useRef(null);

  useEffect(() => {
    // 처음 렌더링 때 DB에서 GET
    axios
      .get(url)
      .then((res) => {
        setLogs(res.data);
        nextId.current = res.data.length;
        console.log("GET Done");
      })
      .catch((error) => console.log(error));
  }, []);

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
    // 입력창 중에 하나가 빈칸이라면 onCreate 안 함
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
      // 입력창 다시 초기화
      setInputs({
        ...inputs,
        start: "",
        title: "",
        priority: "",
      });
      setLogs(logs.concat(log));
      // DB에 POST
      axios
        .post(url, log)
        .then((res) => console.log("POST done"))
        .catch((error) => console.log(error));

      // 입력창 글자수 초기화
      setStartlength(0);
      setTitlelength(0);
      setPrioritylength(0);
      // onCreate 후에 로그창 보여줌
      setLogbutton(true);
    }
  };

  const onRemove = (log_id) => {
    setLogs(logs.filter((log) => log.log_id !== log_id));
    // DB에 DELETE
    axios
      .delete(url + String(log_id))
      .then((res) => console.log("DELETE done"))
      .catch((error) => console.log(error));

    // 상위 log의 log_id 조정
    if (log_id !== nextId.current) {
      for (let num = log_id + 1; num <= nextId.current; num++) {
        axios
          .put(url + String(num), {
            log_id: num - 1,
            start: logs[num - 1].start,
            title: logs[num - 1].title,
            priority: logs[num - 1].priority,
          })
          .then()
          .catch((error) => console.log(error));
      }
      console.log("POST log_id edit done");
    }
    nextId.current -= 1;
  };

  const LogListbutton = () => {
    return (
      <FaListUl
        className={classNames(
          { "typepage-log-button-false": !logButton },
          { "typepage-log-button-true": logButton }
        )}
        onClick={() => {
          console.log("nextId is " + String(nextId.current));
          console.log(logs);
          axios
            .get(url)
            .then((res) => {
              setLogs(res.data);
            })
            .catch((error) => console.log(error))
            .then(setLogbutton(!logButton));
        }}
        size="20px"
      />
    );
  };

  const Log = ({ log }) => {
    // useEffect(() => console.log(index), []);

    return (
      <div className="typepage-typelog" onClick={() => onRemove(log.log_id)}>
        <div className="typepage-typelog-start">{log.start}</div>
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
            <div className="typepage-log-reverse">
              {logs.map((log) => (
                <Log log={log} key={log.log_id} onClick={onRemove} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypePage;
