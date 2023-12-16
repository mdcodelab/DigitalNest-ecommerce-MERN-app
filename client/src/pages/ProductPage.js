import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import SimilarProduct from "../components/SimilarProduct";

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
    <div className="similar-products"style={{border: "2px solid red"}}>
      {similar.map((product, index) => (
        <div className="index" key={index} data-value={index}>
          <SimilarProduct key={index} {...product}></SimilarProduct>
        </div>
      ))}
    </div>
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
      <div className="product__carusel">
        <AliceCarousel
          mouseTracking
          controlsStrategy="alternate"
        ></AliceCarousel>
      </div>
      <div className="product__container">
        <h1>{product.name}</h1>
        <span>{product.category}</span>
        <p>${product.price}</p>
        <p>{product.description}</p>
        {user && !user.isAdmin && (
          <select>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
          </select>
        )}
      </div>
      {similarProducts}
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  height: 100%;
`;

export default ProductPage;
