import React, { FC } from "react";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Base from "components/Base";
import Install from "pages/Install";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Base>
        <Switch>
          <Route exact path="/" component={Install} />
          <Route render={() => <Redirect to="/"></Redirect>} />
        </Switch>
      </Base>
    </BrowserRouter>
  );
};

export default Router;
