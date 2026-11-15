import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { site } from "../data/site";

export default function Header({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {photoFailed ? (
          <div aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-medium text-paper">YA</div>
        ) : (
          <img
            src="/img.jpg"
            alt={site.name}
            width={48}
            height={48}
            onError={() => setPhotoFailed(true)}
            className="h-24 w-24 shrink-0 rounded-full object-cover"
          />
        )}
        <div>
          <h1 className="text-base font-medium leading-tight tracking-tight">{site.name}</h1>
          <p className="text-[13px] text-graphite">{site.title}</p>
        </div>
      </div>
      <button
        onClick={onToggle}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        className="rounded-full p-2 text-graphite transition-colors hover:text-ink"
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}