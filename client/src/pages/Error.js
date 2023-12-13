import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

function Error() {
  return (
    <div>
      <Wrapper className="error__container">
        <div className="error__content">
          <Link to="/" className="btn__error">
            Back Home
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
width: 100%;
height: calc(100vh - 6rem);
max-width: var(--max-width);
margin: 0 auto;
color: var(--yellow-color);

.error__content {
position: relative;
width: 100%;
height: 100%;
}

.btn__error {
    width: max-content;
    display: block;
    background: var(--blue-navy-color);
    color: #fff;
    padding: 0.5rem 1.5rem;
    font-size: 1.5rem;
    border-radius: 0.3rem;
    transition: all 0.5s ease-in-out;
    position: absolute;
    left: 50%; transform: translateX(-50%);
    bottom: 2.5rem;
}

.btn__error:hover {
    background: var(--blue-light-color);
    color: #555;
}
`;

export default Error;
