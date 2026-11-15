import { about, tagline } from "../data/site";

export default function AboutTab() {
  return (
    <div className="space-y-6">
      <p className="text-xl font-medium leading-snug tracking-tight">
        I design and build digital experiences that help businesses grow.
      </p>
      <span className="sr-only">{tagline}</span>
      {about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
    </div>
  );
}
