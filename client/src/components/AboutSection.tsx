import { Award, Heart, Shield, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Anos de experiência guiando aventureiros pelos Lençóis Maranhenses com segurança e profissionalismo.",
    },
    {
      icon: Users,
      title: "Guias Locais",
      description: "Equipe de guias nativos da região, conhecedores profundos do território e da cultura local.",
    },
    {
      icon: Heart,
      title: "Imersão Cultural",
      description: "Convivência autêntica com comunidades tradicionais e experiências que vão além do turismo convencional.",
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Todos os roteiros seguem rigorosos padrões de segurança, com equipamentos adequados e suporte completo.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sua Porta de Entrada para os{" "}
              <span className="text-primary">Lençóis Maranhenses</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                A <strong className="text-foreground">Trilha Tour</strong> nasceu da paixão pelos Lençóis Maranhenses 
                e do desejo de compartilhar esse paraíso natural de forma autêntica e responsável. Somos uma 
                operadora local especializada em trekkings e expedições pelo Parque Nacional dos Lençóis Maranhenses.
              </p>
              <p className="text-lg">
                Nossa missão é proporcionar experiências transformadoras, conectando aventureiros de todo o mundo 
                com a beleza única das dunas brancas, lagoas cristalinas e comunidades tradicionais que habitam 
                essa região extraordinária do Maranhão.
              </p>
              <p className="text-lg">
                Cada roteiro é cuidadosamente planejado para equilibrar aventura, conforto e respeito ao meio 
                ambiente, garantindo que você viva momentos inesquecíveis enquanto contribui para a preservação 
                deste patrimônio natural brasileiro.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/camping-stars.jpg"
                alt="Camping nos Lençóis Maranhenses"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-semibold">
                  "A natureza não é um lugar para visitar. É o nosso lar."
                </p>
                <p className="text-sm text-gray-300 mt-2">- Gary Snyder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Aventureiros Atendidos
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Roteiros Disponíveis
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Satisfação Garantida
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Anos de Experiência
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
