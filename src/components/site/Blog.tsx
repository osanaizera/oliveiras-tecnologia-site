import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const posts = [
  {
    tag: "Automação",
    title: "Indústria 5.0: quando a máquina colabora, não substitui",
    desc: "Como a colaboração humano-robô está redefinindo a eficiência industrial e o que sua empresa precisa saber para não ficar para trás.",
    time: "6 min",
    date: "Abril 2026",
  },
  {
    tag: "Manutenção",
    title: "Manutenção preditiva: o fim das paradas não planejadas",
    desc: "Sensores IoT e machine learning estão transformando a manutenção industrial. Veja como implementar sem grandes investimentos iniciais.",
    time: "8 min",
    date: "Março 2026",
  },
  {
    tag: "Software",
    title: "Por que seu ERP não é suficiente para chão de fábrica",
    desc: "ERPs gerenciam o negócio. MES gerencia a produção. Entenda a diferença e por que as indústrias mais eficientes usam os dois integrados.",
    time: "5 min",
    date: "Fevereiro 2026",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Blog
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-foreground">
              Insights para a indústria moderna
            </h2>
            <p className="mt-3 text-foreground/70">
              Conteúdo técnico e estratégico para gestores e engenheiros.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group h-full flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:-translate-y-1 hover:shadow-elegant transition-all duration-300">
                <div className="relative h-44 bg-primary-deep overflow-hidden">
                  <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
                  <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-teal/25 blur-2xl" />
                  <span className="absolute top-4 left-4 text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-teal text-primary-deep">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-lg text-foreground leading-snug group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {p.time} · {p.date}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
