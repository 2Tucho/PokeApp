import React from "react";
import { Link } from 'react-router-dom';

const Card = ({printPokemon}) => {

  return ( //Ternario para que al volver de la vista detalle no me de error
    printPokemon? <article className={`pokeCard-${printPokemon.types[0].type.name}`}>
    <p>#{printPokemon.id}</p>
    <img src={printPokemon.sprites.front_default} alt={printPokemon.name} />
    <Link to={`/pokemon/${printPokemon.id}`}><h3>{(printPokemon.name).charAt(0).toUpperCase() + (printPokemon.name).slice(1)}</h3></Link>
  </article>
  : null
  );
};

export default Card;
