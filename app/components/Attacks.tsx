import type { Attack } from "@/app/lib/pokemon-types";

export default function Attacks({
  fast,
  special,
}: {
  fast: Attack[];
  special: Attack[];
}) {
  return (
    <section>
      <h3 className="font-semibold mb-2">Attacks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <AttackBlock title="Fast" list={fast} />
        <AttackBlock title="Special" list={special} />
      </div>
    </section>
  );
}

function AttackBlock({ title, list }: { title: string; list: Attack[] }) {
  return (
    <div className="border rounded p-3">
      <div className="font-medium mb-1">{title}</div>
      <ul className="text-sm space-y-1">
        {list.map((a) => (
          <li key={a.name}>
            {a.name} — {a.type} ({a.damage})
          </li>
        ))}
      </ul>
    </div>
  );
}
