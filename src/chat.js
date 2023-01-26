import React, { useState, useEffect } from "react";
import axios from "axios";

function MyComponent() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/get");
      setResponseData(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {responseData ? (
        <p>{responseData}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;