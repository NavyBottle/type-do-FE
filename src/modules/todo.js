// action
const ADD_TODO = "todo/add_todo";
const DELETE_TODO = "todo/delete_todo";

// action function
export const AddTodo = (log_id, time, title, priority) => {
  return {
    type: ADD_TODO,
    todo: {
      log_id,
      time,
      title,
      priority,
      category: "todo",
    },
  };
};
export const DeleteTodo = (log_id) => {
  return {
    type: DELETE_TODO,
    log_id,
  };
};

const initialState = [
  {
    log_id: 1,
    time: "2021-04-05",
    title: "Something todo",
    priority: 1,
    category: "todo",
  },
  {
    log_id: 2,
    time: "2021-05-23",
    title: "Mid term",
    priority: 3,
    category: "todo",
  },
  {
    log_id: 3,
    time: "2021-06-13",
    title: "Final term",
    priority: 2,
    category: "todo",
  },
];

//reducer
export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case DELETE_TODO:
      return state.filter((list) => list.log_id !== action.log_id);
    default:
      return state;
  }
}
