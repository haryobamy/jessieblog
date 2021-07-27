import React from "react";
import {
  HomepageHeader,
  Navbar,
  WelcomeSlider,
  Blog,
  Footer,
} from "./components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About, Contact, Feature, Home, Shop, Travel } from "./page";
const App = () => {
  return (
    <div className="mx-4 mt-3 App">
      <Router>
        <Link className="blogHeader" to="/">
          <h1 className=" display-4 fst-italic">
            <strong>JESSIE</strong>
          </h1>
        </Link>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/feature">
            <Feature />
          </Route>
          <Route exact path="/travel">
            <Travel />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
