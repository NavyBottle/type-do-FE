import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Calender from "../components/Calender";
import "../styles/DoPage.scss";

const url = "http://127.0.0.1:8000/logs/";

const DoPage = () => {
  const [logs, setLogs] = useState(null);

  useEffect(() => {
    // 처음 렌더링 때 DB에서 GET
    axios
      .get(url)
      .then((res) => {
        setLogs(res.data);
        console.log("GET Done");
      })
      .catch((error) => console.log(error));
  }, []);

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
