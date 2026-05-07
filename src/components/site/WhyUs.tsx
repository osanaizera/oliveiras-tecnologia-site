import { Wrench, Ruler, Zap, BarChart3 } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Wrench,
    title: "Diagnóstico gratuito",
    desc: "Mapeamos sua operação antes de propor qualquer solução.",
  },
  {
    icon: Ruler,
    title: "Projetos sob medida",
    desc: "Nenhuma fábrica é igual. Nenhuma solução nossa também.",
  },
  {
    icon: Zap,
    title: "Implementação ágil",
    desc: "Metodologia própria com entregas parciais e sem parar a produção.",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento contínuo",
    desc: "Suporte pós-implantação e monitoramento remoto 24/7.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Por que Oliveiras
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Engenharia que vai além do equipamento.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed text-lg">
              Enquanto outros entregam máquinas, nós entregamos resultado. Nossa
              abordagem une engenharia de campo com inteligência de dados para
              que sua operação nunca pare de evoluir.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-accent hover:shadow-card transition-all">
                <span className="inline-grid place-items-center w-11 h-11 rounded-lg bg-surface-tint text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <it.icon className="w-5 h-5" />
                </span>
                <h3 className="mt-5 font-display font-bold text-lg text-foreground">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
