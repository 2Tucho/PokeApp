import React from "react";

const PokemonList = ({ pokemonDataList }) => {
  return (
    <section className="section">
      <h3>PokemonList</h3>
      <div>
        {pokemonDataList.map(poke => <figure className={`pokeCard-${poke.types[0].type.name} pokeList`}>
          <h3>{(poke.name).charAt(0).toUpperCase() + (poke.name).slice(1)}</h3>
          <img src={poke.sprites.front_default} alt={poke.name} />
          <p>#{poke.id}</p>
        </figure>)}
      </div>
    </section>
  );
};

export default PokemonList;
