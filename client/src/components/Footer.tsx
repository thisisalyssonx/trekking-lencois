import { Mountain, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">Trekking nos Lençóis Maranhenses</span>
            </div>
            <p className="text-gray-400 mb-4">
              Sua porta de entrada para aventuras inesquecíveis nos Lençóis Maranhenses. 
              Oferecemos experiências autênticas de trekking e expedições guiadas por profissionais experientes.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/trilhatour"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/trilhatour"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("roteiros")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Roteiros de Trekking
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("passeios")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Passeios Privativos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="https://wa.me/5598984659626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    +55 (98) 98465-9626
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contato@trilhatour.com.br"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  contato@trilhatour.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Barreirinhas - MA<br />
                  Lençóis Maranhenses
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Trilha Tour. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            CNPJ: 35.066.009/0001-80
          </p>
        </div>
      </div>
    </footer>
  );
}
