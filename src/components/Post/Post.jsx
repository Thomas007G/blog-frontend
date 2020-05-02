import { React } from "react";

import "./Post.css";

class Blog extends React.Component {
  render() {
    return (
      <a href={this.props.link}>
        <div>
          <h1>{this.props.title}/</h1>
          <p>{this.props.blurb}</p>
          <small>
            <a href={this.props.author.link}>{this.props.author.name}</a>,{" "}
            {this.props.date}
          </small>
        </div>
        /
      </a>
    );
  }
}
