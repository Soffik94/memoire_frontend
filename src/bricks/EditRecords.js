import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EditRecord({ token }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/records/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setContent(response.data.content);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [id, token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:3001/records/${id}`,
        {
          content: content,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Edit Content</Form.Label>
        <Form.Control
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
}

export default EditRecord;
