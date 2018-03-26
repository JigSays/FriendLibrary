import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Books} />
        <Route exact path="/books/:author" component={Books} />
        <Route exact path="/books/:title" component={Books} />
        <Route exact path="/books/:genre" component={Books} />
        <Route exact path="/books/new" component={Books} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
