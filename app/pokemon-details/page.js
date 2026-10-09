import Link from "next/link";

export default async function PokemonDetails({ searchParams }) {
  const { id } = await searchParams;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();

  return (
    <main className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-48 h-48 mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold capitalize text-center mb-4 text-gray-800">
          {pokemon.name}
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-semibold text-gray-600">Height</h3>
            <p>{pokemon.height / 10} m</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-600">Weight</h3>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-600 mb-2">Types</h3>
          <div className="flex gap-2">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm capitalize"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-600 mb-2">Stats</h3>
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} className="mb-2">
              <div className="flex justify-between">
                <span className="capitalize">{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Pokédex
        </Link>
      </div>
    </main>
  );
}
