import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Friend Library
        </a>
        <a href="/" className="navbar-brand">
          All
        </a>
        <a href="/" className="navbar-brand">
          Friends
        </a>
        <a href="/" className="navbar-brand">
         Genre
        </a>
        <a href="/books/new" className="navbar-brand">
          New
        </a>
        <a href="/" className="navbar-brand">
          Search
        </a>
      </div>
    </div>
  </nav>;

export default Nav;
