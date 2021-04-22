import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Faq from "./component/FaqPage";
import Home from "./component/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} exact></Route>
          <Route exact path="/faq-page" component={Faq} exact></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
