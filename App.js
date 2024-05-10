import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LogInForm from "./bricks/LogInForm";
import TableOfRecords from "./bricks/TableOfRecords";
import ActualDate from "./bricks/ActualDate";
import Counter from "./bricks/Counter";
import AppHeader from "./bricks/AppHeader";

function App() {
  return (
    <div className="App" style={componentStyle()}>
      <header className="App-header" style={{ gap: "90px" }}>
        <AppHeader />
        <LogInForm />
        <ActualDate />
        <TableOfRecords />
        <Counter />
      </header>
    </div>
  );
}

function componentStyle() {
  return {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: "#187bcd",
  };
}
export default App;
