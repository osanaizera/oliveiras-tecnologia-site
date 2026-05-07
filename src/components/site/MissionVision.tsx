import { Shield, Eye, Heart, Sparkles, Scale, HandHeart, Award } from "lucide-react";
import { Reveal } from "./Reveal";

const values = [
  { icon: Shield, label: "Integridade" },
  { icon: Eye, label: "Transparência" },
  { icon: Scale, label: "Responsabilidade" },
  { icon: HandHeart, label: "Humildade" },
  { icon: Award, label: "Excelência" },
];

export function MissionVision() {
  return (
    <section id="sobre" className="py-24 bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Quem somos
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-foreground">
              Engenharia com propósito, indústria com futuro.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-2xl bg-card p-8 shadow-card border border-border">
              <div className="flex items-center gap-3 text-accent">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Missão</span>
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Impulsionar a transformação digital da indústria brasileira com
                soluções inovadoras, eficientes e sustentáveis.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl bg-card p-8 shadow-card border border-border">
              <div className="flex items-center gap-3 text-accent">
                <Eye className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Visão</span>
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Ser a parceira estratégica de referência para a Indústria 4.0 e 5.0,
                transformando potencial tecnológico em resultados duradouros.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-6 rounded-2xl bg-card p-8 shadow-card border border-border">
            <div className="flex items-center gap-3 text-accent">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Valores</span>
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="group flex flex-col items-center text-center gap-3 rounded-xl border border-border p-5 hover:border-accent hover:bg-surface-tint transition-all"
                >
                  <span className="grid place-items-center w-11 h-11 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <v.icon className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
