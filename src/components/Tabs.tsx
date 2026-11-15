export const tabs = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
export type TabId = (typeof tabs)[number]["id"];

export default function Tabs({ active, onSelect }: { active: TabId; onSelect: (t: TabId) => void }) {
  return (
    <nav aria-label="Sections" className="mt-10">
      <div role="tablist" className="flex flex-wrap gap-x-7 gap-y-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => onSelect(t.id)}
            className={`py-1 text-sm transition-colors ${active === t.id ? "link text-ink" : "text-graphite hover:text-ink"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
