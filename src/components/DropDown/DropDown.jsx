import React, { useState, useEffect } from 'react';
import './DropDown.css'

const DropDown = (props) => {

    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    
    const pokemonList = props.pokemonList;
    const setSelectPokemon = props.setSelectPokemon;
    const setCurrentIndex = props.setCurrentIndex


    return (
        <div className='dropContainer'>
            <div className='dropDown'>
            <select onChange={(e) => {
            setSelectPokemon(e.target.value);
            const index = pokemonList.findIndex(poke => poke.name === e.target.value);
            setCurrentIndex(index);
        }}>
                    {pokemonList.map((pokemon, idx) => (
                        <option key={idx} value={pokemon.name}> {capitalize(pokemon.name)} </option>
                    ))}
                </select>
            </div>
        </div>
    )
}


export default DropDown;