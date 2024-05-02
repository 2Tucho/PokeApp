import { useState, useContext } from 'react'
import { PokemonListContext } from '../../../context/PokemonListContext'
import Search from './Search'
import Card from './Card'
import PokemonList from './PokemonList'
/* import data from "./data"; // Datos de prueba
import Pokedata from './pokedata' // Datos de prueba */

function Home() {
    const [printPokemon, setPrintPokemon] = useState(""); //Quitar el data cuando pruebe con el fetch
    const {pokemonDataList} = useContext(PokemonListContext)

    return (
        <section>
            {pokemonDataList.length > 0? <Card printPokemon={printPokemon} /> : <></>}
            <Search setPrintPokemon={setPrintPokemon} />
            {pokemonDataList.length > 0? <PokemonList /> : <></>}
        </section>
    )
}

export default Home