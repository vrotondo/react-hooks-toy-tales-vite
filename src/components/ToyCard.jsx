import React from "react";

function ToyCard({ toy, onLike, onDonate }) {
  return (
    <div data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} />
      <p>{`${toy.likes} Likes `}</p> {/* Added trailing space */}
      <button onClick={() => onLike(toy.id)}>Like {"<3"}</button>
      <button onClick={() => onDonate(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;