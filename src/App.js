import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import LogInForm from "./bricks/LogInForm";
import TableOfRecords from "./bricks/TableOfRecords";
import ActualDate from "./bricks/ActualDate";
import Counter from "./bricks/Counter";
import AppHeader from "./bricks/AppHeader";
import AddRecord from "./bricks/AddRecord";
import LoginHandler from "./LoginHandler";
import EditRecord from "./bricks/EditRecords";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ userId: null, token: null });
  const [records, setRecords] = useState([]);

  const handleLoginSuccess = (userId, token) => {
    setIsLoggedIn(true);
    setUser({ userId, token });
  };

  const handleRecordAdded = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  return (
    <Router>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-around",
        }}
      >
        <AppHeader />
        <LoginHandler isLoggedIn={isLoggedIn} user={user} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route
            path="/login"
            element={<LogInForm onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <>
                  <ActualDate />
                  <AddRecord
                    userId={user.userId}
                    token={user.token}
                    onRecordAdded={handleRecordAdded}
                  />
                  <TableOfRecords
                    userId={user.userId}
                    token={user.token}
                    records={records}
                    setRecords={setRecords}
                  />
                  <Counter userId={user.userId} token={user.token} />
                </>
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />

          <Route
            path="/edit-record/:id"
            element={<EditRecord token={user.token} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
