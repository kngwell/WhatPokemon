import { useState } from "react";
import PokemonThumbnail from "./components/PokemonThumbnail";
import { getPokeFromGeneration } from "./components/Gens";
import GenButtons from "./components/GenButtons";
function App() {
  const [allpokemon, setAllpokemon] = useState([]);

  const getGen = async (generation) => {
    setAllpokemon([]);
    await Promise.all(
      Array.from(Array(6).keys()).map(async () => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/` +
            getPokeFromGeneration(generation)
        );
        const data = await res.json();
        setAllpokemon((currentParty) => [...currentParty, data]);
      })
    );
  };

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
        <GenButtons getGen={getGen} />
      </div>
    </div>
  );
}

export default App;
