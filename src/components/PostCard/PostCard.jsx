import React from "react";
import styled from "styled-components";

import Icon from "../Icon/Icon"


const Card = styled.article`
  width: 50%;

  background: #dddddd;

  padding: 1rem;
  margin: auto;
  box-shadow: 0.1rem 0.4rem 1rem #898989;
  display: grid;

  grid-template-columns: 1fr 9fr;
  grid-gap: 2em;
  grid-template-areas:  "up up"
                        "left   right";
`

const Banner = styled.div`
  width: 100%;
  margin: 0;
  grid-area: up;

  display: flex;
  align-items: center;

`

const Img = styled.img`
  max-height: 20vh;
  margin: auto;
  display: inline;
` 

const BannerImg = styled.img`
  width: 100%;
  max-height: 20vh;
  filter: blur(0.6rem);
  z-index: 0;
`

const Content = styled.div`
  grid-area: right;

`

const Title = styled.h1`
  margin: 0;  
  font-size: 2em;
  color: var(--text-color);

`

const Meta = styled.small`
  font-size: 0.6rem;
  opacity: 70%;
  margin-bottom: 1rem;

`

const Blurb = styled.section`

  font-size: 1rem;
`

function PostCard(props) {
    return (
      <a href={props.data.link}>
        <Card>
          <Banner>
          <Img src={props.data.img}></Img>
          {/* <BannerImg src={props.data.img}></BannerImg> */}
          </Banner>
          <Icon src="https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped.png"></Icon>
          <Content>
            <Title>{props.data.title}</Title>
    <Meta>by {props.data.author}, on {props.data.date}</Meta>
    <Blurb>{props.data.blurb}</Blurb>
          </Content>
        </Card>
      </a>
    );
}

export default PostCard;
