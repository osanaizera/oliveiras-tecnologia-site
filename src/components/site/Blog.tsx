import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import imgAutomacao from "@/assets/blog-automacao.jpg";
import imgManutencao from "@/assets/blog-manutencao.jpg";
import imgSoftware from "@/assets/blog-software.jpg";

const posts = [
  {
    tag: "Automação",
    title: "Indústria 5.0: quando a máquina colabora, não substitui",
    desc: "Como a colaboração humano-robô está redefinindo a eficiência industrial e o que sua empresa precisa saber para não ficar para trás.",
    time: "6 min",
    date: "Abril 2026",
    img: imgAutomacao,
  },
  {
    tag: "Manutenção",
    title: "Manutenção preditiva: o fim das paradas não planejadas",
    desc: "Sensores IoT e machine learning estão transformando a manutenção industrial. Veja como implementar sem grandes investimentos iniciais.",
    time: "8 min",
    date: "Março 2026",
    img: imgManutencao,
  },
  {
    tag: "Software",
    title: "Por que seu ERP não é suficiente para chão de fábrica",
    desc: "ERPs gerenciam o negócio. MES gerencia a produção. Entenda a diferença e por que as indústrias mais eficientes usam os dois integrados.",
    time: "5 min",
    date: "Fevereiro 2026",
    img: imgSoftware,
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-mono font-semibold">
              · Blog
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl text-foreground tracking-tight">
              Insights para a indústria moderna
            </h2>
            <p className="mt-4 text-foreground/70 text-lg">
              Conteúdo técnico e estratégico para gestores e engenheiros.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group h-full flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:-translate-y-2 hover:shadow-elegant hover:border-teal/40 transition-all duration-500">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1280}
                    height={832}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/30 to-transparent" />
                  <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay" />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-mono font-semibold px-2.5 py-1 rounded-full bg-teal text-primary-deep">
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
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {p.time} · {p.date}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
