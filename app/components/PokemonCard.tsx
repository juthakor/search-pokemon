import Image from "next/image";
import type { Pokemon } from "@/app/lib/pokemon-types";
import Attacks from "@/app/components/Attacks";
import EvolutionList from "@/app/components/EvolutionList";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <article className="space-y-4">
      <header className="flex items-center gap-4">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={96}
          height={96}
          className="rounded"
        />
        <div>
          <h2 className="text-xl font-semibold">
            {pokemon.name}{" "}
            <span className="text-sm text-gray-500">#{pokemon.number}</span>
          </h2>
          <div className="text-sm">Types: {pokemon.types.join(", ")}</div>
          <div className="text-sm">Class: {pokemon.classification}</div>
        </div>
      </header>

      <Attacks fast={pokemon.attacks.fast} special={pokemon.attacks.special} />

      <EvolutionList evolutions={pokemon.evolutions} />
    </article>
  );
}
