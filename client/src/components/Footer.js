import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";

function Footer() {
  return (
    <Wrapper>
      <div className="up">
        <div className="up__left">
          <div className="programs">
            <h4>Programs</h4>
            <Link to="/corporate">Corporate</Link>
            <Link to="/one-to-one">One to One</Link>
            <Link to="/stores">Our stores</Link>
          </div>

          <div className="service">
            <h4>Services</h4>
            <Link to="/training">Training</Link>
            <Link to="/consulting">Consulting</Link>
            <Link to="/sales">Sales</Link>
          </div>

          <div className="contact">
            <h4>Contact</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="up__right">
          <h4>Newsletter</h4>
          <form
            className="form__newsletter"
            action="https://formspree.io/f/mbjvoylv"
            method="POST"
          >
            <input type="email" name="email" placeholder="Your email ..." />
            <button type="submit" className="btn btn__newsletter">
              <IoSendOutline />
            </button>
          </form>
          <div className="icons__container">
            <FaFacebookF
              className="newsletter__icon"
              style={{
                width: "2.2rem",
                height: "2.2rem",
                borderRadius: "50%",
                color: "var(yellow-color",
                fontSize: "2rem",
                border: "0.08rem solid var(--yellow-color",
                padding: "0.3rem",
                cursor: "pointer"
              }}
            ></FaFacebookF>
            <AiFillTwitterCircle
              className="newsletter__icon"
              style={{
                width: "2.2rem",
                height: "2.2rem",
                borderRadius: "50%",
                color: "var(yellow-color",
                fontSize: "2rem",
                border: "0.08rem solid var(--yellow-color",
                padding: "0.3rem",
                cursor: "pointer",
              }}
            ></AiFillTwitterCircle>
            <FaYoutube
              className="newsletter__icon"
              style={{
                width: "2.2rem",
                height: "2.2rem",
                borderRadius: "50%",
                color: "var(yellow-color",
                fontSize: "2rem",
                border: "0.08rem solid var(--yellow-color",
                padding: "0.3rem",
                cursor: "pointer",
              }}
            ></FaYoutube>
          </div>
        </div>
      </div>
      <hr className="hr__newsletter"></hr>

      <div className="down">
        <div className="down__left">
          <Link to="/"><h2>DigitalNest</h2></Link>
        </div>
        <div className="down__right">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span style={{ color: "#bc8f8f" }}>DigitalNest </span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 2rem;
  height: 100%;
  padding: 2rem;
  background: #333;
  color: var(--yellow-color);

  hr.hr__newsletter {
    width: 100%;
    height: 0.08rem;
    background: var(--yellow-color);
  }

  div.up {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div.up__left,
  div.up__right {
    flex: 1;
  }

  div.up__left {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div.up__left a {
    font-size: 0.9em;
    margin-right: 1rem;
  }

  div.up__left a,
  div.up__left h4 {
    margin-bottom: 1rem;
    color: var(--yellow-color);
  }

  div.up__left h4 {
    color: #fff;
  }

  /* right */
  div.up__right h4 {
    text-align: center;
    color: #fff;
    margin-bottom: 1rem;
  }

  .btn__newsletter {
    margin: 0;
    display: block;
    color: #333;
    background: var(--yellow-color);
    transition: all 0.5s ease-in-out;
    margin-left: 0.15rem;
  }

  .btn__newsletter:hover {
    background: #333;
    color: var(--yellow-color);
    border: 1px solid var(--yellow-color) !important;
  }

  form.form__newsletter {
    margin: 0 auto;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  form.form__newsletter input {
    width: 70%;
    border: 0.08rem solid var(--yellow-color);
    outline: 0.08rem solid var(--yellow-color);
    padding: 0.35rem;
    border-radius: 0.8rem;
  }

  form.form__newsletter button {
    width: 30%;
  }

  div.icons__container {
    width: 300px;
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .newsletter__icon {
    transition: all 0.5s ease-in-out;
  }

  .newsletter__icon:hover {
    color: #777;
    border: 0.08 solid %777;
    transform: scale(1.1);
  }

  /* down */
  div.down {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: 0 auto;
    margin-top: 1rem;
    color: var(--yellow-color);
  }

  div.down h2 {
    color: var(--yellow-color);
  }

  div.down p {
    font-size: 0.9rem;
  }

  @media (max-width: 770px) {
    div.up {
      flex-direction: column;
    }
    div.up__left {
      margin-bottom: 1rem;
    }
    div.up__left a {
      font-size: 0%.9rem;
    }
    div.down {
      flex-direction: column;
    }
    .div.down p {
      font-size: 0.6rem;
    }
  }
`;

export default Footer;