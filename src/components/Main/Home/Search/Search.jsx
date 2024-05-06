import { useState, useRef, useEffect, useContext } from "react";
import axios from 'axios';
import { debounce } from "lodash"; // Librería importada para usar debounce
import { PokemonListContext } from "../../../../context/PokemonListContext";

const Search = ({ setPrintPokemon }) => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonExists, setPokemonExists] = useState("")
  const inputRef = useRef();
  const { pokemonDataList, setPokemonDataList } = useContext(PokemonListContext)

  useEffect(() => { // SI LE QUITO ESTO FUNCIONA BIEN PERO ME HACE PETICIÓN A LA PRIMERA, Y NO QUIERO
    if (pokemonName == false) {
      null
    } else if (pokemonDataList.some(e => e.name == pokemonName)) {
      console.log("Ese poke ya existe")
      inputRef.current.value = "";
      setPokemonExists("El Pokémon que has buscado ya está en la lista. Prueba con otro.")
    } else {
       function fetchData() {
        try {
          const res = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
          
          res.then((response) => {
            const json = response.data;
            setPrintPokemon(json);
            setPokemonDataList([{
              key: json.id,
              data: json
            }, ...pokemonDataList]); //json = {...}
            console.log(pokemonDataList);
            inputRef.current.value = "";
          })
          /* console.log(json);
          console.log(pokemonDataList.some(e => e.name == pokemonName)) */

        } catch {
          console.log("ERROR: NOT FOUND")
        }
      };
      fetchData();
    }
  }, [pokemonName])

  function changePokeName() {
    setPokemonName((inputRef.current.value).toLowerCase())
    console.log(pokemonName)
  };

  const debouncedOnChange = debounce(changePokeName, 1500) // Estructura para usar debounce: función que llama y el tiempo que tarda en hacerlo

  return (
    <section>
      <input type="text" onChange={debouncedOnChange} ref={inputRef} placeholder="Search Pokémon by name or number of the Pokédex!" />
      <button onClick={changePokeName}>Search</button>
      <p>{pokemonExists}</p>
    </section>
  );
};

export default Search;
