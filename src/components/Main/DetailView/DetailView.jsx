import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonListContext } from "../../../context/PokemonListContext";
import { Link } from 'react-router-dom'
import axios from 'axios';

const DetailView = () => {
  const [pokeInfo, setPokeInfo] = useState("");
  const { pokemonDataList } = useContext(PokemonListContext);
  const { id } = useParams(); //Recoge el parámetro :id de la ruta pokemon/:id

  const pokeDataDetail = pokemonDataList.find(e => e.key = id).data
  console.log(pokeDataDetail)

  useEffect(() => {
    async function fetchPokeInfo() {
      try {
        const res = await axios.get(pokeDataDetail.species.url);
        const json = res.data;
        setPokeInfo(json)
        console.log(json)
      }
      catch {
        console.log("ERROR")
      }
    }
    fetchPokeInfo()
  }, [])


  return <article>
    <div className="name-num" >
      <Link to='/'><h1><i class="arrow left"></i></h1></Link>
      <h1>{(pokeDataDetail.name).charAt(0).toUpperCase() + (pokeDataDetail.name).slice(1)}</h1>
      <p>#{pokeDataDetail.id}</p>
    </div>
    <img src={pokeDataDetail.sprites.front_default} alt={pokeDataDetail.name} />
    <div className="type">
      <p className={`type-${pokeDataDetail.types[0].type.name}`}>
        <strong>
          {(pokeDataDetail.types[0].type.name).charAt(0).toUpperCase() + (pokeDataDetail.types[0].type.name).slice(1)}
        </strong></p>
    </div>
    <div className="about">
      <div>
        <p>{((pokeDataDetail.height) * 0.1).toFixed(1)} m</p>
        <p className="about-titles">Height</p>
      </div>
      <div>
        <p>{((pokeDataDetail.weight) * 0.1).toFixed(1)} kg</p>
        <p className="about-titles">Weight</p>
      </div>
      <div>
        <p>{(pokeDataDetail.abilities[0].ability.name).charAt(0).toUpperCase() + (pokeDataDetail.abilities[0].ability.name).slice(1)}</p>
        <p className="about-titles">Abilities</p>
      </div>
    </div>
    <div className="description">
      <h3>Description</h3>
      {pokeInfo ? <p>{(pokeInfo.flavor_text_entries[0].flavor_text).replace("\f", " ")}</p> : null}
    </div>
    <section className="stats">
      <h3>Base stats</h3>
      <div>
        <p>HP</p>
        <p>{pokeDataDetail.stats[0].base_stat}</p>
        <progress className={`bar-${pokeDataDetail.types[0].type.name}`} max="250" value={pokeDataDetail.stats[0].base_stat}></progress>
      </div>
      <div>
        <p>ATK</p>
        <p>{pokeDataDetail.stats[1].base_stat}</p>
        <progress className={`bar-${pokeDataDetail.types[0].type.name}`} max="250" value={pokeDataDetail.stats[1].base_stat}></progress>
      </div>
      <div>
        <p>DEF</p>
        <p>{pokeDataDetail.stats[2].base_stat}</p>
        <progress className={`bar-${pokeDataDetail.types[0].type.name}`} max="250" value={pokeDataDetail.stats[2].base_stat}></progress>
      </div>
      <div>
        <p>SATK</p>
        <p>{pokeDataDetail.stats[3].base_stat}</p>
        <progress className={`bar-${pokeDataDetail.types[0].type.name}`} max="250" value={pokeDataDetail.stats[3].base_stat}></progress>
      </div>
      <div>
        <p>SDEF</p>
        <p>{pokeDataDetail.stats[4].base_stat}</p>
        <progress className={`bar-${pokeDataDetail.types[0].type.name}`} max="250" value={pokeDataDetail.stats[4].base_stat}></progress>
      </div>
      <div>
        <p>SPD</p>
        <p>{pokeDataDetail.stats[5].base_stat}</p>
        <progress className={`bar-${pokeDataDetail.types[0].type.name}`} max="250" value={pokeDataDetail.stats[5].base_stat}></progress>
      </div>
    </section>
  </article>;
};

export default DetailView;
