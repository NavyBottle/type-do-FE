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
        placeholder="ex) 7/21 , 22:30"
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
