import { ArrowRight } from "lucide-react";
import { Counter } from "./Counter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary-deep text-primary-foreground pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="absolute inset-0 grid-bg radial-fade opacity-70" />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-teal/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            Engenharia · Indústria 4.0 e 5.0
          </span>

          <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            A próxima geração da{" "}
            <span className="text-teal">transformação industrial</span>.
          </h1>

          <p className="mt-6 text-lg text-white/75 max-w-xl">
            Somos parceiros estratégicos em engenharia, projetando soluções que
            convertem desafios industriais em vantagens competitivas mensuráveis.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary-deep px-6 py-3 font-medium hover:bg-white/90 transition-colors"
            >
              Conheça nossas soluções <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#clientes"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-medium hover:bg-white/5 transition-colors"
            >
              Ver cases de sucesso
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 shadow-elegant">
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-teal text-primary-deep text-[11px] font-semibold uppercase tracking-wider">
              Resultados em números
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { v: 120, suf: "+", l: "Projetos entregues" },
                { v: 98, suf: "%", l: "Taxa de satisfação" },
                { v: 40, suf: "+", l: "Indústrias atendidas" },
              ].map((m) => (
                <div key={m.l} className="text-center">
                  <div className="font-display font-bold text-3xl md:text-4xl text-white">
                    <Counter to={m.v} suffix={m.suf} />
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-wider text-white/60 leading-tight">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 opacity-60">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-1 rounded-full bg-white/20" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
