import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleSave = () => {
    alert(`Saved: ${name}`);
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="avatar">{name ? name[0].toUpperCase() : "?"}</div>
        <h2>Your Name</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>You typed: {name || "—"}</p>

        <div className="btn-container">
          <button className="save-btn" onClick={handleSave}>SAVE</button>
          <button className="clear-btn" onClick={handleClear}>CLEAR ALL</button>
        </div>
      </div>
    </div>
  );
}

export default App;
