import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonListContext } from "../../../context/PokemonListContext";
import axios from 'axios';

const DetailView = () => {
  const [ pokeInfo, setPokeInfo ] = useState("")
  const { pokemonDataList } = useContext(PokemonListContext)
  const { id } = useParams() //Recoge el parámetro :id de la ruta pokemon/:id

  const pokeDataDetail = pokemonDataList.find(e => e.id = id)
  console.log(pokeDataDetail)

  useEffect(() => {
    async function fetchPokeInfo() {
      try {
        const res = await axios.get(pokeDataDetail.species.url);
        const json = res.data;
        setPokeInfo(json)
        console.log(json);
      }
      catch {
        console.log("ERROR")
      }
    }
    fetchPokeInfo()
  }, [])
  

  return <article>
    <h1>{(pokeDataDetail.name).charAt(0).toUpperCase() + (pokeDataDetail.name).slice(1)}</h1>
    <p>{pokeDataDetail.id}</p>
    <img src={pokeDataDetail.sprites.front_default} alt={pokeDataDetail.name} />
    <p>{(pokeDataDetail.types[0].type.name).charAt(0).toUpperCase() + (pokeDataDetail.types[0].type.name).slice(1)}</p>
    <p>{((pokeDataDetail.height)*0.1).toFixed(1)} m</p>
    <p>{((pokeDataDetail.weight)*0.1).toFixed(1)} kg</p>
    <p>{(pokeDataDetail.abilities[0].ability.name).charAt(0).toUpperCase() + (pokeDataDetail.abilities[0].ability.name).slice(1)}</p>
    <p>Description</p>
    {pokeInfo? <p>{pokeInfo.flavor_text_entries[2].flavor_text}</p> : null}
    <p>Base stats</p>
    <p>{pokeDataDetail.stats[0].stat.name}: {pokeDataDetail.stats[0].base_stat}</p>
    <p>{pokeDataDetail.stats[1].stat.name}: {pokeDataDetail.stats[1].base_stat}</p>
    <p>{pokeDataDetail.stats[2].stat.name}: {pokeDataDetail.stats[2].base_stat}</p>
    <p>{pokeDataDetail.stats[3].stat.name}: {pokeDataDetail.stats[3].base_stat}</p>
    <p>{pokeDataDetail.stats[4].stat.name}: {pokeDataDetail.stats[4].base_stat}</p>
    <p>{pokeDataDetail.stats[5].stat.name}: {pokeDataDetail.stats[5].base_stat}</p>
  </article>;
};

export default DetailView;
