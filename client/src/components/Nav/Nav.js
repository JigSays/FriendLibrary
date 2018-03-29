import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import "./Nav.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="./" active>Friend's Library</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" active>All</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Genre
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Pick a Genre:</DropdownItem>
              <DropdownItem href="/api/books/genre/Biography">Biography</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Business">Business</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Childrens">Children's</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Cookbook">Cookbook</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Crime">Crime</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Fantasy">Fantasy</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Historical Fiction">Historical Fiction</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Historical Non-Fiction">Historical Non-Fiction</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Horror">Horror</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Humor and Comedy">Humor and Comedy</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Mystery">Mystery</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Non-Fiction">Non-Fiction</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Philosophy">Philosophy</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Poetry">Poetry</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Romance">Romance</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Science Fiction">Science Fiction</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Sports">Sports</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Suspence">Suspence</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Thriller">Thriller</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Travel">Travel</DropdownItem><br/>
              <DropdownItem href="/api/books/genre/Younge Adult">Young Adult</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="/">Friends</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/new">New</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}