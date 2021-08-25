import { React } from "react";
import classNames from "classnames";

import { FaListUl } from "react-icons/fa";
import "../styles/TypePage.scss";

const Button = (logButton, { setLogbutton }) => {
  return (
    <FaListUl
      className={classNames(
        { "typepage-log-button-false": !logButton },
        { "typepage-log-button-true": logButton }
      )}
      onClick={() => setLogbutton(!logButton)}
      size="20px"
    />
  );
};

export default Button;
