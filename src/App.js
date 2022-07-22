import { useEffect, useState } from "react";
import PokemonThumbnail from "./components/PokemonThumbnail";
import {
  randomPoke1,
  randomPoke2,
  randomPoke3,
  randomPoke4,
  randomPoke5,
  randomPoke6,
  randomPoke7,
  randomPoke8,
} from "./components/Gens";
import GenButtons from "./components/GenButtons";
function App() {
  const [allpokemon, setAllpokemon] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=6"
  );

  const getGen1 = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/` + randomPoke1()
        );
        const data = await res.json();
        setAllpokemon((currentParty) => [...currentParty, data]);
      });
    }
    createPokemonObject(data.results);
  };

  const getGen2 = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/` + randomPoke2()
        );
        const data = await res.json();
        setAllpokemon((currentParty) => [...currentParty, data]);
      });
    }
    createPokemonObject(data.results);
  };

  const getGen3 = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/` + randomPoke3()
        );
        const data = await res.json();
        setAllpokemon((currentParty) => [...currentParty, data]);
      });
    }
    createPokemonObject(data.results);
  };

  const getGen4 = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/` + randomPoke4()
        );
        const data = await res.json();
        setAllpokemon((currentParty) => [...currentParty, data]);
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {}, []);
  const getGen5 = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/` + randomPoke5()
        );
        const data = await res.json();
        setAllpokemon((currentParty) => [...currentParty, data]);
      });
    }
    createPokemonObject(data.results);
  };

  const getGen6 = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/` + randomPoke6()
        );
        const data = await res.json();
        setAllpokemon((currentParty) => [...currentParty, data]);
      });
    }
    createPokemonObject(data.results);
  };

  const getGen7 = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/` + randomPoke7()
        );
        const data = await res.json();
        setAllpokemon((currentParty) => [...currentParty, data]);
      });
    }
    createPokemonObject(data.results);
  };
  const getGen8 = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/` + randomPoke8()
        );
        const data = await res.json();
        setAllpokemon((currentParty) => [...currentParty, data]);
      });
    }
    createPokemonObject(data.results);
  };
  return (
    <div className="app-container">
      <h1>What Pokemon Team Should I Run?</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allpokemon.slice(-6).map((pokemon, index) => (
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
        <GenButtons
          getGen1={getGen1}
          getGen2={getGen2}
          getGen3={getGen3}
          getGen4={getGen4}
          getGen5={getGen5}
          getGen6={getGen6}
          getGen7={getGen7}
          getGen8={getGen8}
        />
      </div>
    </div>
  );
}

export default App;
