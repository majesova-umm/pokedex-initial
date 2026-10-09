"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
      const data = await res.json();
      setPokemons(
        data.results.map((pokemon, i) => ({
          ...pokemon,
          id: i + 1,
        }))
      );
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Pokédex</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Pokémon..."
        className="w-full max-w-md mx-auto block mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPokemons.map((pokemon) => (
          <Link key={pokemon.id} href={`/pokemon-details?id=${pokemon.id}`} className="block">
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200 cursor-pointer">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto mb-2"
              />
              <h2 className="text-lg font-semibold capitalize text-gray-800 text-center">
                {pokemon.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
