import { useContext } from "react";
import { PokemonListContext } from "../../../../context/PokemonListContext";
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const { pokemonDataList } = useContext(PokemonListContext)

  return (
    <section className="section">
      <h3>PokemonList</h3>
      <div>
        {pokemonDataList.map(poke => <figure className={`pokeCard-${poke.data.types[0].type.name} pokeList`}>
          <Link to={`/pokemon/${poke.data.id}`}><h3>{(poke.data.name).charAt(0).toUpperCase() + (poke.data.name).slice(1)}</h3></Link>
          <img src={poke.data.sprites.front_default} alt={poke.data.name} />
          <p>#{poke.data.id}</p>
        </figure>)}
      </div>
    </section>
  );
};

export default PokemonList;
