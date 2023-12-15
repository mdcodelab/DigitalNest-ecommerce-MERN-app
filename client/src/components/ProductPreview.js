import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

function ProductPreview({_id, name, images, price, category}) {

  return (
    <Link
      to={`/product/${_id}`}
      className="product__preview__container"
      style={{ width: "290px", height: "250px", margin: "1.5rem", boxShadow: "var(--box-shadow3"}}
    >
      <Wrapper className="product__content">
        <div className="product__contant__info">
          <img src={images[0].url} className="product__image"></img>
          <div className="product__details">
            <h5>{name}</h5>
            <h5>${price}</h5>
          </div>
          <span className="category__info">{category}</span>
        </div>
      </Wrapper>
    </Link>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0 0 0.3rem 0.3rem;

  div.product__content__info {
    width: 100%;
    height: 100%;
  }

  img.product__image {
    width: 290px;
    height: 165px;
    object-fit: cover;
    border-radius: 0.3rem;
  }

  div.product__details {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0.3rem 0.3rem;
  }

  div.product__details h5 {
    color: #333;
    letter-spacing: 0.06rem;
    margin: 0; padding: 0;
  }

  span.category__info {
    display: block;
    margin: 0 auto;
    color: #333;
    background: var(--yellow-color);
    width: max-content;
    height: max-content;
    padding: 0.3rem 0.5rem;
    border-radius: 45%;
    text-transform: capitalize;
    font-size: 1rem;
  }
`;

export default ProductPreview;
