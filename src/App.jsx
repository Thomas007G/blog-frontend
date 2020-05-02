import React from "react";
import { Nav, NavItem } from "./components/nav/Nav";

import { ReactComponent as UserSVG } from "./icons/user.svg";
import { ReactComponent as CogSVG } from "./icons/cog.svg";
import { ReactComponent as ImageSVG } from "./icons/image.svg";
// import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Nav>
        <NavItem icon={<UserSVG />} />
        <NavItem icon={<CogSVG />} />
        <NavItem icon={<ImageSVG />} />
      </Nav>
    );
  }
}

export default App;
