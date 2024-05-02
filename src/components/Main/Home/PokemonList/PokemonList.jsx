import { useContext } from "react";
import { PokemonListContext } from "../../../../context/PokemonListContext";
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const { pokemonDataList } = useContext(PokemonListContext)

  return (
    <section className="section">
      <h3>PokemonList</h3>
      <div>
        {pokemonDataList.map(poke => <figure className={`pokeCard-${poke.types[0].type.name} pokeList`}>
          <Link to={`/pokemon/${poke.id}`}><h3>{(poke.name).charAt(0).toUpperCase() + (poke.name).slice(1)}</h3></Link>
          <img src={poke.sprites.front_default} alt={poke.name} />
          <p>#{poke.id}</p>
        </figure>)}
      </div>
    </section>
  );
};

export default PokemonList;
