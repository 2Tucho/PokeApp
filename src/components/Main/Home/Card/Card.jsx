import React from "react";

const Card = ({printPokemon}) => {
  console.log(printPokemon.types[0].type.name)
  return (
    <article className={`pokeCard-${printPokemon.types[0].type.name}`}>
      <p>#{printPokemon.id}</p>
      <img src={printPokemon.sprites.front_default} alt={printPokemon.name} />
      <h3>{(printPokemon.name).charAt(0).toUpperCase() + (printPokemon.name).slice(1)}</h3>
    </article>
  );
};

export default Card;
