import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newToy = { id: Date.now().toString(), name, image, likes: 0 }; // Generate a unique ID
    onAddToy(newToy); // Call the function passed via props to add the toy
    setName(""); // Reset the form fields
    setImage("");
  }

  return (
    <form className="add-toy-form" onSubmit={handleSubmit}>
      <h3>Create a toy!</h3>
      <input
        className="input-text"
        name="name"
        placeholder="Enter a toy's name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        className="input-text"
        name="image"
        placeholder="Enter a toy's image URL..."
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <input className="submit" type="submit" value="Create New Toy" />
    </form>
  );
}

export default ToyForm;