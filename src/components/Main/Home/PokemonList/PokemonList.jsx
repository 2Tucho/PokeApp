import React from "react";

const PokemonList = ({ pokemonDataList }) => {
  return (
    <section className="section">
      {pokemonDataList.map(poke => <article>
        <h3>{(poke.name).charAt(0).toUpperCase() + (poke.name).slice(1)}</h3>
        <p>#{poke.id}</p>
        <img src={poke.sprites.front_default} alt={poke.name} />
      </article>)}
    </section>
  );
};

export default PokemonList;
