import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {

    fetch("http://BACKEND_PUBLIC_IP:5000/api/time")
      .then((res) => res.json())
      .then((data) => {
        setMsg(data.message);
      })
      .catch(() => {
        setMsg("Backend Connection Failed");
      });

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{msg}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
