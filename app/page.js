"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
      const data = await res.json();
      setPokemons(data.results);
      console.log(data.results);
    };

    fetchPokemons();
  }, []);

    return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Pokédex</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pokemons.map((pokemon, i) => (
          <div
            key={pokemon.name}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
              alt={pokemon.name}
              className="w-24 h-24 mx-auto mb-2"
            />
            <h2 className="text-lg font-semibold capitalize text-gray-800 text-center">
              {pokemon.name}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}