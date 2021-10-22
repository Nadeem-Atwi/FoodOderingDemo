import React, { useRef, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, userStatus } = useAuth();
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const history = useHistory();

  async function HandeleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setloading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/menu");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setloading(false);
  }

  function passForgotState() {
    if (userStatus === null) {
      return (
        <div className="w-200 text-center mt-2">
          <Link to="forgot-password">forgot password</Link>
        </div>
      );
    } else {
      return <p></p>;
    }
  }

  return (
    <div className="flexbox-container">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">log in</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={HandeleSubmit}>
            <Form.Group id="email">
              <Form.Label>email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <button
              disabled={loading}
              type="submit"
              className="headerButtons w-100 "
            >
              Log in
            </button>
          </Form>
          {passForgotState}
          <div className="w-200 text-center mt-2">
            <Link to="forgot-password">forgot password</Link>
          </div>
        </Card.Body>
        <p className="w-200 text-center mt-2">
          need acount ? <Link to="/signup">Sign Up</Link>
        </p>
      </Card>
      {/* <div className="w-100 text-center mt-2">
        need acount ? <Link to="/signup">Sign Up</Link>
      </div> */}
    </div>
  );
}
