import React from "react";

function ToyCard({ toy, onDeleteToy }) {
  const { id, name, image, likes } = toy;

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes</p>
      <button className="like-btn">Like ❤️</button>
      <button className="del-btn" onClick={() => onDeleteToy(id)}>
        Donate 🗑️
      </button>
    </div>
  );
}

export default ToyCard;