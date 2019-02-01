import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../containers/home-page/Home-page.container";
import NotFound from "../components/not-found/Not-found.component";

const Routes = () => (
  <main className="flex-auto">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </main>
);

export default Routes;
