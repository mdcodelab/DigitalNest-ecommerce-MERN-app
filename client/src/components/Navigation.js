import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";

function Navigation () {
  const [show, setShow] = React.useState(false);

  function handleChange() {
    setShow(!show);
    console.log(show);
  }

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    console.log("logout");
  }

  return (
    <Navbar className="navbar">
      <Link to="/" className="login">
        <h1 className="logo__name">DigitalNest</h1>
      </Link>

      <div className="links">
        <div className="links__container">
          {!user && <Link to="/login" className="login__link">Login</Link>}
          {user && (
            <div className="user__container">
              <button type="button" className="user__container__btn" onClick={()=>setShow(!show)}>
                {`${user.email}`} <IoMdArrowDropdown />
              </button>
              <div className={show ? "drop__container show" : "drop__container"}>
                {user && !user.isAdmin && <Link to="/cart" className="cart">
                <FaCartShopping style={{display: "block", marginRight: "0.5rem", color: "#777"}}></FaCartShopping> Cart</Link>}
                {user && !user.isAdmin && <Link to="/orders">My Orders</Link>}
                {user && user.isAdmin && (
                  <Link to="/dashboard">Dashboard</Link>
                )}
                {user && user.isAdmin && (
                  <Link to="/new-products">Create product</Link>
                )}
                <button
                  type="button"
                  className="logout__btn btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="notifications__container">
          <button type="button" className="notifications__btn">
            <IoNotificationsCircle className="notifications__icon"
              style={{
                fontSize: "1.8rem",
                color: "#777",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%"
              }}
            />
            <span>0</span>
          </button>
        </div>
      </div>
    </Navbar>
  );
}

const Navbar = styled.nav`
  width: 100%;
  max-width: 1200px;
  height: 6rem;
  background: var(--yellow-color);
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  position: relative;

  .login {
    flex: 1;
    transition: all 0.5s ease-in-out;
  }

  .links__container {
    display: flex;
    align-items: center;
  }

  .drop__container {
    width: 12rem;
    height: 11rem;
    padding: 0.5rem 0;
    border: 1px solid #777;
    position: absolute;
    top: 5rem;
    z-index: 2;
    background: var(--yellow-color);
    text-align: center;
    border-radius: 0.3rem;
    opacity: 0;
    visibility: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  .show {
    opacity: 1;
    visibility: visible;
  }

  .drop__container a {
    margin-bottom: 1.5rem;
    letter-spacing: 0.1rem;
    padding: 0.3rem 0;
    transition: all 0.5s ease-in-out;
  }

  .drop__container a:hover {
    background: var(--red-color);
    color: #fff;
  }

  .user__container__btn {
    width: 12rem;
    height: 2rem;
    background: transparent;
    font-size: 1.1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: none;
    cursor: pointer;
    border-radius: 0.4rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition: all 0.5s ease-in-out;
  }

  .user__container__btn:hover {
    background: #777;
    color: #fff;
  }

  a.cart {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logout__btn {
    background: var(--red-color);
    letter-spacing: 0.1rem;
  }

  .logout__btn:hover {
    background: red;
  }

  .links {
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .notifications__btn {
    position: relative;
    width: 4rem;
    background: transparent;
    height: 2rem;
    border: none;
    cursor: pointer;
  }

  .notifications__btn span {
    font-size: 1rem;
    position: absolute;
    right: 0.5rem;
    bottom: 1rem;
    color: #fff;
    background: red;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .login__link {
    transition: all 0.5s ease-in-out;
  }

  .logo__name {
    transition: all 0.5s ease-in-out;
    text-shadow: 2px 2px 2px var(--grey-color2);
  }

  .login__link:hover,
  .logo__name:hover {
    letter-spacing: 0.15rem;
    color: red;
  }

  i.notifications__icon {
    transition: 0.5s ease-in-out;
  }

  i.notifications__icon:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 900px) {
    .navbar {
      padding: 0 0.5rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      height: 100%;
    }
    nav h1.logo__name {
      font-size: 0.85rem;
    }
  }
`;

export default Navigation;
