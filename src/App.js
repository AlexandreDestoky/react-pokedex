import "./App.css";
import Cardlist from "./Components/Cardlist/Cardlist";
import SearchBar from "./Components/SearchBar/SearchBar";
import { useState, useEffect } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]); //Liste des pokemons venant de l'API;
  const [searchWord, setsearchWord] = useState("");
  const pokemonListeRecherche = e => {
    setsearchWord((e.target.value).toLowerCase());
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
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
      <h1>Pokedex React</h1>
      <SearchBar placeholder="Cherchez un pokemon" fctChange={pokemonListeRecherche} />
      <Cardlist pokemons={pokemonList.filter(pokemon => pokemon.name.includes(searchWord)).sort((a, b) => a.id - b.id)} />
    </div>
  );
}

export default App;
