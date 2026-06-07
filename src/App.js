import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/testAPI")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setMessage(data);
      })
      .catch((err) => {
        console.error(err);
        setMessage("API Error");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>DevBank Frontend V2</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;