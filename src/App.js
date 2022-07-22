import React, { useEffect, useState } from "react";
import PokemonThumbnail from "./components/PokemonThumbnail";

function App() {
  const [allpokemon, setAllpokemon] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=3"
  );
  const randomPoke = function getRandomInt(min, max) {
    min = Math.floor(0);
    max = Math.ceil(905);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const getAllpokemon = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/` + randomPoke(0, 905)
        );
        const data = await res.json();
        setAllpokemon((currentParty) => [...currentParty, data]);
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {
    getAllpokemon();
  }, []);

  return (
    <div className="app-container">
      <h1>What Pokemon Team Should I Run?</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allpokemon.map((pokemon, index) => (
            <PokemonThumbnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
              key={index}
              weight={pokemon.weight}
              height={pokemon.height}
            />
          ))}
        </div>
        <button className="load-more" onClick={() => getAllpokemon()}>
          Give me a team!
        </button>
      </div>
    </div>
  );
}

export default App;
