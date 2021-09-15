import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/DoPage.scss";

const DoPage = () => {
  useEffect(() => {
    // 처음 렌더링
    console.log("DoPage start");
  }, []);

  const TodoTable = () => {
    return <div></div>;
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
      <div className="dopage-table-wrapper">
        <TodoTable />
      </div>
    </div>
  );
};

export default DoPage;
