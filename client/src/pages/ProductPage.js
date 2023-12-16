import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import SimilarProduct from "../components/SimilarProduct";
//carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ProductPage() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);

  const [product, setProduct] = React.useState(null);
  const [similar, setSimilar] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((response) => {
        setProduct(response.data.product);
        setSimilar(response.data.similar);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  if (!product) {
    return <Loading></Loading>;
  }

  // Render similar products
  const similarProducts = similar ? (
    <>
    <h3 style={{textAlign: "center", marginTop: "2rem", marginBottom: "1rem"}}>Similar Products</h3>
      <div className="similar__products" style={{display: "flex", alignItems: "center", justifyContent: "space-evenly",
          flexWrap: "wrap",}}>
        {similar.map((product, index) => (
          <div className="index" key={index} data-value={index}>
            <SimilarProduct key={index} {...product}></SimilarProduct>
          </div>
        ))}
      </div>
    </>
  ) : (
    <p>No similar products available.</p>
  );

  const handleDragStart = (e) => e.preventDefault();

  const images = product ? (
    product.images.map((image, index) => (
      <img key={index} src={image.url} onDragStart={handleDragStart} alt={product.name}></img>
    ))
  ) : (
    <p>Loading images...</p>
  );

  return (
    <Wrapper>
      <div className="product__container">
        <div className="product__container__details">
          <h1 className="product__name">{product.name}</h1>
          <span className="product__category">{product.category}</span>
          <p className="product__price">${product.price}</p>
          <p className="product__description">{product.description}</p>
          {user && !user.isAdmin && (
            <div className="select__container">
              <select className="select">
                <option value="1">1</option>
                <option value="2" className="option">
                  2
                </option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <Link to="/cart" className="btn btn__cart">
                Add to Cart
              </Link>
            </div>
          )}
          {user && user.isAdmin && (
            <Link
              to={`/products/${product._id}/edit`}
              className="edit__product__link btn"
            >
              Edit Product
            </Link>
          )}
        </div>
        <div className="product__image_container">
          <img
            src={product.images[0].url}
            alt={product.name}
            className="product__image"
          ></img>
        </div>
      </div>
      <div className="similar__products">
        {similarProducts}
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

  div.product__container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--box-shadow4);
    padding-bottom: 2rem;
    border-radius: 0.5rem;
  }

  .product__name {
    letter-spacing: 0.08rem;
    margin: 1rem 0;
  }

  .product__category {
    width: max-content;
    height: max-content;
    background: var(--yellow-color);
    padding: 0.2rem 0.6rem;
    border-radius: 45%;
    display: block;
    margin: 1rem 0;
  }

  .product__price {
    font-weight: bold;
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  .product__description {
    text-align: justify;
    line-height: 1.8rem;
  }

  .product__image {
    width: 450px;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    border-radius: 0.3rem;
    display: block;
    margin-left: 1.5rem;
  }

  .product__container__details,
  .product__image__container {
    width: 50%;
  }

  .select__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .select {
    flex: 1;
    margin: 2rem 0;
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    border-radius: 3rem;
    text-align: center !important;
    color: var(--blue--navy-color);
    font-size: 1.25rem;
  }

  .select .option {
    text-align: center !important;
  }

  .btn__cart {
    flex: 1;
    width: max-content;
    height: nax-content;
    padding: 0.3rem 0.5rem;
    margin: 0;
    display: block;
    margin-left: 1rem;
    border-radius: 3rem;
  }

  @media (max-width: 992px) {
    div.product__container {
      flex-direction: column;
    }
    .product__image {
      margin: 0;
      margin-top: 2rem;
    }

    .product__name {
      font-size: 1.5rem;
    }
  }
`;

export default ProductPage;


