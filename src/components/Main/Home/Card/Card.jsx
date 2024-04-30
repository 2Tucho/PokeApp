import React from "react";

const Card = ({printPokemon}) => {
  return (
    <section>
      <h3>{(printPokemon.name).charAt(0).toUpperCase() + (printPokemon.name).slice(1)}</h3>
      <p>#{printPokemon.id}</p>
      <img src={printPokemon.sprites.front_default} alt={printPokemon.name} />
    </section>
  );
};

export default Card;
