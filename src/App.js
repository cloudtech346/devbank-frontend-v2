import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://13.221.131.115:5000/testAPI")
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
      <h1>HELLO V4</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
