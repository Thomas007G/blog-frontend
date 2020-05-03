import React from "react";

import "./Post.css";

class Post extends React.Component {
  render() {
    return (
      <a href={this.props.data.link}>
        <div className="post">
          <h1>{this.props.data.title}/</h1>
          <p>{this.props.data.blurb}</p>
          <small>
            <a href={this.props.data.author}>{this.props.data.author}</a>,{" "}
            {this.props.data.date}
          </small>
        </div>
        /
      </a>
    );
  }
}

export default Post;
