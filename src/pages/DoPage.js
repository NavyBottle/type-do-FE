import { React } from "react";
import { Link } from "react-router-dom";

import "../styles/DoPage.scss";

const DoPage = () => {
  return (
    <div className="dopage-title-wrapper">
      <Link className="dopage-title-type" to="/type">
        Type
      </Link>
      <div className="dopage-title-and"> & </div>
      <Link className="dopage-title-do" to="/do">
        Do
      </Link>
    </div>
  );
};

export default DoPage;
