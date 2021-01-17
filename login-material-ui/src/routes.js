import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Registrar from "./pages/Registrar/Registrar";
import Home from "./pages/Home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      {/* Uma rota por vez */}
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/registrar" component={Registrar} />
        <Route path="/home" component={Home} />      
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
