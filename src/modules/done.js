// action
const ADD_DONE = "done/add_done";
const DELETE_DONE = "done/delete_done";

// action function
export const AddDone = (log_id, time, title, priority) => {
  return {
    type: ADD_DONE,
    done: {
      log_id,
      time,
      title,
      priority,
      category: "done",
    },
  };
};
export const DeleteDone = (log_id) => {
  return {
    type: DELETE_DONE,
    log_id,
  };
};

const initialState = [
  {
    log_id: 5,
    time: "2021-06-08",
    title: "Just Finished",
    priority: 2,
    category: "done",
  },
];

//reducer
export default function done(state = initialState, action) {
  switch (action.type) {
    case ADD_DONE:
      return state.concat(action.done);
    case DELETE_DONE:
      return state.filter((list) => list.log_id !== action.log_id);
    default:
      return state;
  }
}
