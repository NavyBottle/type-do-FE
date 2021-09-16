import React from "react";
import { Route } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import todo from "./modules/todo";
import inprogress from "./modules/inprogress";
import done from "./modules/done";

import TypePage from "./pages/TypePage";
import DoPage from "./pages/DoPage";
import CRUD from "./components/CRUD";

const rootReducer = combineReducers({
  todo,
  inprogress,
  done,
});
const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Route path={["", "/type"]} component={TypePage} exact={true} />
      <Route path="/do" component={DoPage} />
      <Route path="/api" component={CRUD} />
    </Provider>
  );
}

export default App;
