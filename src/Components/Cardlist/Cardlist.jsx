import React from 'react'
import "./Cardlist.css"
import Card from '../Card/Card';

export default function Cardlist(props) {
  return (
    <div className="cardlist">
      {props.pokemons.map(pokemon => <Card key={pokemon.id} pokemon={pokemon}/>)}
    </div>
  )
}
