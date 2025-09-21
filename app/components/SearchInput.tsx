"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const sp = useSearchParams();
  const initial = sp.get("q") ?? "";
  const [term, setTerm] = useState(initial);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => setTerm(initial), [initial]);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const q = term.trim();
      router.replace(q ? `/?q=${encodeURIComponent(q)}` : "/");
    },
    [term, router]
  );

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        ref={ref}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Type a Pokémon name…"
        className="border rounded px-3 py-2 flex-1"
      />
      <button className="border rounded px-4 py-2">Search</button>
    </form>
  );
}
