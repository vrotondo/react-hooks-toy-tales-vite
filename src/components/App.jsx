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

  // Delete a toy
  function handleDeleteToy(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then(() => {
      setToys((prevToys) => prevToys.filter((toy) => toy.id !== id));
    });
  }

  // Like a toy
  function handleLikeToy(id, currentLikes) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: currentLikes + 1 }),
    })
      .then((response) => response.json())
      .then((updatedToy) => {
        setToys((prevToys) =>
          prevToys.map((toy) => (toy.id === id ? updatedToy : toy))
        );
      });
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
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onLikeToy={handleLikeToy}
      />
    </div>
  );
}

export default App;