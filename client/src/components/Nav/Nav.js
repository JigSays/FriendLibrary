import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
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
          
          <NavItem>
            <NavLink href="/">Friends</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/new">New</NavLink>
          </NavItem>
          <NavItem>
            <select id="lang"onChange={this.props.genreChange} value={this.state.value}>
                  <option >Genre</option>
                  <option value="Biography">Biography</option>
                  <option value="Business">Business</option>
                  <option value="Childrens">Children's</option>
                  <option value="Cookbooks">Cookbooks</option>
                  <option value="Crime">Crime</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Historical Ficton">Historical Fiction</option>
                  <option value="Historical Non-Fiction">Historical Non-Fiction</option>
                  <option value="Horror">Horror</option>
                  <option value="Humor and Comedy">Humor and Comedy</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Philosophy">Philosophy</option>
                  <option value="Poetry">Poetry</option>
                  <option value="Romance">Romance</option>             
                  <option value="Science Fiction">Science Fiction</option>
                  <option value="Sports">Sports</option>
                  <option value="Suspence">Suspence</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Travel">Travel</option>
                  <option value="Young Adult">Young Adult</option>
               </select>
               </NavItem>
        </Nav>
      </div>
    );
  }
}