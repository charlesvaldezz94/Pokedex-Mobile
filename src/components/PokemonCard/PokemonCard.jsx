import React, { useState } from "react";
import "./PokemonCard.css";

const PokemonCard = (props) => {
  const pokemonDetails = props.pokemonDetails;
  const [shinySprite, setShinySprite] = useState(false);

  console.log([pokemonDetails])

  function handleSpriteFlip(e) {
    if (shinySprite === false) {
      setShinySprite(true);
      console.log(shinySprite);
    } else {
      setShinySprite(false);
    }
  }

  return (
    <div className="pokemonCardContainer">
      {pokemonDetails === null ? (
        <div> This pokemon is loading....... </div>
      ) : (
        <div className="cardInfo">
          <div className="pokeName"> {pokemonDetails.name} </div>

          <div className="pokeImg" onClick={handleSpriteFlip}>
            {shinySprite === true ? (
              <img src={pokemonDetails.sprites.front_shiny } alt="shinySprite" />
            ) : (
              <img src={pokemonDetails.sprites.front_default} alt="normalSprite" />
            )}
          </div>

          <div className="pokeType">
            {pokemonDetails.types.map((item, idx) => (
              <span key={idx}>
                {idx < pokemonDetails.types.length - 1 ? (
                  <span> {item.type.name} / </span>
                ) : (
                  <span> {item.type.name} </span>
                )}
              </span>
            ))}
          </div>

          <div className="pokeAbilities">
            {pokemonDetails.abilities.map((ability, idx) => (
              <span key={idx}>
                {" "}
                {idx < pokemonDetails.abilities.length - 1 ? (
                  <span> {ability.ability.name} / </span>
                ) : (
                  <span> {ability.ability.name} </span>
                )}{" "}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
