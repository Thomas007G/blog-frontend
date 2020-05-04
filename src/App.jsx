import React from "react";
import { Nav, NavItem } from "./components/Nav/Nav";
import PostCard from "./components/PostCard/PostCard";

import { FaUser } from "react-icons/fa"

let post_data = {
  "title": "How to be a hipster Devloper.",
  "author": "Thomas Daniel Galligan",
  "date": "3rd of May, 2020",
  "blurb": "The definitive guide to become a coffee-drinking developer, spending 3 weeks vertically-centering a div.",
  "img": "https://images.unsplash.com/photo-1588495756505-5437763146dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem icon={<FaUser/>} />
        </Nav>

        <PostCard data={post_data} />
      </div>
    );
  }
}

export default App;
