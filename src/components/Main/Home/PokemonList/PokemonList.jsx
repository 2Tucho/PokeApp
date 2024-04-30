import React from "react";

const PokemonList = ({pokemonDataList}) => {
  return (
    <section>
      {pokemonDataList.map(poke => <article><h3>{poke.name}</h3>
      <p>#{poke.id}</p>
      <img src={poke.sprites.front_default} alt={poke.name} /></article>)}
    </section>
  );
};

export default PokemonList;
