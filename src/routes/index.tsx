import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../containers/home-page/Home-page.container";
import NotFound from "../components/not-found/Not-found.component";
import Results from "../containers/results/Results.container";
import { routeStrings } from "./route-strings";

const Routes = () => (
  <main className="flex-auto">
    <Switch>
      <Route exact path={routeStrings.HOME} component={HomePage} />
      <Route exact path={routeStrings.RESULTS} component={Results} />
      <Route exact path={routeStrings.NOT_FOUND} component={NotFound} />
    </Switch>
  </main>
);

export default Routes;
