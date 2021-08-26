import React from "react";
import { Route } from "react-router-dom";

import TypePage from "./pages/TypePage";
import DoPage from "./pages/DoPage";
import ApiTest from "./pages/APItest";

function App() {
  return (
    <div>
      <Route path={["", "/type"]} component={TypePage} exact={true} />
      <Route path="/do" component={DoPage} />
      <Route path="/api" component={ApiTest} />
    </div>
  );
}

export default App;
