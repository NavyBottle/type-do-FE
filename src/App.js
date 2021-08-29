import React from "react";
import { Route } from "react-router-dom";

import TypePage from "./pages/TypePage";
import DoPage from "./pages/DoPage";
import CRUD from "./components/CRUD";

function App() {
  return (
    <div>
      <Route path={["", "/type"]} component={TypePage} exact={true} />
      <Route path="/do" component={DoPage} />
      <Route path="/api" component={CRUD} />
    </div>
  );
}

export default App;
