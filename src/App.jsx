import React from "react";
import { Nav, NavItem } from "./components/Nav/Nav";

import { ReactComponent as CogIcon } from "./icons/cog.svg";
// import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Nav>
        <NavItem icon={<CogIcon className="icon" />} />
      </Nav>
    );
  }
}

export default App;
