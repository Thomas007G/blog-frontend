import React from "react";
import "./Nav.css";
import { render } from "@testing-library/react";

class NavItem extends React.Component(props) {
  render() {
    return (
      <li>
        <a href="#" className="nav-item">
          {props.icon}
        </a>
      </li>
    );
  }
}

class Nav extends React.Component(props) {
  render() {
    return (
      <nav>
        <ul>{props.children}</ul>
      </nav>
    );
  }
}

export { Nav, NavItem };
