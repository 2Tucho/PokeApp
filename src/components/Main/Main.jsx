import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PokemonListContext } from "../../context/PokemonListContext";
import Home from "./Home";
import DetailView from "./DetailView"

const Main = () => {
  const [pokemonDataList, setPokemonDataList] = useState([]);

  return (
    <main className="main">
      <PokemonListContext.Provider value={{ pokemonDataList, setPokemonDataList }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
            <Route path={`/pokemon/:id`} element={<DetailView />} />
          </Routes>
      </PokemonListContext.Provider>
    </main>
  );
};

export default Main;
