import React from "react";
import { Nav, NavItem } from "./components/nav/Nav";

import { ReactComponent as Logo } from "./icons/arrow.svg";
// import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Nav>
        <NavItem icon={<Logo />} />
      </Nav>
    );
  }
}

export default App;
