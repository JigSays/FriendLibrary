import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 100, margin: 10, clear: 'both', padding: 10 }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
