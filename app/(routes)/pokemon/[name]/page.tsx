import { getClient } from "@/app/apollo/client";
import { GET_POKEMON_BY_NAME } from "@/app/apollo/queries";
import PokemonCard from "@/app/components/PokemonCard";
import type { Pokemon } from "@/app/lib/pokemon-types";

export const revalidate = 3600;

export function generateStaticParams() {
  return [
    { name: "Bulbasaur" },
    { name: "Charmander" },
    { name: "Squirtle" },
  ];
}

export default async function PokemonByName({
  params,
}: {
  params: { name: string };
}) {
  const client = getClient();
  const { data } = await client.query<{ pokemon: Pokemon }>({
    query: GET_POKEMON_BY_NAME,
    variables: { name: params.name },
  });

  const p = data?.pokemon;
  if (!p) return <div className="p-6">Not found.</div>;
  return <PokemonCard pokemon={p} />;
}
