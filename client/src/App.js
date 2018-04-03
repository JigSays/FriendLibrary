import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Books} />
        <Route exact path="/books/author" component={Books} />
        <Route exact path="/books/title" component={Books} />
        <Route exact path="/books/genre" component={Books} />
        <Route exact path="/" component={Books} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
