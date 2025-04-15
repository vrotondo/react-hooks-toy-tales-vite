import React, { useState, useEffect } from "react";
import ToyContainer from "./components/ToyContainer";
import ToyForm from "./components/ToyForm";
import Header from "./components/Header";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Fetch toys on page load
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);

  // Add a new toy
  function handleAddToy(newToy) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newToy, likes: 0 }),
    })
      .then((response) => response.json())
      .then((createdToy) => setToys((prevToys) => [...prevToys, createdToy]));
  }

  return (
    <div>
      <Header />
      {showForm && <ToyForm onAddToy={handleAddToy} />}
      <div className="buttonContainer">
        <button onClick={() => setShowForm((prev) => !prev)}>
          {showForm ? "Close Form" : "Add a Toy"}
        </button>
      </div>
      <ToyContainer toys={toys} />
    </div>
  );
}

export default App;