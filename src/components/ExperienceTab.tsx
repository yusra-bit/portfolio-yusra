import Skill from "./Skill";
import { education, experience, expertise } from "../data/site";

export default function ExperienceTab() {
  return (
    <div className="space-y-10">
      <section aria-label="Work experience">
        <p className="cap">Work</p>
        <ol className="mt-2 border-t border-dotted border-rule">
          {experience.map((e) => (
            <li key={e.role} className="border-b border-dotted border-rule py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[15px] font-medium tracking-tight">{e.role}</h3>
                <span className="cap">{e.period}</span>
              </div>
              <p className="text-[13px] text-graphite">{e.org}</p>
              <p className="mt-2 text-[13px]">{e.summary}</p>
            </li>
          ))}
        </ol>
      </section>
      <section aria-label="Education">
        <p className="cap">Education</p>
        <div className="row mt-2 border-t">
          <div>
            <h3 className="text-[15px] font-medium tracking-tight">{education.degree}</h3>
            <p className="text-[13px] text-graphite">{education.school}</p>
          </div>
        </div>
      </section>
      <section aria-label="Skills">
        <p className="cap">Skills</p>
        <dl className="mt-2 border-t border-dotted border-rule">
          {expertise.map((g) => (
            <div key={g.title} className="border-b border-dotted border-rule py-3 sm:grid sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt className="text-[13px] text-graphite">{g.title}</dt>
              <dd><ul className="flex flex-wrap gap-x-5 gap-y-2">{g.items.map((it) => <Skill key={it.name} skill={it} />)}</ul></dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
