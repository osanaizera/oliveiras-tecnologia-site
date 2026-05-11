import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Globe,
  Search,
  FileText,
  BarChart3,
  Sparkles,
  Shield,
  Rocket,
  RefreshCw,
  Leaf,
  Bot,
  TrendingUp,
  Eye,
  Zap,
  MessageSquare,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/proposta")({
  head: () => ({
    meta: [
      { title: "Proposta Comercial — Oliveiras Tecnologia" },
      {
        name: "description",
        content:
          "Proposta de implementacao de site otimizado + SEO/GEO + geracao de conteudo e manutencao mensal para a Oliveiras Tecnologia.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Proposta,
});

const deliverables = [
  {
    icon: Globe,
    title: "Website Profissional",
    desc: "Site moderno, responsivo e otimizado para performance com design exclusivo que transmite autoridade e confianca no segmento industrial.",
    items: [
      "Design exclusivo e personalizado",
      "Responsivo para todos os dispositivos",
      "Velocidade de carregamento otimizada (Core Web Vitals)",
      "Formularios de contato e captacao de leads",
      "Integracoes com WhatsApp e redes sociais",
      "Hospedagem em infraestrutura de alta disponibilidade",
    ],
  },
  {
    icon: Search,
    title: "SEO Tecnico e On-Page",
    desc: "Estrutura tecnica otimizada para que os mecanismos de busca entendam, indexem e priorizem o seu site nos resultados de pesquisa.",
    items: [
      "Pesquisa de palavras-chave do setor industrial",
      "Otimizacao de meta tags, headings e estrutura semantica",
      "Schema markup (dados estruturados) para rich snippets",
      "Sitemap XML e robots.txt otimizados",
      "Otimizacao de imagens e lazy loading",
      "Configuracao do Google Search Console e Analytics",
    ],
  },
  {
    icon: Bot,
    title: "GEO — Otimizacao para IAs",
    desc: "Seu site preparado para ser encontrado e citado por inteligencias artificiais como ChatGPT, Gemini, Copilot e Perplexity.",
    items: [
      "Conteudo estruturado para compreensao por LLMs",
      "Dados estruturados avancados (JSON-LD)",
      "Autoridade tematica em automacao industrial",
      "Otimizacao para respostas de IA generativa",
      "Estrategia de citacao e referencia em IAs",
      "Monitoramento de presenca em buscas por IA",
    ],
  },
  {
    icon: FileText,
    title: "Geracao de Conteudo com SEO",
    desc: "Artigos tecnicos e estrategicos publicados mensalmente para atrair trafego qualificado e consolidar autoridade no setor.",
    items: [
      "Artigos otimizados para palavras-chave de cauda longa",
      "Conteudo tecnico relevante para o publico-alvo",
      "Linkagem interna estrategica",
      "Atualizacao e otimizacao de conteudos existentes",
      "Calendario editorial alinhado ao funil de vendas",
      "Conteudo adaptado para featured snippets",
    ],
  },
];

const monthlyItems = [
  {
    icon: RefreshCw,
    title: "Manutencao Tecnica",
    desc: "Atualizacoes de seguranca, backups e monitoramento continuo do site.",
  },
  {
    icon: TrendingUp,
    title: "Relatorios de Performance",
    desc: "Relatorios mensais de trafego, posicionamento e oportunidades de melhoria.",
  },
  {
    icon: FileText,
    title: "Artigos com SEO",
    desc: "Producao e publicacao de artigos otimizados para busca organica e IAs.",
  },
  {
    icon: Shield,
    title: "Suporte Continuo",
    desc: "Ajustes, correcoes e melhorias incrementais no site conforme necessidade.",
  },
];

const benefits = [
  {
    icon: Eye,
    title: "Visibilidade 24/7",
    desc: "Seu site trabalhando para voce o tempo todo, atraindo leads qualificados mesmo fora do horario comercial.",
  },
  {
    icon: Zap,
    title: "Autoridade no Setor",
    desc: "Conteudo estrategico posiciona a Oliveiras como referencia em engenharia industrial e Industria 4.0.",
  },
  {
    icon: BarChart3,
    title: "Resultados Mensuraveis",
    desc: "Relatorios claros com metricas de trafego, leads e posicionamento — ROI transparente.",
  },
  {
    icon: MessageSquare,
    title: "Presenca em IAs",
    desc: "Quando alguem perguntar sobre automacao industrial para uma IA, sua empresa aparece como referencia.",
  },
];

function Proposta() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar simplificada */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary text-primary-foreground">
              <Leaf className="w-4 h-4" />
            </span>
            <span className="font-display font-bold tracking-tight text-foreground text-lg">
              Oliveiras<span className="text-accent"> Tecnologia</span>
            </span>
          </Link>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-accent">
            <Sparkles className="w-3.5 h-3.5" />
            Proposta Comercial
          </span>
        </div>
      </header>

      <main>
        {/* Hero da proposta */}
        <section className="relative overflow-hidden bg-primary-deep text-primary-foreground pt-28 pb-20">
          <div className="absolute inset-0 grid-bg-animated radial-fade opacity-40" />
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-teal/15 blur-3xl animate-pulse-glow" />
          <div className="absolute inset-0 noise opacity-[0.04] mix-blend-overlay pointer-events-none" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.18em] font-mono text-teal">
                <Rocket className="w-3.5 h-3.5" />
                Proposta Exclusiva
              </span>

              <h1
                className="mt-8 font-display font-bold leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 3vw, 3.8rem)" }}
              >
                Site Profissional + SEO/GEO
                <br />
                <span className="text-gradient-teal">para a Oliveiras Tecnologia</span>
              </h1>

              <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                Uma presenca digital que gera autoridade, atrai clientes qualificados
                e posiciona sua empresa como referencia em engenharia industrial
                — nos mecanismos de busca e nas inteligencias artificiais.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Problema / Contexto */}
        <section className="py-20 bg-surface-tint">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-card">
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                  O Cenario Atual
                </span>
                <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl text-foreground">
                  Por que investir em presenca digital agora?
                </h2>
                <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    <strong className="text-foreground">97% dos compradores B2B</strong> iniciam
                    sua jornada de compra pesquisando online. Se a sua empresa nao aparece
                    com autoridade quando alguem busca por "automacao industrial" ou
                    "manutencao preditiva", voce esta perdendo oportunidades reais de negocio.
                  </p>
                  <p>
                    Alem dos buscadores tradicionais, <strong className="text-foreground">IAs generativas como ChatGPT,
                    Gemini e Copilot</strong> estao se tornando a principal forma de pesquisa
                    para decisores tecnicos. Empresas com conteudo estruturado e otimizado
                    sao as que aparecem como referencia nessas respostas.
                  </p>
                  <p>
                    Esta proposta foi desenhada para posicionar a Oliveiras Tecnologia
                    como a <strong className="text-foreground">autoridade em engenharia industrial</strong> na
                    regiao — tanto nos resultados do Google quanto nas respostas de IA.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* O que esta incluso — Setup */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                  O que esta incluso
                </span>
                <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-foreground">
                  Implementacao completa
                </h2>
                <p className="mt-4 text-foreground/70 text-lg">
                  Tudo o que voce precisa para ter uma presenca digital profissional
                  e otimizada desde o primeiro dia.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid md:grid-cols-2 gap-6">
              {deliverables.map((d, i) => (
                <Reveal key={d.title} delay={i * 100}>
                  <article className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-elegant">
                    <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-primary text-primary-foreground group-hover:bg-accent transition-colors">
                      <d.icon className="w-6 h-6" />
                    </span>
                    <h3 className="mt-6 font-display font-bold text-xl text-foreground">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-foreground/70 leading-relaxed">{d.desc}</p>
                    <ul className="mt-6 space-y-2.5">
                      {d.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Recorrencia Mensal */}
        <section className="py-20 bg-surface-tint">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                  Acompanhamento mensal
                </span>
                <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-foreground">
                  Crescimento continuo e previsivel
                </h2>
                <p className="mt-4 text-foreground/70 text-lg">
                  Apos a implementacao, mantemos seu site atualizado, seguro e
                  cada vez mais relevante para buscadores e IAs.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {monthlyItems.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-accent hover:shadow-card transition-all">
                    <span className="inline-grid place-items-center w-11 h-11 rounded-lg bg-surface-tint text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <item.icon className="w-5 h-5" />
                    </span>
                    <h3 className="mt-5 font-display font-bold text-lg text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                  Resultados esperados
                </span>
                <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-foreground">
                  O que voce ganha com isso
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 text-center hover:border-accent hover:shadow-card transition-all">
                    <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-primary/5 text-accent mx-auto">
                      <b.icon className="w-6 h-6" />
                    </span>
                    <h3 className="mt-5 font-display font-bold text-lg text-foreground">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-primary-deep text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal/15 blur-3xl rounded-full" />

          <div className="relative mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-teal font-semibold">
                  Investimento
                </span>
                <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">
                  Plano claro e transparente
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid md:grid-cols-2 gap-6">
              {/* Setup */}
              <Reveal>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 px-4 py-1.5 text-xs uppercase tracking-wider font-mono text-teal">
                    <Rocket className="w-3.5 h-3.5" />
                    Pagamento unico
                  </div>
                  <h3 className="mt-6 font-display font-bold text-2xl">
                    Implementacao e Setup
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display font-bold text-5xl text-teal">
                      R$ 2.897
                    </span>
                  </div>
                  <p className="mt-4 text-white/60 text-sm">
                    Pagamento unico para design, desenvolvimento, otimizacao e lancamento do site.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Design exclusivo e responsivo",
                      "Desenvolvimento com tecnologia moderna",
                      "SEO tecnico e on-page completo",
                      "Otimizacao GEO para IAs",
                      "Configuracao de analytics e Search Console",
                      "Hospedagem e dominio configurados",
                      "Treinamento para gestao basica",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                        <Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Recorrencia */}
              <Reveal delay={100}>
                <div className="h-full rounded-2xl border border-teal/40 bg-white/[0.06] backdrop-blur-xl p-8 md:p-10 relative">
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-teal text-primary-deep text-[11px] font-mono font-semibold uppercase tracking-wider">
                    Recomendado
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 px-4 py-1.5 text-xs uppercase tracking-wider font-mono text-teal">
                    <RefreshCw className="w-3.5 h-3.5" />
                    Recorrencia mensal
                  </div>
                  <h3 className="mt-6 font-display font-bold text-2xl">
                    Manutencao + Conteudo SEO
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display font-bold text-5xl text-teal">
                      R$ 370
                    </span>
                    <span className="text-white/50 text-lg">/mes</span>
                  </div>
                  <p className="mt-4 text-white/60 text-sm">
                    Manutencao tecnica do site + producao de artigos otimizados para SEO e IAs.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Manutencao tecnica e atualizacoes de seguranca",
                      "Backups automaticos e monitoramento",
                      "Artigos mensais otimizados para SEO",
                      "Conteudo estrategico para atrair leads",
                      "Relatorios mensais de performance",
                      "Otimizacoes continuas de posicionamento",
                      "Suporte prioritario por WhatsApp",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                        <Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Processo de trabalho */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                  Como funciona
                </span>
                <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-foreground">
                  Processo simples e transparente
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 space-y-0">
              {[
                {
                  step: "01",
                  title: "Alinhamento e briefing",
                  desc: "Reuniao inicial para entender sua operacao, publico-alvo, diferenciais e objetivos. Definimos juntos o tom, a estrutura e as prioridades do projeto.",
                },
                {
                  step: "02",
                  title: "Design e aprovacao",
                  desc: "Criamos o design completo do site com base no briefing. Voce aprova ou solicita ajustes antes do desenvolvimento comecar.",
                },
                {
                  step: "03",
                  title: "Desenvolvimento e SEO",
                  desc: "Desenvolvemos o site com tecnologia de ponta e aplicamos todas as otimizacoes de SEO tecnico, on-page e GEO.",
                },
                {
                  step: "04",
                  title: "Lancamento e acompanhamento",
                  desc: "Publicamos o site, configuramos as ferramentas de analytics e iniciamos o ciclo mensal de conteudo e manutencao.",
                },
              ].map((s, i) => (
                <Reveal key={s.step} delay={i * 100}>
                  <div className="flex gap-6 pb-12 relative">
                    {i < 3 && (
                      <div className="absolute left-5 top-12 bottom-0 w-px bg-border" />
                    )}
                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-mono font-bold text-sm relative z-10">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-foreground/70 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal/20 blur-3xl rounded-full" />
          <Reveal>
            <div className="relative mx-auto max-w-3xl px-6 text-center">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight">
                Pronto para posicionar a Oliveiras como referencia digital?
              </h2>
              <p className="mt-5 text-white/80 text-lg">
                Entre em contato para alinharmos os proximos passos.
                Estamos prontos para comecar.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/5511974549626?text=Ol%C3%A1!%20Vi%20a%20proposta%20e%20gostaria%20de%20conversar%20sobre%20o%20projeto%20do%20site."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-primary-deep px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
                >
                  Aceitar Proposta <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="mailto:renan.oliveira@oliveirastecnologia.com.br?subject=Proposta%20Site%20%2B%20SEO"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-8 py-4 font-medium hover:bg-white/10 transition-all"
                >
                  Enviar E-mail
                </a>
              </div>
              <p className="mt-5 text-sm text-white/50">
                Proposta valida por 15 dias · Condicoes especiais para inicio imediato
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer simplificado */}
      <footer className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-white/10">
              <Leaf className="w-3.5 h-3.5" />
            </span>
            <span className="font-display font-bold text-sm">Oliveiras Tecnologia</span>
          </div>
          <span className="text-xs text-white/50">
            Documento confidencial · Proposta comercial exclusiva
          </span>
        </div>
      </footer>
    </div>
  );
}
