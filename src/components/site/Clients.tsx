import { Reveal } from "./Reveal";

const clients = [
  "MetalGroup BR",
  "AgroTech Sul",
  "IndustPack",
  "FusionPlast",
  "MineraBrasil",
  "TechFábrica",
  "EnergiaCerta",
  "AutoPeças RV",
];

export function Clients() {
  const loop = [...clients, ...clients];
  return (
    <section id="clientes" className="py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-center font-display font-bold text-2xl md:text-3xl text-foreground">
            Empresas que confiam na Oliveiras
          </h2>
        </Reveal>

        <div className="mt-12 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />
          <div className="flex gap-12 animate-marquee w-max">
            {loop.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-card text-foreground/70 hover:text-foreground hover:border-accent transition-colors whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-display font-bold tracking-tight text-lg">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
