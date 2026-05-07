import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-white/10">
              <Leaf className="w-4 h-4" />
            </span>
            <span className="font-display font-bold text-lg">Oliveiras Tecnologia</span>
          </div>
          <p className="mt-4 text-white/70 max-w-sm">
            Construindo um futuro com inovação e eficiência.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/90">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-white">Serviços</a></li>
            <li><a href="#clientes" className="hover:text-white">Clientes</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/90">
            Contato
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>renan.oliveira@<br/>oliveirastecnologia.com.br</li>
            <li>(11) 97454-9626</li>
            <li>Hortolândia, SP</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/50 flex flex-wrap justify-between gap-3">
          <span>© 2026 Oliveiras Tecnologia. Todos os direitos reservados.</span>
          <span>Engenharia · Indústria 4.0 e 5.0</span>
        </div>
      </div>
    </footer>
  );
}
