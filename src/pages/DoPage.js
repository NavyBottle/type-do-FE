import { React, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/DoPage.scss";

const DoPage = () => {
  useEffect(() => {
    // 처음 렌더링
    console.log("DoPage start");
  }, []);

  const TableBox = ({ header }) => {
    return (
      <div className="dopage-tablebox">
        <div className="dopage-tablebox-title">{header}</div>
        <hr className="dopage-tablebox-bar" />
        <div className="dopage-tablebox-list"></div>
      </div>
    );
  };
  const Table = () => {
    return (
      <div className="dopage-table-wrapper">
        <TableBox header="Todo" />
        <TableBox header="In Progress" />
        <TableBox header="D-3" />
        <TableBox header="Done" />
      </div>
    );
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

      <Table />
    </div>
  );
};

export default DoPage;
