import React, { useState } from "react";

import axios from "axios";

import { Container, Button, Form, Row, Col } from "react-bootstrap";

const UserForm = ({ data }) => {
  const [input, setInput] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleInput = (identifier, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const url = "http://localhost:5173/users";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5173/users");
    const data = res.data;
  };

  return (
    <>
      <Container className="p-3 my-5">
        <Row className="justify-content-center">
          <Col md={6} className="border rounded-4 p-5">
            <h1 className="text-center mb-4">Register User</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Image Link"
                  onChange={(e) => handleInput("image", e)}
                  value={input.image}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={(e) => handleInput("name", e)}
                  value={input.name}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={(e) => handleInput("email", e)}
                  value={input.email}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Your Phone Number"
                  onChange={(e) => handleInput("phone", e)}
                  value={input.phone}
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Add Data
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserForm;
