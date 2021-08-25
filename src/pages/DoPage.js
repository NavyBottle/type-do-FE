import { React, useState } from "react";
import { Link } from "react-router-dom";

import Calender from "../components/Calender";
import "../styles/DoPage.scss";

const DoPage = () => {
  const [logs, setLogs] = useState([
    {
      id: 1,
      start: "2021-08-28T15:00",
      end: "2021-08-28T16:00",
      title: "Infoteam",
      priority: 1,
    },
    {
      id: 2,
      start: "2021-08-30T01:00",
      end: "2021-08-31T01:00",
      title: "WING_AI",
      priority: 2,
    },
  ]);

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
      <div className="dopage-calender-wrapper">
        <Calender className="dopage-calender" events={logs} />
      </div>
    </div>
  );
};

export default DoPage;
