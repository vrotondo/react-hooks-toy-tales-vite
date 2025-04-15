import React from "react";

function ToyCard({ toy, onDeleteToy, onLikeToy }) {
  const { id, name, image, likes } = toy;

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes</p>
      <button className="like-btn" onClick={() => onLikeToy(id, likes)}>
        Like ❤️
      </button>
      <button className="del-btn" onClick={() => onDeleteToy(id)}>
        Donate 🗑️
      </button>
    </div>
  );
}

export default ToyCard;