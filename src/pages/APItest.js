import { React } from "react";
import axios from "axios";

const ApiTest = () => {
  const url = "http://127.0.0.1:8000/logs/";
  const onClick1 = async () => {
    try {
      await axios
        .post(url, {
          log_id: "16",
          start: "2021-08-13",
          title: "Frontend Boring",
        })
        .then((res) => {
          console.log(res);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const onClick2 = async () => {
    try {
      await axios.delete(url + JSON.stringify(5)).then((res) => {
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onClick3 = async () => {
    try {
      await axios.get(url + JSON.stringify(7)).then((res) => {
        console.log(res.data);
      });
      console.log("GET Done");
    } catch (error) {
      console.log(error);
    }
  };

  const onClick4 = () => {
    axios
      .put(url + JSON.stringify(7), {
        log_id: "7",
        start: "2021-08-17",
        title: "Have been edited",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={onClick1}>POST</button>
      <button onClick={onClick2}>DELETE</button>
      <button onClick={onClick3}>GET</button>
      <button onClick={onClick4}>PUT</button>
    </div>
  );
};

export default ApiTest;
