import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy }) {
  return (
    <div className="toy-container">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} />
      ))}
    </div>
  );
}

export default ToyContainer;