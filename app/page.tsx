import { Suspense } from "react";
import SearchInput from "@/app/components/SearchInput";
import PokemonResult from "@/app/components/PokemonResult";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Search Pokémon</h1>
      <SearchInput />
      <Suspense fallback={<div>Loading…</div>}>
        <PokemonResult q={q} />
      </Suspense>
    </main>
  );
}
