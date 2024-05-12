import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import axios from "axios";

function AddRecord({ userId, token, onRecordAdded }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/records",
        { userId, content: inputValue },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Záznam byl úspěšně přidán");
      onRecordAdded(response.data);
      setInputValue("");
    } catch (error) {
      alert("Přidání záznamu se nezdařilo");
      console.error(
        "Chyba při přidávání záznamu:",
        error.response ? error.response.data : "Chyba serveru"
      );
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormControl
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="warning" onClick={handleSubmit}>
        Add record
      </Button>
    </Form>
  );
}

export default AddRecord;
