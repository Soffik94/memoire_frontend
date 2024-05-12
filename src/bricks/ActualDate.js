import React from "react";

function ActualDate() {
  const todaysDate = new Date();
  const localDate = todaysDate.toLocaleDateString("cs-CZ");

  return <div>{localDate}</div>;
}

export default ActualDate;
