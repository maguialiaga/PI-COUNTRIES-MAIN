import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
// import NavBar from "./components/NavBar/Navbar";
import LandingPage from "./views/Landing/LandingPage";
// import Error from "./components/Error/Error";
// import FormActivity from "./components/Form/FormActivity";
// import Detail from "./components/Detail/Detail";

function App() {
  return (
    <>
      <Switch>
        {/* <Route path="/home">
          <NavBar />
        </Route>
        <Route exact path="/home/createActivity" component={FormActivity} />
        <Route exact path="/:countryId" component={Detail} /> */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="/" component={Error} />  */}
      </Switch>
    </>
  );
}

export default App;
