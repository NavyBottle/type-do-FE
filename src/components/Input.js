import { React } from "react";

import "../styles/TypePage.scss";

const Input = ({ time, title, priority, onChange, onCreate }) => {
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onCreate();
    }
  };

  return (
    <div className="typepage-input-wrapper">
      <input
        className="typepage-input"
        placeholder="ex) 2021-08-16"
        name="time"
        onChange={onChange}
        value={time}
        onKeyPress={onKeyPress}
      />
      <input
        className="typepage-input"
        name="title"
        onChange={onChange}
        value={title}
        onKeyPress={onKeyPress}
      />
      <input
        className="typepage-input"
        placeholder="type 1 ~ 5"
        name="priority"
        onChange={onChange}
        value={priority}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Input;
