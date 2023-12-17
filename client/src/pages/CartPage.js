import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import Footer from '../components/Footer';
import {Link} from "react-router-dom";

function CartPage() {
  const user = useSelector(state => state.user);
  const products = useSelector(state => state.products);
  const userCartObj = user.cart;

  // Filter products based on the user's cart
  let cart = products.filter((product) => userCartObj[product._id] != null);
  

  console.log(cart);

  return (
    <Wrapper>
      <h1 className="name__cart">Shopping Cart</h1>
      <div className="cart__container">
        {cart.length === 0 ? (
          <div className="name__empty">
            <h3>Shopping cart is empty.</h3>
            <Link to="/" className="btn btn__fill">Fill it!</Link>
          </div>
        ) : (
          <div className="cart__content"></div>
        )}
      </div>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  height: 100%;
  padding: 1.5rem;

  .name__cart {
    text-align: center;
    color: #777;
    letter-spacing: 0.09rem;
    margin-bottom: 1.5rem;
  }

  .name__empty {
    width: max-content;
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  .name__empty h3 {
    color: #777;
    letter-spacing: 0.09rem;
  }

  .name__empty a {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.09rem;
  }
`;

export default CartPage;

