import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useCreateProductMutation } from "../appApi";
import { Alert } from "react-bootstrap";
import newProduct from "../assets/newProduct.avif";
import { IoMdClose } from "react-icons/io";
import axios from "../axios";
//import axios from "axios";

function NewProduct() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [images, setImages] = React.useState([]);

  const [imageToRemove, setImageToRemove] = React.useState(null);

  const navigate = useNavigate();

  const [createProduct, { error, isError, isSuccess, isLoading }] =
    useCreateProductMutation();

  function showWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dhe8fjr7n",
        uploadPreset: "wcl75zz9",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImages((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
        }
      }
    );
    widget.open();
  }

  //remove image
  function handleRemoveImg(imgObj) {
    console.log("image to remove");
    setImageToRemove(imgObj.public_id);
    axios
      .delete(`/images/${imgObj.public_id}`)
      .then((res) => {
        console.log(res);
        //setImageToRemove(null);
        setImages((prev) =>
          prev.filter((img) => img.public_id !== imgObj.public_id)
        );
      })
      .catch((e) => console.log(e));
  }

  ///submit de form
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !description || !price || !category || images.length === 0) {
      return alert("Please fill out all fields.");
    }
    createProduct({ name, description, price, category, images })
      .then((data) => {
        console.log("Product created:", data);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.error("Error creating product:", error);
        alert("Error creating product. Please try again.");
      });
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleArea(e) {
    setDescription(e.target.value);
  }

  return (
    <Wrapper className="wrapper">
      <div className="wrapper__content">
        <form className="form__content" onSubmit={handleSubmit}>
          <h2>Create a New Product</h2>
          {isSuccess && (
            <Alert variant="success">Product created with success</Alert>
          )}
          {isError && <Alert variant="danger">{error.data}</Alert>}
          <div className="form__content">
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={handleName}
              required
            ></input>
          </div>

          <div className="form__content">
            <label htmlFor="description">Product Description:</label>
            <textarea
              value={description}
              placeholder="Product description"
              onChange={handleArea}
              required
            ></textarea>
          </div>

          <div className="form__content">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              placeholder="Insert price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            ></input>
          </div>

          <div className="form__content">
            <label htmlFor="category">Category:</label>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option defaultValue>--Select one--</option>
              <option value="technology">Technology</option>
              <option value="tablets">Tablets</option>
              <option value="phones">Phones</option>
              <option value="laptops">Laptops</option>
            </select>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="btn upload__btn"
              onClick={showWidget}
            >
              Upload images
            </button>
            <button type="submit" className="create__btn btn">
              Create Product
            </button>
          </div>
        </form>
        <div className="image__content">
          <img src={newProduct} alt="new-product"></img>
        </div>
      </div>
      <div className="image-preview-container">
        {images.map((image, index) => (
          <div key={index} className="image-preview">
            <img src={image.url} alt={`Preview ${index}`} />
            <IoMdClose
              className="icon__close"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                fontSize: "1.8rem",
                zIndex: "99",
                cursor: "pointer",
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "black",
                borderRadius: "50%",
                color: "#fff",
              }}
              onClick={() => handleRemoveImg(image)}
            ></IoMdClose>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  div.wrapper__content {
    width: 100%;
    max-width: var(--max-width);
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

  .buttons {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .upload__btn,
  .create__btn {
    width: max-content;
    padding: 0.3rem 0.6rem;
    display: inline-block;
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

  div.image-preview-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }

  div.image-preview {
    width: 250px;
    height: 250px;
    position: relative;
    margin: 0 auto;
  }

  div.image-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default NewProduct;
