import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

function ProductPreview({_id, category, name, pictures}) {

  return (
    <Wrapper to={`/product/${_id}`}>
      <div className="product__content">
        <img src={pictures[0]}></img>
        <p>{name}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.a`

`;

export default ProductPreview;
