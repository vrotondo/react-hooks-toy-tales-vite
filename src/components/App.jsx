import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Fetch toys from the server on component mount
  useEffect(() => {
    global.fetch("/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // Add a new toy to the state
  function handleAddToy(newToy) {
    setToys((prevToys) => [...prevToys, newToy]);
  }

  // Increment likes for a specific toy
  function handleLike(id) {
    global.fetch(`/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toys.find((toy) => toy.id === id).likes + 1,
      }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        setToys((prevToys) =>
          prevToys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
        );
      });
  }

  // Remove a toy from the state
  function handleDonate(id) {
    global.fetch(`/toys/${id}`, {
      method: "DELETE",
    }).then(() => {
      setToys((prevToys) => prevToys.filter((toy) => toy.id !== id));
    });
  }

  return (
    <>
      <Header />
      {showForm && <ToyForm onAddToy={handleAddToy} />}
      <div className="buttonContainer">
        <button onClick={() => setShowForm((prev) => !prev)}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onLike={handleLike} onDonate={handleDonate} />
    </>
  );
}

export default App;