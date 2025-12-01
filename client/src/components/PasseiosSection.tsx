import PasseioCard from "./PasseioCard";

const passeios = [
  {
    title: "Trilha Lagoa Azul",
    description: "Travessia de 4x4 em balsa pelo Rio Preguiças, seguida de trilha até as dunas do Parque Nacional. Visita à Lagoa Azul e outras lagoas cristalinas.",
    duration: "Manhã (4h) - Saída 8h30",
    price: "R$ 900",
    image: "/images/lagoa-azul.jpg",
    included: ["Guia", "Translado 4x4", "Travessia de balsa"],
  },
  {
    title: "Trilha Lagoa Bonita",
    description: "Trilha mais longa com subida de duna de 85m oferecendo vista panorâmica espetacular. Caminhada e banho na famosa Lagoa Bonita.",
    duration: "Tarde (4h) - Saída 14h",
    price: "R$ 950",
    image: "/images/lagoabonita.jpg",
    included: ["Guia", "Translado 4x4", "Vista panorâmica"],
  },
  {
    title: "Santo Amaro + Betânia",
    description: "Dia completo visitando as lagoas Andorinha e Gaivota em Santo Amaro, com parada para almoço e descanso em redários.",
    duration: "Dia completo - Saída 8h",
    price: "R$ 2.500",
    image: "/images/santoamaro.jpg",
    included: ["Guia", "Translado", "Visita a múltiplas lagoas"],
  },
  {
    title: "Lagoas Secretas",
    description: "Descubra lagoas escondidas longe das trilhas comuns. Experiência exclusiva com pôr do sol nas dunas e paisagens intocadas.",
    duration: "Dia completo com pôr do sol",
    price: "R$ 1.700",
    image: "/images/hero-lagoa.jpg",
    included: ["Guia", "Translado 4x4", "Pôr do sol nas dunas"],
  },
  {
    title: "Café da Manhã nas Dunas",
    description: "Experiência única de café da manhã especial nas dunas ao nascer do sol, com frutas, pães, bolos e vista espetacular.",
    duration: "Madrugada - Saída 3h30",
    price: "R$ 1.600",
    image: "/images/cafemanha.jpg",
    included: ["Café completo", "Guia", "Translado", "Nascer do sol"],
  },
  {
    title: "Mirar das Estrelas",
    description: "Trilha noturna até ponto privilegiado para observação do céu estrelado, longe de qualquer poluição luminosa.",
    duration: "Noturno (4h)",
    price: "R$ 1.750",
    image: "/images/mirardasestrelas.jpg",
    included: ["Guia", "Translado", "Observação guiada"],
  },
  {
    title: "Atins / Canto de Atins",
    description: "Travessia off-road pelo Parque Nacional até o povoado de Atins e Canto do Atins, com praias e lagoas paradisíacas.",
    duration: "Dia completo - Saída 8h30",
    price: "R$ 1.600",
    image: "/images/trilhalagoabonita.jpg",
    included: ["Guia", "Translado 4x4", "Travessia de balsa"],
  },
  {
    title: "Cardosa - Boia Cross",
    description: "Aventura de descida pelo Rio Formiga em boia cross, com trajeto off-road até o Povoado de Cardosa.",
    duration: "Manhã (4h) - Saída 8h30",
    price: "R$ 850",
    image: "/images/cc.jpg",
    included: ["Guia", "Translado", "Equipamentos", "Colete"],
  },
  {
    title: "Quadriciclo até Caburé",
    description: "Trilha de quadriciclo por vegetação e dunas até a praia de Caburé, com almoço e descanso nas redes.",
    duration: "Dia completo - Saída 9h",
    price: "R$ 600",
    image: "/images/quadriciclo.jpeg",
    included: ["Quadriciclo duplo", "Guia", "Treinamento"],
  },
];

export default function PasseiosSection() {
  return (
    <section id="passeios" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Passeios <span className="text-primary">Privativos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore os Lençóis Maranhenses em passeios de um dia, perfeitos para quem tem menos tempo 
            ou prefere experiências mais curtas e personalizadas.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {passeios.map((passeio, index) => (
            <PasseioCard key={index} {...passeio} />
          ))}
        </div>

        {/* Transfers Info */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Transfers Disponíveis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-2">São Luís ↔ Barreirinhas</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Transfer confortável com parada para lanche. Duração: 3h30min
              </p>
              <div className="text-2xl font-bold text-primary">R$ 750/trecho</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-lg mb-2">São Luís ↔ Santo Amaro</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Transfer confortável com parada para lanche. Duração: 3h30min
              </p>
              <div className="text-2xl font-bold text-primary">R$ 700/trecho</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
