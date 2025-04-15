import React, { useState, useEffect } from "react";
import ToyContainer from "./components/ToyContainer";
import Header from "./components/Header";

function App() {
  const [toys, setToys] = useState([]);

  // Fetch toys on page load
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <Header />
      <ToyContainer toys={toys} />
    </div>
  );
}

export default App;