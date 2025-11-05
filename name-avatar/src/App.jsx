import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  const handleSave = () => {
    setSavedName(name);
  };

  const handleClear = () => {
    setName("");
    setSavedName("");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="circle">T</div>
        <h2>Your Name</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>You typed: {savedName || "—"}</p>
        <div className="btn-group">
          <button className="save" onClick={handleSave}>
            SAVE
          </button>
          <button className="clear" onClick={handleClear}>
            CLEAR ALL
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
