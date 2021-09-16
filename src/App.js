import React from "react";
import { Route } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import todo from "./modules/todo";
import inprogress from "./modules/inprogress";
import done from "./modules/done";

import TypePageContainer from "./container/TypePageContainer";
import DoPage from "./pages/DoPage";

const rootReducer = combineReducers({
  todo,
  inprogress,
  done,
});
const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Route path={["", "/type"]} component={TypePageContainer} exact={true} />
      <Route path="/do" component={DoPage} />
    </Provider>
  );
}

export default App;
