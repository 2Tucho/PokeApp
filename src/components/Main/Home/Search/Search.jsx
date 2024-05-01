import { useState, useRef, useEffect } from "react";
import axios from 'axios'
import { debounce } from "lodash"; // Librería importada para usar debounce


const Search = ({ setPokemonDataList, setPrintPokemon, pokemonDataList }) => {
  const [pokemonName, setPokemonName] = useState(null);
  const inputRef = useRef();

  useEffect(() => { // SI LE QUITO ESTO FUNCIONA BIEN PERO ME HACE PETICIÓN A LA PRIMERA, Y NO QUIERO
    if(pokemonName) {
      async function fetchData() {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
          const json = res.data;
          console.log(json);
          setPrintPokemon(json);
          setPokemonDataList([json, ...pokemonDataList]); //json = {...}
          console.log(pokemonDataList);
          inputRef.current.value = "";
        } catch {
          console.log("ERROR: NOT FOUND")
        }
      };
  
      fetchData();
    } else null
  }, [pokemonName])

  function changePokeName() {
    setPokemonName((inputRef.current.value).toLowerCase())
    console.log(pokemonName)
  };

  const debouncedOnChange = debounce(changePokeName, 1500) // Estructura para usar debounce: función que llama y el tiempo que tarda en hacerlo

  return (
    <section>
      <input type="text" onChange={debouncedOnChange} ref={inputRef} />
      <button onClick={changePokeName}>Search</button>
    </section>
  );
};

export default Search;
