import React, { useRef, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useAuth } from "./context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const history = useHistory();

  async function HandeleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("passwords dont match");
    }
    try {
      setError("");
      setloading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/menu");
    } catch (error) {
      setError(error.message);
    }
    setloading(false);
  }

  return (
    <div className="flexbox-container">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">sign up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={HandeleSubmit}>
            <Form.Group id="email">
              <Form.Label>email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm" className="mb-4">
              <Form.Label>password confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <button
              disabled={loading}
              type="submit"
              className="headerButtons w-100 "
            >
              sign up
            </button>

            <p>
              try this as demo :
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://tempmail.dev/";
                }}
              >
                tempmail.dev
              </button>
            </p>
          </Form>
        </Card.Body>
        <p className="w-200 text-center mt-2">
          have an account ? <Link to="/login">log in</Link>
        </p>
      </Card>
      {/* <div className="w-100 text-center mt-2">
        have an acount ?<Link to="/login">Login</Link>
      </div> */}
    </div>
  );
}
