import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { mdiDelete } from "@mdi/js";
import Icon from "@mdi/react";
import { useNavigate } from "react-router-dom";

function TableOfRecords({ userId, token, records, setRecords, isAdmin }) {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const url = isAdmin
          ? `http://localhost:3001/records/`
          : `http://localhost:3001/records/user/${userId}/records`;
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRecords(response.data);
      } catch (error) {
        console.error("Failed to fetch records", error);
      }
    };

    fetchRecords();
  }, [userId, token, records.length, isAdmin]);

  const handleDelete = async (recordId) => {
    try {
      await axios.delete(`http://localhost:3001/records/${recordId}`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { userId: userId },
      });
      const updatedRecords = records.filter((record) => record.id !== recordId);
      setRecords(updatedRecords);
      alert("Záznam byl úspěšně smazán.");
    } catch (error) {
      console.error("Nepodařilo se smazat záznam", error);
      alert(
        "Nepodařilo se smazat záznam: " +
          (error.response ? error.response.data.message : "Chyba serveru")
      );
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Obsah</th>
          <th>Datum</th>
          <th>Akce</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={record.id}>
            <td>{index + 1}</td>
            <td>{record.content}</td>
            <td>{record.date}</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(record.id)}>
                <Icon path={mdiDelete} size={1} />
              </Button>{" "}
              <Button
                type="button"
                variant="secondary"
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`/edit-record/${record.id}`);
                }}
              >
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableOfRecords;
