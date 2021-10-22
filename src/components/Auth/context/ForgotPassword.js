import React, { useRef, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetpassword, currentUser, userStatus } = useAuth();
  const [error, setError] = useState("");
  const [Message, setMessage] = useState("");

  const [loading, setloading] = useState(false);

  async function HandeleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setloading(true);
      await resetpassword(emailRef.current.value);
      setMessage("check your inbox for more info");
    } catch {
      setError("failed to reset password");
    }
    setloading(false);
  }

  return (
    <div className="flexbox-container">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">password reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={HandeleSubmit}>
            {!userStatus && <p>{currentUser.email}</p>}
            <Form.Group id="email">
              <Form.Label>email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <button
              disabled={loading}
              type="submit"
              className="headerButtons w-100 "
            >
              reset password
            </button>
          </Form>
          <div className="w-200 text-center mt-2">
            <Link to="login">login</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
