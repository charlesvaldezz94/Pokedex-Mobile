import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { DropDown, PokemonCard } from "./components";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectPokemon, setSelectPokemon] = useState("bulbasaur");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    async function getAllPokemon() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
        setPokemonList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getAllPokemon();
  }, []);

  useEffect(() => {
    async function getSelectedPokemon() {
      if (selectPokemon) {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${selectPokemon}`
          );

          setPokemonDetails(response.data);

        } catch (error) {
          console.error(error);
        }
      }
    }

    getSelectedPokemon()
  }, [selectPokemon]);


  function handleNextPokemon(){
    const nextIndex = currentIndex + 1
    if (nextIndex < pokemonList.length) {
      setCurrentIndex(nextIndex);
      setSelectPokemon(pokemonList[nextIndex].name);
    }
    else {
      alert('This is the end of the dex')
    }
  }

  function handlePreviousPokemon() {
    const previousIndex = currentIndex - 1
    if (previousIndex >= 0 ) {
      setCurrentIndex(previousIndex);
      setSelectPokemon(pokemonList[previousIndex].name)
    }
    else {
      alert('This is the start of the dex')
    }
  }

  return (
    <div className="AppContainer">
      <DropDown pokemonList={pokemonList} setSelectPokemon={setSelectPokemon} setCurrentIndex={setCurrentIndex} />
      <PokemonCard pokemonDetails={pokemonDetails} />
      <div className="btns">
        <span>
          <button id='backBtn' onClick={handlePreviousPokemon}>  Previous </button>
          <button id='nextBtn' onClick={handleNextPokemon}> Next </button>
        </span>
      </div>
    </div>
  );
}

export default App;
