import React, { FC } from "react";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Base from "components/Base";
import Install from "pages/Install";
import CarrosselComponent from "pages/CarrosselComponent";
import DrawerComponent from "pages/DrawerComponent";
import ListComponent from "pages/ListComponent";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Base>
        <Switch>
          <Route exact path="/" component={Install} />
          <Route exact path="/carrossel" component={CarrosselComponent} />
          <Route exact path="/drawer" component={DrawerComponent} />
          <Route exact path="/list" component={ListComponent} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Base>
    </BrowserRouter>
  );
};

export default Router;
