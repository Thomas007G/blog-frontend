import React from "react";
import "./Nav.css";

class NavItem extends React.Component {
  render() {
    return (
      <li>
        <a href="/" className="nav-item">
          {this.props.icon}
        </a>
      </li>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>{this.props.children}</ul>
      </nav>
    );
  }
}

export { Nav, NavItem };
