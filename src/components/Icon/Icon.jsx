import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;

    height: 100%;
    width: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
`

const ImgIcon = styled.img`

    max-width: 90%;

    border-radius: 50%;

`


function Icon(props) {
        return(
            <Container>
                <ImgIcon src={props.src}></ImgIcon>
            </Container>
        );
}

export default Icon