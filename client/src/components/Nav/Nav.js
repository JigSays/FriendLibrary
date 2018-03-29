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
              <DropdownItem value="Biography">Biography</DropdownItem>
              <DropdownItem value="Business">Business</DropdownItem>
              <DropdownItem value="Childrens">Children's</DropdownItem><br/>
              <DropdownItem value="Cookbook">Cookbook</DropdownItem><br/>
              <DropdownItem value="Crime">Crime</DropdownItem><br/>
              <DropdownItem value="Fantasy">Fantasy</DropdownItem><br/>
              <DropdownItem value="Historical Fiction">Historical Fiction</DropdownItem><br/>
              <DropdownItem value="Historical Non-Fiction">Historical Non-Fiction</DropdownItem><br/>
              <DropdownItem value="Horror">Horror</DropdownItem><br/>
              <DropdownItem value="Humor and Comedy">Humor and Comedy</DropdownItem><br/>
              <DropdownItem value="Mystery">Mystery</DropdownItem><br/>
              <DropdownItem value="Non-Fiction">Non-Fiction</DropdownItem><br/>
              <DropdownItem value="Philosophy">Philosophy</DropdownItem><br/>
              <DropdownItem value="Poetry">Poetry</DropdownItem><br/>
              <DropdownItem value="Romance">Romance</DropdownItem><br/>
              <DropdownItem value="Science Fiction">Science Fiction</DropdownItem><br/>
              <DropdownItem value="Sports">Sports</DropdownItem><br/>
              <DropdownItem value="Suspence">Suspence</DropdownItem><br/>
              <DropdownItem value="Thriller">Thriller</DropdownItem><br/>
              <DropdownItem value="Travel">Travel</DropdownItem><br/>
              <DropdownItem value="Younge Adult">Young Adult</DropdownItem>
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