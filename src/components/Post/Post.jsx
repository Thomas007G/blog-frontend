import React from "react";
import styled from "styled-components";

// import "./Post.css";

const Card = styled.div`
  width: 80%;

  margin: auto;
  border: 0.1rem black solid;
  border-radius: 0.4rem;
  box-shadow: 0.6rem 0.6rem #454545;
  padding: 1rem;

  display: grid;

  /* grid-template-columns:  */
`

const Img = styled.div`
  max-height: 40vh;
  max-width: 40vw;

  display: inline;
` 

const Title = styled.h1`

  font-size: 2em;
  color: var(--text-color);

`

const UserName = styled.small`

  font-size: 0.8rem;

`

const Blurb = styled.p`

  font-size: 1rem;
`

class Post extends React.Component {
  render() {
    return (
      <a href={this.props.data.link}>
        <Card className="post">
          
        <Title>{this.props.data.title}</Title>
        <Blurb>{this.props.data.blurb}</Blurb>
        <UserName>
          <a href={this.props.data.author}>{this.props.data.author}</a>
          {this.props.data.date}
        </UserName>
        <Img>
          <img src={this.props.data.img} alt="Post Banner"/>
        </Img>
        </Card>
      </a>
    );
  }
}

export default Post;
