import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Fale com a gente
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-foreground">
              Vamos desenhar o próximo passo da sua indústria.
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Conte um pouco sobre o seu desafio. Nosso time técnico responde em
              até 24 horas com uma proposta inicial de diagnóstico.
            </p>

            <div className="mt-10 space-y-5">
              <a href="mailto:renan.oliveira@oliveirastecnologia.com.br" className="flex items-start gap-4 group">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-surface-tint text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</div>
                  <div className="text-foreground font-medium">renan.oliveira@oliveirastecnologia.com.br</div>
                </div>
              </a>
              <a href="tel:+5511974549626" className="flex items-start gap-4 group">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-surface-tint text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Telefone</div>
                  <div className="text-foreground font-medium">(11) 97454-9626</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-surface-tint text-accent">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Localização</div>
                  <div className="text-foreground font-medium">Região de Hortolândia, SP</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-card p-8 shadow-card space-y-5"
          >
            <div>
              <label className="text-sm font-medium text-foreground">Nome</label>
              <input
                required
                type="text"
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-accent transition-colors"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">E-mail</label>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-accent transition-colors"
                placeholder="voce@empresa.com.br"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Mensagem</label>
              <textarea
                required
                rows={5}
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-accent transition-colors resize-none"
                placeholder="Conte sobre o seu desafio industrial..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:bg-primary-deep transition-colors"
            >
              {sent ? "Mensagem enviada ✓" : (<>Enviar mensagem <Send className="w-4 h-4" /></>)}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
