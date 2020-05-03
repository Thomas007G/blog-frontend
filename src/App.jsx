import React from "react";
import { Nav, NavItem } from "./components/Nav/Nav";
import Post from "./components/Post/Post";

import { FaUser } from "react-icons/fa"

let post_data = {
  "title": "How to create a Post",
  "author": "Thomas Daniel Galligan",
  "date": "3rd of May, 2020",
  "blurb": "This is a post that contains post data",
  "img": "https://images.unsplash.com/photo-1588495756505-5437763146dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem icon={<FaUser/>} />
        </Nav>

        <Post data={post_data} />
      </div>
    );
  }
}

export default App;
