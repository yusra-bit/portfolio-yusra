import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import type { Category, Project } from "../types";

const groups: { id: Category; label: string; note: string }[] = [
  { id: "freelance", label: "Freelance", note: "Independent work" },
  { id: "agency", label: "Agency", note: "Delivered as part of a team" },
  { id: "community", label: "Community", note: "Side projects" },
];

function Row({ p }: { p: Project }) {
  const body = (
    <>
      <div>
        <h3 className="font-medium leading-snug tracking-tight">{p.url ? <span className="link">{p.title}</span> : p.title}</h3>
        <p className="text-[13px] text-graphite">{p.industry} · {p.type}</p>
        
      </div>
      {p.url && <ArrowUpRight size={18} className="mt-1 shrink-0 text-graphite transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />}
    </>
  );
  return (
    <li>
      {p.url ? (
        <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} — visit live website (opens in a new tab)`} className="row group">{body}</a>
      ) : (
        <div className="row">{body}</div>
      )}
    </li>
  );
}

export default function ProjectsTab() {
  return (
    <div className="space-y-12">
      {groups.map((g) => (
        <section key={g.id} aria-label={g.label}>
          <p className="cap">{g.label} <span className="normal-case tracking-normal">— {g.note}</span></p>
          <ul className="mt-2 border-t border-dotted border-rule">
            {projects.filter((p) => p.category === g.id).map((p) => <Row key={p.id} p={p} />)}
          </ul>
        </section>
      ))}
    </div>
  );
}
