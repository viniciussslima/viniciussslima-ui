import React, { FC } from "react";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Base from "components/Base";
import Install from "pages/Install";
import About from "pages/About";
import CarrosselComponent from "pages/CarrosselComponent";
import DrawerComponent from "pages/DrawerComponent";
import ListComponent from "pages/ListComponent";
import LoadingComponent from "pages/LoadingComponent";
import MenuComponent from "pages/MenuComponent";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Base>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/install" component={Install} />
          <Route exact path="/carrossel" component={CarrosselComponent} />
          <Route exact path="/drawer" component={DrawerComponent} />
          <Route exact path="/list" component={ListComponent} />
          <Route exact path="/loading" component={LoadingComponent} />
          <Route exact path="/menu" component={MenuComponent} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Base>
    </BrowserRouter>
  );
};

export default Router;
