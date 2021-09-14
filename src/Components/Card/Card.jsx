import React from "react";
import "./Card.css";

export default function Card(props) {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className={"card-pokemon " + props.pokemon.types[0].type.name}>
      <span className="numero">#{props.pokemon.id}</span>
      <h2>{props.pokemon.name.toUpperCase()}</h2>
      <p>
        Type :{" "}
        {props.pokemon.types
          .map(el => capitalize(el.type.name))
          .join(", ")}
      </p>
      <img
        src={props.pokemon.sprites.other.dream_world.front_default}
        alt={props.pokemon.name}
        className="img-pokemon"
      />
      {/* {console.log(props.pokemon.sprites)} */}
    </div>
  );
}
