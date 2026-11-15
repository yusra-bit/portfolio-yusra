import { Globe, Mail, Search, Server, ShieldCheck, Wrench } from "lucide-react";
import type { IconKey, SkillItem } from "../types";

const icons = { search: Search, mail: Mail, globe: Globe, server: Server, shield: ShieldCheck, wrench: Wrench } satisfies Record<IconKey, unknown>;

export default function Skill({ skill }: { skill: SkillItem }) {
  const Icon = skill.icon ? icons[skill.icon] : null;
  return (
    <li className="inline-flex items-center gap-2 text-[13px]">
      {skill.logo ? (
        <img
          src={`https://cdn.simpleicons.org/${skill.logo}`}
          alt=""
          width={16}
          height={16}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
          className={`h-4 w-4 ${skill.invertDark ? "dark:invert" : ""}`}
        />
      ) : Icon ? (
        <Icon size={16} className="text-graphite" aria-hidden />
      ) : null}
      {skill.name}
    </li>
  );
}
