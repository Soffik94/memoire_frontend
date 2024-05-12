import React from "react";

function AppHeader() {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Memoire</h1>
    </header>
  );
}

const headerStyle = {
  padding: "20px",
  textAlign: "center",
  borderBottom: "2px solid #d3c0a5",
};

const titleStyle = {
  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
  fontSize: "150px",
  color: "#ffffff",
  textShadow: "1px 1px 2px #d3c0a5",
};

export default AppHeader;
