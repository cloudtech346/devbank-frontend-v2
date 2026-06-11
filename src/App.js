import React, { useState, useEffect } from 'react';

function App() {
  const [serverTime, setServerTime] = useState('Loading time from backend...');

  useEffect(() => {
    // CRITICAL STEP: Yahan niche diye gaye URL mein 54.234.240.169 ki jagah apna asli Backend Public IP daliye jo abhi humne Step 4 mein nikala tha.
    // Port 5000 lagana mat bhooliyega!
    fetch('http://54.234.240.169:5000/api/time') 
      .then(res => res.json())
      .then(data => setServerTime(data.time))
      .catch(err => {
        console.error("Error fetching time:", err);
        setServerTime("Error connecting to backend API");
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#282c34', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: 'white', textAlign: 'center' }}>
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <p>Hello, the time at the server is now {serverTime}</p>
      <a style={{ color: '#61dafb' }} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
    </div>
  );
}

export default App;
