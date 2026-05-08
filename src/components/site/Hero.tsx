import { ArrowRight, Cpu, Activity } from "lucide-react";
import { Counter } from "./Counter";
import heroImg from "@/assets/hero-industrial.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary-deep text-primary-foreground pt-32 pb-28 md:pt-40 md:pb-36"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.28]"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/80 via-primary-deep/70 to-primary-deep" />

      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg-animated radial-fade opacity-60" />

      {/* Glows */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-teal/20 blur-3xl animate-pulse-glow" />
      <div
        className="absolute -bottom-40 -left-20 w-[460px] h-[460px] rounded-full bg-accent/25 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Scanline */}
      <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none">
        <div className="scanline" />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise opacity-[0.06] mix-blend-overlay pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 backdrop-blur px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] font-mono text-teal">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-teal animate-ping opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-teal" />
            </span>
            Engenharia · Indústria 4.0 / 5.0
          </span>

          <h1 className="mt-7 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight">
            A próxima geração da{" "}
            <span className="text-gradient-teal">transformação industrial</span>
            <span className="text-teal animate-blink">_</span>
          </h1>

          <p className="mt-7 text-lg text-white/75 max-w-xl leading-relaxed">
            Somos parceiros estratégicos em engenharia, projetando soluções que
            convertem desafios industriais em vantagens competitivas mensuráveis.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#servicos"
              className="group relative inline-flex items-center gap-2 rounded-full bg-teal text-primary-deep px-7 py-3.5 font-semibold hover:bg-white transition-all duration-300 shadow-elegant hover:-translate-y-0.5"
            >
              Conheça nossas soluções
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#clientes"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-3.5 font-medium hover:bg-white/10 hover:border-teal/50 transition-all"
            >
              Ver cases de sucesso
            </a>
          </div>

          {/* tech ticker */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-white/50">
            <span className="inline-flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-teal" /> PLC · SCADA · MES
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-teal" /> IIoT · Edge · AI
            </span>
            <span>ISO 9001 · IEC 61131</span>
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 shadow-elegant shimmer-border animate-float">
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-teal text-primary-deep text-[11px] font-mono font-semibold uppercase tracking-wider">
              ● LIVE · Resultados
            </div>
            <div className="grid grid-cols-3 gap-5 mt-4">
              {[
                { v: 120, suf: "+", l: "Projetos entregues" },
                { v: 98, suf: "%", l: "Taxa de satisfação" },
                { v: 40, suf: "+", l: "Indústrias atendidas" },
              ].map((m) => (
                <div key={m.l} className="text-center">
                  <div className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                    <Counter to={m.v} suffix={m.suf} />
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-wider text-white/55 leading-tight font-mono">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>

            {/* fake telemetry bars */}
            <div className="mt-7 space-y-2.5">
              {[
                { l: "OEE", v: 86 },
                { l: "Throughput", v: 72 },
                { l: "Uptime", v: 94 },
              ].map((b, i) => (
                <div key={b.l} className="flex items-center gap-3">
                  <span className="w-20 font-mono text-[10px] uppercase text-white/55">{b.l}</span>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal to-accent rounded-full"
                      style={{
                        width: `${b.v}%`,
                        animation: `shimmer 2s ease-in-out ${i * 0.2}s both`,
                      }}
                    />
                  </div>
                  <span className="w-10 text-right font-mono text-[10px] text-teal">{b.v}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
