import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import LandingPage from "./views/Landing/LandingPage";
import Error from "./views/Error/Error";
import FormActivity from "./views/Form/FormActivity";
import Detail from "./views/Detail/Detail";

function App() {
  return (
    <>
      <Switch>
        <Route path="/home/createActivity" component={FormActivity} />

        <Route exact path="/home/:id" component={Detail} />

        <Route exact path="/home" component={Home} />

        <Route exact path="/" component={LandingPage} />

        <Route path="/" component={Error} />
      </Switch>
    </>
  );
}

export default App;
