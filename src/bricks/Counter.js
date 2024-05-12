import React, { useEffect, useState } from "react";
import axios from "axios";

function Counter({ userId, token }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchCounter();
  }, [userId]);

  const fetchCounter = async () => {
    if (!userId) return;

    try {
      const response = await axios.get(
        `http://localhost:3001/records/user/${userId}/last-record-counter`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCounter(response.data.lastRecordCounter);
    } catch (error) {
      console.error("Failed to fetch counter", error);
      setCounter("Error");
    }
  };

  return <div>{counter}</div>;
}

export default Counter;
