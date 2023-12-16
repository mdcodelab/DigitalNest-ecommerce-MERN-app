import React from 'react';
import { Spinner } from 'react-bootstrap';
import spinner from "../assets/spinner.gif"
import styled from "styled-components";

function Loading() {
  return (
    <Wrapper className="loading__container">
      <img src={spinner} alt="spinner"></img>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 100%;
max-width: var(--max-width);
margin: 0 auto;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

.sinner {
    display: block;
}
`;

export default Loading;
