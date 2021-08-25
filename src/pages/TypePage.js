import { React } from "react";

import { FaListUl } from "react-icons/fa";
import "../styles/TypePage.scss";

const TypeLog = () => {
  return (
    <div className="typepage-typelog">
      <div className="typepage-typelog-time">8/12 / 12:00 AM</div>
      <div className="typepage-typelog-todo">GIST_Infoteam 개발시작하기</div>
      <div className="typepage-typelog-priority">4</div>
    </div>
  );
};

const TypePage = () => {
  return (
    <div className="typepage-wrapper">
      <div className="typepage-title-wrapper">
        <div className="typepage-title-type">Type</div>
        <div className="typepage-title-and"> & </div>
        <div className="typepage-title-do">Do</div>
      </div>

      <input className="typepage-input" />

      <div className="typepage-log-wrapper">
        <FaListUl className="typepage-log-button" size="20px" />
        <div className="typepage-log-list">
          <div className="typepage-log-title">
            <span className="typepage-log-title-time">Time</span>
            <span className="typepage-log-title-todo">Todo</span>
            <span className="typepage-log-title-priority">Priority</span>
          </div>
          <hr className="typepage-log-bar" />
          <TypeLog />
          <TypeLog />
        </div>
      </div>
    </div>
  );
};

export default TypePage;
