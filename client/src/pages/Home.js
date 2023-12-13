import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { categories } from "../categories";
import {Tilt} from "react-tilt";
import banner from "../assets/banner.png";
import Footer from "../components/Footer";


function Home() {
  return (
    <Wrapper className="home__container">
      <div className="featured__products">
        <h2>Last Products</h2>
        <Link to="/category/all">See more {">>"}</Link>
      </div>

      {/* Corrected typo: banner */}
      <div className="banner">
      <img src={banner} alt="banner"></img>
      </div>

      <div className="recent__products">
        <h2>Categories</h2>
        <div className="categories__container">
          {categories.map((category, index) => {
            const { name, image } = category;
            return (
              // Corrected typo: 'stc' to 'src', added 'alt' for image accessibility
              <Tilt key={index} options={{ max: 20, scale: 1.03 }}>
                <Link to={`/category/${name.toLowerCase()}`} className="category__items__links">
                <div className="category__item">
                  <div>
                    {" "}
                    <h2>{name}</h2>
                  </div>
                  <img src={image} alt={name}/>
                </div>
              </Link>
              </Tilt>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .featured__products {
    width: 100%;
    height: 50vh;
    padding: 1rem 0;
    max-width: var(--max-width);
    margin: 0 auto;

  }

  .featured__products a {
    font-size: 1.5rem;
  }

  .banner {
    width: 100%;
    max-width: var(--max-width);
    height: auto;
    margin: 0 auto;
  }

  .banner img {
    width: 100%;
    height: auto;
  }

  .recent__products {
    width: 100%;
    height: 50vh;
    padding: 0 1.5rem;
  }

  .recent__products h2 {
    margin: 1.5rem 0;
  }

  .categories__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }

  .category__item {
    width: 22rem;
    height: 12rem;
    position: relative;
    border-radius: 0.3rem;
    box-shadow: var(--shadow2);
    margin-bottom: 1.5em;
  }

  .category__item div {
    width: 22rem;
    height: 12rem;
    position: absolute;
    top: 0; bottom: 0;
    background: rgba(0,0,0,0.4);
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category__item div h2 {
    color: var(--yellow-color);
    letter-spacing: 0.08rem;
  }

  .category__item img {
    width: 22rem;
    height: 12rem;
    display: block;
    object-fit: cover;
    border-radius: 0.5rem;
    border-radius: 0.3rem;
  }`;

export default Home;




    