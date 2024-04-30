import { useState, useRef, useEffect } from "react";
import axios from 'axios'


const Search = ({setPokemonDataList, setPrintPokemon, pokemonDataList}) => {
  const [pokemonName, setPokemonName] = useState(null)
  
  const inputRef = useRef()

  useEffect(() => {
    async function fetchData () {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const json = res.data;
        console.log(json)
        setPrintPokemon(json)
        setPokemonDataList([...pokemonDataList, json]) //json = {...}
        console.log(pokemonDataList)
      } catch {
        console.log("ERROR: NOT FOUND")
      }
    }

    fetchData()
  }, [pokemonName])

  const handleClick = () => {
    setPokemonName((inputRef.current.value).toLowerCase())
    inputRef.current.value = ""
  }

  return (
    <section>
      <h1>Pokédex</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={handleClick}>Search</button>
    </section>
  );
};

export default Search;
