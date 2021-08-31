import "./App.css";
import Cardlist from "./Components/Cardlist/Cardlist";
import { useState, useEffect } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=4")
      .then(reponse => reponse.json())
      .then(allPoke => allPoke.results.forEach(el => fetchAllPoke(el.url)));

    function fetchAllPoke(pokemons) {
      fetch(pokemons)
        .then(response => response.json())
        .then(data => setPokemonList(pokemonList => [...pokemonList, data]));
    }
  }, []);

  return (
    <div className="App">
      <Cardlist pokemons={pokemonList} />
    </div>
  );
}

export default App;
