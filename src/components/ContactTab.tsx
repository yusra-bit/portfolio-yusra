import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

const rows = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
  { label: "Phone", value: site.phone, href: site.phoneHref, external: false },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: site.linkedin, external: true },
 
];

export default function ContactTab() {
  return (
    <div>
      <p className="text-xl font-medium leading-snug tracking-tight">
        Let’s build something that works.
      </p>
      <p className="mt-4">I’m open to conversations with employers, agencies and clients who need a thoughtful website or a digital solutions.</p>
      <ul className="mt-8 border-t border-dotted border-rule">
        {rows.map((r) => (
          <li key={r.label}>
            {r.href ? (
              <a href={r.href} {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="row group">
                <span className="cap mt-1.5 w-24 shrink-0">{r.label}</span>
                <span className="link flex-1 break-all">{r.value}</span>
                <ArrowUpRight size={18} className="mt-1 shrink-0 text-graphite transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </a>
            ) : (
              <div className="row"><span className="cap mt-1.5 w-24 shrink-0">{r.label}</span><span className="flex-1">{r.value}</span></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
