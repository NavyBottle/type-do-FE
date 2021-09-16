// action
const ADD_INPROGRESS = "inprogress/add_inprogress";
const DELETE_INPROGRESS = "inprogress/delete_inprogress";

// action function
export const AddInprogress = (log_id, time, title, priority) => {
  return {
    type: ADD_INPROGRESS,
    inprogress: {
      log_id,
      time,
      title,
      priority,
      category: "inprogress",
    },
  };
};
export const DeleteInprogress = (log_id) => {
  return {
    type: DELETE_INPROGRESS,
    log_id,
  };
};

const initialState = [
  {
    log_id: 4,
    time: "2021-08-12",
    title: "Now starting",
    priority: "1",
    category: "inprogress",
  },
];

//reducer
export default function inprogress(state = initialState, action) {
  switch (action.type) {
    case ADD_INPROGRESS:
      return state.concat(action.inprogress);
    case DELETE_INPROGRESS:
      return state.filter((list) => list.log_id !== action.log_id);
    default:
      return state;
  }
}
