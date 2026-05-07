import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal/20 blur-3xl rounded-full" />
      <Reveal>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight">
            Pronto para transformar sua operação?
          </h2>
          <p className="mt-5 text-white/80 text-lg">
            Agende um diagnóstico gratuito e descubra onde sua indústria pode
            ganhar mais eficiência, reduzir custos e competir em outro nível.
          </p>
          <a
            href="#contato"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white text-primary-deep px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
          >
            Solicitar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-5 text-sm text-white/60">
            Sem compromisso · Resposta em até 24h · 100% confidencial
          </p>
        </div>
      </Reveal>
    </section>
  );
}
