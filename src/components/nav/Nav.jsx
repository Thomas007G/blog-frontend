import React from "react";
import "./Nav.css";

function NavItem(props) {
  return (
    <li>
      <a href="#" className="nav-item">
        {props.icon}
      </a>
    </li>
  );
}

function Nav(props) {
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  );
}

export { Nav, NavItem };
