import { React } from "react";

import "../styles/TypePage.scss";

const Input = ({ time, todo, priority, onChange, onCreate }) => {
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onCreate();
    }
  };

  return (
    <div className="typepage-input-wrapper">
      <input
        className="typepage-input"
        name="time"
        onChange={onChange}
        value={time}
        onKeyPress={onKeyPress}
      />
      <input
        className="typepage-input"
        name="todo"
        onChange={onChange}
        value={todo}
        onKeyPress={onKeyPress}
      />
      <input
        className="typepage-input"
        name="priority"
        onChange={onChange}
        value={priority}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Input;
