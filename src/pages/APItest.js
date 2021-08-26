import { React, useState } from "react";
import axios from "axios";

const ApiTest = () => {
  const [data, setData] = useState([]);
  let hi;
  const onClick = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/logs/");
      setData(response.data);
      console.log(response.data);
      hi = response.data;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button onClick={onClick}>API</button>
      {data.map((log) => (
        <div key={log.id}>{log.log_id}</div>
      ))}
    </div>
  );
};

export default ApiTest;
