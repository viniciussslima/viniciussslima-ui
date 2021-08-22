import React, { FC } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <h1>Viniciussslima</h1>} />
      <Route render={() => <Redirect to="/"></Redirect>} />
    </BrowserRouter>
  );
};

export default Router;
