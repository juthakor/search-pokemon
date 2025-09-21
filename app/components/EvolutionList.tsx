import Link from "next/link";
import Image from "next/image";
import type { Evolution } from "@/app/lib/pokemon-types";

export default function EvolutionList({
  evolutions,
}: {
  evolutions?: Evolution[];
}) {
  return (
    <section>
      <h3 className="font-semibold mb-2">Evolutions</h3>
      {evolutions?.length ? (
        <ul className="flex flex-wrap gap-3">
          {evolutions.map((evo) => (
            <li key={evo.id}>
              <Link
                href={`/?q=${encodeURIComponent(evo.name)}`}
                className="inline-flex items-center gap-3 border rounded p-3 hover:bg-zinc-900 transition-colors"
              >
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src={evo.image}
                    alt={evo.name}
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <span className="font-medium truncate">{evo.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-sm text-gray-500">No evolutions.</div>
      )}
    </section>
  );
}
