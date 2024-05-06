import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";
import { PokeDataDetailContext } from './context/PokeDataDetailContext';

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
          <Main />
      </BrowserRouter >
      <Footer />
    </>
  )
};

export default App
