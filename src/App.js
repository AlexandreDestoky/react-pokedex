import "./App.css";
import Cardlist from "./Components/Cardlist/Cardlist";
import { useState, useEffect } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState(["un","deux"]);
  useEffect(async () => {
    const fetchPokemonBase = () => {
      let listPoke = [];
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=4")
        .then(reponse => reponse.json())
        .then(allPoke => {
          allPoke.results.forEach(pokemon => {
            listPoke.push(fetchPokemonComplet(pokemon));
            // fetchPokemonComplet(pokemon);
          });
        });
      console.log(listPoke);
      setPokemonList(listPoke);
    };
    fetchPokemonBase();

    function fetchPokemonComplet(pokemon) {
      let url = pokemon.url;
      return fetch(url)
        .then(reponse => reponse.json())
    }
  }, []);

  return (
    <div className="App">
      <Cardlist />
      {pokemonList.map(el => (<p>{el}</p>))}
    </div>
  );
}

export default App;
