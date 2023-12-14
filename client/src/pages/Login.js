import React from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { useLoginMutation } from '../appApi';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail]=React.useState("");
  const[password, setPassword]=React.useState("");
  const [login, {error, isError, isLoading}]=useLoginMutation();
const navigate=useNavigate();
  
async function handleLogin(e) {
  e.preventDefault();
  try {
    const response = await login({email, password});
    console.log("Login response:", response);
    navigate("/")
  } catch (error) {
    console.log("Login error:", error);
  }
}




  return (
    <div>
      <Div className="login__container">
      <Row className="row">
        <Col md={6} className="login__form--container">
          <Form style={{ width: "100%" }} onSubmit={handleLogin}>
            <h1>Login to your account</h1>
            {isError && (<Alert variant="danger">{error.data}</Alert>)}
            <Form.Group>
              <Form.Label className="label">Email Address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email" required className="form"
                 value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="label">Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" required className="form"
                value={password} onChange={(e)=> setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Button type="submit" className="btn">Login</Button>
            </Form.Group>

            <p className="pt-3 text-center">
              Don't have an account? <Link to="/signup" className="create__account">Create account</Link>{" "}
            </p>
          </Form>
        </Col>
      </Row>
    </Div>
    </div>
  );
}

const Div = styled(Container)`
  width: 100%;
  height: calc(100vh - 6rem);
  margin: 0 auto;
  max-width: var(--max-width);
  .row {
    width: 300px;
    height: 25rem;
    margin: 0 auto;
    box-shadow: var(--box-shadow2);
    background: var(--grey-color1);
    padding: 1rem;
    border-radius: 0.3rem;
  }

  .login__form--container h1 {
    text-align: center;
    letter-spacing: 0.1rem;
    margin-bottom: 1.8rem;
    font-size: 1.5rem;
  }

  .form {
    display: block;
    width: 100%;
    padding: 0.5rem 0;
    border-radius: 0.3rem;
    border: 0.08rem solid #777;
    margin-bottom: 1rem;
  }

  .label {
    display: block;
    margin-bottom: 0.5rem;
    letter-spacing: 0.08rem;
  }

  .btn {
    margin-bottom: 2rem;
    letter-spacing: 0.1rem;
  }

  p.text-center {
    text-align: center;
  }

  a.create__account {
    width: max-content;
    color: #fff;
    background: var(--blue-navy-color);
    margin: 0 auto;
    padding: 0.15rem 1rem;
    border-radius: 1rem;
    margin-top: 0.25rem;
    letter-spacing: 0.1rem;
    padding: 0.5rem 1rem;
    transition: 0.5s ease-in-out;
  }

  .create__account:hover {
    color: #777;
    background: var(--blue-light-color);
  }
`;
export default Login;


