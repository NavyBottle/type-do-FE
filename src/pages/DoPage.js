import { React, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/DoPage.scss";
import TableContainer from "../container/TableContainer";

const DoPage = () => {
  useEffect(() => {
    // 처음 렌더링
    console.log("DoPage start");
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

      <TableContainer />
    </div>
  );
};

export default DoPage;
