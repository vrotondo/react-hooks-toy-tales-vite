import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddToy(formData);
    setFormData({ name: "", image: "" }); // Reset form
  }

  return (
    <form className="add-toy-form" onSubmit={handleSubmit}>
      <h3>Create a toy!</h3>
      <input
        type="text"
        name="name"
        placeholder="Enter a toy's name..."
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Enter a toy's image URL..."
        value={formData.image}
        onChange={handleChange}
      />
      <button type="submit">Add Toy</button>
    </form>
  );
}

export default ToyForm;