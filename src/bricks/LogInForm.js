import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function LogInForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/users/register",
        {
          email,
          password,
        }
      );
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });
      if (response.data) {
        console.log("User logged in:", response.data);
        onLoginSuccess(response.data.userId, response.data.token);
      }
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : "No response"
      );
      alert("Login failed!");
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ color: "white" }}>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{ color: "white" }}>Password</Form.Label>
        <Form.Control
          type="Password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <Button variant="info" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="info" onClick={handleRegister}>
          Register
        </Button>
      </div>
    </Form>
  );
}

export default LogInForm;
