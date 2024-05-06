import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonListContext } from "../../../context/PokemonListContext";
import { Link } from 'react-router-dom';
import axios from 'axios';

const DetailView = () => {
  const [pokeInfo, setPokeInfo] = useState("");
  const [pokeDataDetail, setPokeDataDetail] = useState(null); // La info que voy a utilizar para la vista detalle(PokeDataDetailContext); //La info que voy a utilizar para la vista detalle
  const { pokemonDataList } = useContext(PokemonListContext);
  const pokeParams = useParams();

  useEffect(() => {
    console.log(pokeParams)
    let result = pokemonDataList.find(e => e.key == pokeParams.id); // Busco pokeParams.id porque el parámetro lo guarada en un objeto cuya propiedad es id y su valor es el número del pokémon que estoy buscando
    setPokeDataDetail(result.data);
    
    console.log(pokeDataDetail)
  }, [pokeParams.id]) // Los useEffect los hace TODOS la primera vez

  useEffect(() => {
    fetchPokeInfo()
  }, [pokeDataDetail]);

  async function fetchPokeInfo() {
    try {
      const res = await axios.get(pokeDataDetail.species.url); //Busco los datos de la descripción
      const json = res.data;
      setPokeInfo(json);
      //console.log(json);
    }
    catch {
      console.log("ERROR");
    }
  }

  function refreshData() {
    setPokeDataDetail("");
    console.log("Se borra pokeDataDetail");
    console.log(pokeDataDetail);
  };

  return <>
    {pokeDataDetail ? <article>
      <div className="name-num" >
        <Link to='/' onClick={refreshData}><h1><i className="arrow left"></i></h1></Link>
        <h1>{(pokeDataDetail.name).charAt(0).toUpperCase() + (pokeDataDetail.name).slice(1)}</h1>
        <p>#{pokeDataDetail.id}</p>
      </div>
      <img src={pokeDataDetail.sprites.front_default} alt={pokeDataDetail.name} />
      <div className="type">
        <p className={`type-${pokeDataDetail.types[0].type.name}`}>
          <strong>
            {(pokeDataDetail.types[0].type.name).charAt(0).toUpperCase() + (pokeDataDetail.types[0].type.name).slice(1)}
          </strong>
        </p>
        <p className={pokeDataDetail.types[1] == undefined? null : (`type-${pokeDataDetail.types[1].type.name}`)}> {{/* Solo necesito comprobar si existe types[0] porque el resto de propiedades van a ser también undefined. Solo compruebo el primero que dé undefined porque sino salta error (no puede encontrar undefined dentro de undefined) */}}
        <strong>
          {pokeDataDetail.types[1] == undefined? null : ((pokeDataDetail.types[1].type.name).charAt(0).toUpperCase() + (pokeDataDetail.types[1].type.name).slice(1))}
        </strong>
      </p>
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
    </article> : <></>}
  </>

};

export default DetailView;
