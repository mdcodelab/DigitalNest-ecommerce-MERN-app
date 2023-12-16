import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { categories } from "../categories";
import {Tilt} from "react-tilt";
import banner from "../assets/banner.png";
import Footer from "../components/Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

function Home() {
const products = useSelector((state) => state.products);
console.log(products);
//const lastProducts=products.slice(0, 8);
//console.log(lastProducts);
const lastProducts = products ? products.slice(0, 8) : [];

const dispatch=useDispatch();
  React.useEffect(() => {
    axios.get("http://localhost:5000/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);


  return (
    <Wrapper className="home__container">
      <div className="featured__products">
        <h2>Last Products</h2>
        <div className="last__products">
          { lastProducts.map((product, index) => {
            return <ProductPreview key={index} {...product}></ProductPreview>;
          })}
        </div>
        <Link to="/category/all" style={{ textAlign: "right" }}>
          See more {">>"}
        </Link>
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
                <Link
                  to={`/category/${name.toLowerCase()}`}
                  className="category__items__links"
                >
                  <div className="category__item">
                    <div>
                      {" "}
                      <h2>{name}</h2>
                    </div>
                    <img src={image} alt={name} />
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
    height: 100%;
    padding: 1rem;
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
    max-width: 1350px;
    margin: 0 auto;
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
  }
  
  div.last__products {
    height: 100%;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  `;

export default Home;

