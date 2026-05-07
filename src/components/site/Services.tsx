import { Bot, Wrench, Code2, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Bot,
    title: "Automação Industrial",
    copy: "Projetamos ecossistemas de automação inteligentes — de robôs colaborativos a linhas produtivas completas — com precisão máxima e integração total aos seus sistemas atuais.",
    bullets: [
      "Robôs colaborativos",
      "CLPs e IHMs",
      "Linhas produtivas completas",
      "Integração com sistemas legados",
    ],
  },
  {
    icon: Wrench,
    title: "Manutenção Inteligente",
    copy: "Garantimos a longevidade e o pico de produtividade dos seus ativos com planos preventivos, preditivos e projetos de modernização (retrofitting).",
    bullets: [
      "Manutenção preventiva e preditiva",
      "Análise de vibração e temperatura",
      "Retrofitting de máquinas",
      "Planos de confiabilidade",
    ],
  },
  {
    icon: Code2,
    title: "Software Industrial",
    copy: "Criamos o sistema nervoso da sua operação — softwares sob medida que transformam dados brutos em decisões estratégicas em tempo real.",
    bullets: [
      "SCADA e MES",
      "Dashboards em tempo real",
      "Integração ERP/IoT",
      "Relatórios inteligentes",
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              O que fazemos
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-foreground">
              Soluções que transformam operação em performance.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-elegant">
                <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-primary text-primary-foreground group-hover:bg-accent transition-colors">
                  <s.icon className="w-6 h-6" />
                </span>
                <h3 className="mt-6 font-display font-bold text-xl text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{s.copy}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
