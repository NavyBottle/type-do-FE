import { React } from "react";
import axios from "axios";

const url = "http://127.0.0.1:8000/logs/";

const sample = {
  log_id: "16",
  start: "2021-08-13",
  title: "Frontend need to be enhanced",
};
const logPost = async (body) => {
  try {
    await axios.post(url, body).then((res) => {
      console.log(res);
    });
  } catch (e) {
    console.log(e);
  }
};

const logDelete = async (log_id) => {
  try {
    await axios.delete(url + JSON.stringify(log_id)).then((res) => {
      console.log(res);
    });
  } catch (e) {
    console.log(e);
  }
};

const logGet = async () => {
  try {
    await axios.get(url).then((res) => {
      console.log(res.data);
    });
    console.log("GET Done");
  } catch (error) {
    console.log(error);
  }
};

const logPut = (log_id) => {
  axios
    .put(url + String(log_id), {
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

const ApiTest = () => {
  return (
    <div>
      <button onClick={() => logPost(sample)}>POST</button>
      <button onClick={() => logDelete(10)}>DELETE</button>
      <button onClick={logGet}>GET</button>
      <button onClick={logPut}>PUT</button>
    </div>
  );
};

export { url };
export default ApiTest;
