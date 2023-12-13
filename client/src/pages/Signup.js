import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSignupMutation } from "../appApi";
import { Alert} from "react-bootstrap";

function Signup () {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName]=React.useState("");
  const [signup, {error, isLoading, isError}]=useSignupMutation();

  
    async function handleSignup(e) {
      e.preventDefault();
      try {
        await signup({ name, email, password });
        // Access the result if needed
        //console.log(result);
      } catch (error) {
        // Handle error if necessary
        console.error(error);
      }
    }

  return (
    <div style={{width: "100%"}}>
      <Div className="signup__container">
        <Row className="row">
          <Col md={6} className="login__form--container">
            <Form style={{ width: "100%" }} onSubmit={handleSignup}>
              <h1>Create your account</h1>
              {isError && <Alert variant="danger">{error.data}</Alert>}

              <Form.Group>
                <Form.Label className="label">Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  required
                  className="form"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="label">Email Address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  className="form"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="label">Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  required
                  className="form"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Button type="submit" className="btn" disabled={isLoading}>
                  SignUp
                </Button>
              </Form.Group>

              <p className="text-center">
                Already have an account? <Link to="/login" className="login">Login</Link>{" "}
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
  max-width: var(--max-width);
  margin: 0 auto;
  height: calc(100vh - 6rem);
  .row {
    width: 300px;
    max-width: 1200px;
    height: 29rem;
    margin: 0 auto;
    box-shadow: var(--box-shadow2);
    background: var(--grey-color1);
    padding: 0.5rem;
    border-radius: 0.3rem;
  }

  .login__form--container h1 {
    text-align: center;
    letter-spacing: 0.1rem;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }

  .form {
    display: block;
    width: 100%;
    padding: 0.5rem 0;
    border-radius: 0.3rem;
    border: 0.05rem solid #777;
    margin-bottom: 2rem;
  }

  .label {
    display: block;
    margin-bottom: 0.5rem;
    letter-spacing: 0.08rem;
    font-size: 1.1rem;
  }

  .btn {
    margin-bottom: 2rem;
    letter-spacing: 0.1rem;
  }

  p.text-center {
    text-align: center;
  }

  a.login {
    width: max-content;
    color: #fff;
    background: var(--blue-navy-color);
    margin: 0 auto;
    padding: 0.15rem 1rem;
    border-radius: 0.2rem;
    margin-top: 0.2rem;
    letter-spacing: 0.1rem;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    transition: all 0.5s ease-in-out;
  }

  a.login:hover {
    color: #777;
    background: var(--blue-light-color);
  }

  p.text-center {
    margin: -1rem 0;
  }
`;
export default Signup;

