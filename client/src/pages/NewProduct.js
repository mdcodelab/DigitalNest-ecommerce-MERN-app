import React from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useCreateProductMutation} from "../appApi";
import {Alert} from "react-bootstrap";
import newProduct from "../assets/newProduct.avif";

function NewProduct() {
const [name, setName]=React.useState("");
const[description, setDescription]=React.useState("");
const[price, setPrice]=React.useState("");
const[category, setCategory]=React.useState("");
const [images, setImages]=React.useState([]);
const[imgToRemove, setImgToRemove]=React.useState([]);

const navigate = useNavigate();
const[createProduct, {error, isError, isSuccess, isLoading}]=useCreateProductMutation();



  return (
    <Wrapper className="wrapper">
      <div className="wrapper__content">
        <form className="form__content">
          <h2>Create a New Product</h2>
          {isSuccess && (<Alert variant="success">Product created with success</Alert>)}
          {isError && <Alert variant="danger">{error.data}</Alert>}
          <div className="form__content">
            <label>Product Name:</label>
            <input
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="form__content">
            <label>Product Description:</label>
            <textarea
              value={description}
              placeholder="Product description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form__content">
            <label>Price:</label>
            <input
              type="number"
              placeholder="Insert price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>

          <div className="form__content">
            <label>Category:</label>
            <select>
              <option selected>--Select one--</option>
              <option value="technology">Technology</option>
              <option value="tablets">Tablets</option>
              <option value="phones">Phones</option>
              <option value="laptops">Laptops</option>
            </select>
          </div>
          <button type="button" className="btn upload__btn">
            Upload images
          </button>
        </form>
        <div className="image__content">
          <img src={newProduct} alt="new-product"></img>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  div.wrapper__content {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .form__content,
  .image__content {
    flex: 1;
  }

  .form__content h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .form__content label {
    display: block;
    margin-bottom: 0.5rem;
  }

  .form__content input {
    width: 100%;
    padding: 0.3rem 0;
    margin-bottom: 1rem;
    border-radius: 0.3rem;
    border: 0.08rem solid #777;
  }

  .form__content textarea {
    width: 100%;
    display: block;
    margin-bottom: 1rem;
    border-radius: 0.3rem;
    border: 0.08rem solid #777;
    box-shadow: var(--shadow2);
  }

  .form__content select {
    width: 100%;
    border-radius: 0.3rem;
    padding: 0.3rem;
    border: 0.08rem solid #777;
    box-shadow: var(--shadow2);
  }

  .form__content select option {
    font-size: 1.1rem;
  }

  .image__content img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow3);
    display: block;
    margin-left: 1rem;
  }

  .upload__btn {
    width: max-content;
    padding: 0.3rem 0.6rem;
    display: block;
    margin: 1.5rem auto;
  }

  @media (max-width: 1000px) {
    div.wrapper__content {
      flex-direction: column !important;
    }
    .image__content img {
      margin: 0;
    }
  }
`;

export default NewProduct;

