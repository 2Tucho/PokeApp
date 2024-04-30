import { useState } from 'react'
import Search from './Search'
import Card from './Card'
import PokemonList from './PokemonList'
import data from "./data"; // Datos de prueba
import Pokedata from './pokedata' // Datos de prueba

function Home() {
    const [pokemonDataList, setPokemonDataList] = useState([]) //Quitar el data cuando pruebe con el fetch
    const [printPokemon, setPrintPokemon] = useState("") //Quitar el data cuando pruebe con el fetch

    console.log(pokemonDataList)
    
    return (
        <section>
            <h1>Home</h1>
            <Search setPokemonDataList={setPokemonDataList} setPrintPokemon={setPrintPokemon} pokemonDataList={pokemonDataList}/>
            {pokemonDataList.length > 0? <Card printPokemon={printPokemon}/> : <></>}
            <PokemonList pokemonDataList={pokemonDataList}/>
        </section>
    )
}

export default Home