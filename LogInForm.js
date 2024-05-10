import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LogInForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div style={{ display: "flex", gap: "50px", marginRight: "0px" }}>
        <Button variant="warning" type="login">
          Login
        </Button>
        <Button variant="warning" type="register">
          Resgister
        </Button>
      </div>
    </Form>
  );
}

export default LogInForm;
