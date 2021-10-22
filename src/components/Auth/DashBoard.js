import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { useHistory } from "react-router";

export default function DashBoard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const histroy = useHistory();

  async function handellogout() {
    setError("");
    try {
      await logout();
      histroy.push("/login");
    } catch {
      setError("failed to logout");
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong className="center">email: {currentUser.email}</strong>

          <div className="center">
            <button className="headerButtons">
              <Link className="links" to="/history">
                most recent purchase
              </Link>
            </button>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handellogout}>
          logout
        </Button>
        <div className="w-200 text-center mt-2">
          <Link to="forgot-password">reset password</Link>
        </div>
      </div>
    </>
  );
}
