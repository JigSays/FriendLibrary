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
              <DropdownItem href="/action">Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="/">Friends</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/new">New</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Search</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}