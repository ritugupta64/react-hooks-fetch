import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const [state, isState] = useState({results:[]});
  const [state, isState] = useState([])
  const baseUrl = "https://rickandmortyapi.com/api/character/";

  const fetchUrl = async () => {
    await fetch(baseUrl)
      .then((res) => res.json())
      // .then((data) => isState(data));
      .then((data) => isState(data.results))
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div className="App">
      <span>test{state.map((item) => item.id)}</span>
    </div>
  );
}

export default App;
