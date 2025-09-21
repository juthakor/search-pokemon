import { getClient } from "@/app/apollo/client";
import { GET_POKEMON_BY_NAME } from "@/app/apollo/queries";
import PokemonCard from "@/app/components/PokemonCard";
import type { Pokemon } from "@/app/lib/pokemon-types";

export default async function PokemonResult({ q }: { q: string }) {
  if (!q) return null;

  const client = getClient();
  const { data } = await client.query<{ pokemon: Pokemon }>({
    query: GET_POKEMON_BY_NAME,
    variables: { name: q },
  });

  const p = data?.pokemon;
  if (!p) return <div className="text-gray-600">Not found.</div>;

  return <PokemonCard pokemon={p} />;
}
