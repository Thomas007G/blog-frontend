import React from "react";
import { Nav, NavItem } from "./components/nav/Nav";

import { ReactComponent as Logo } from "./logo512.png";
// import "./App.css";

function App() {
  return (
    <Nav>
      <NavItem icon={<Logo></Logo>} />
    </Nav>
  );
}

export default App;
