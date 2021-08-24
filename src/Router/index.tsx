import React, { FC } from "react";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Base from "components/Base";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Base>
        <Switch>
          <Route exact path="/" render={() => <h1>Viniciussslima</h1>} />
          <Route render={() => <Redirect to="/"></Redirect>} />
        </Switch>
      </Base>
    </BrowserRouter>
  );
};

export default Router;
