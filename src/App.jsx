import React from "react";
import { Nav, NavItem } from "./components/Nav/Nav";
import Post from "./components/Post/Post";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
// import "./App.css";

let post_data = {
  author: "Thomas Daniel Galligan",
  date: "3rd of May, 2020",
  blurb: "This is a post that contains post data",
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem icon={<CogIcon className="icon" />} />
        </Nav>

        <Post data={post_data} />
      </div>
    );
  }
}

export default App;
