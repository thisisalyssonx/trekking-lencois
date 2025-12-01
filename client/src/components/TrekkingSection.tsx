import TrekkingCard from "./TrekkingCard";

const trekkingRoutes = [
  {
    title: "Trekking 2 Dias e 1 Noite",
    days: "2 dias / 1 noite",
    distance: "41km",
    image: "/images/trekking-group.jpg",
    route: "Barreirinhas → Atins → Baixa Grande → Lagoa Bonita → Barreirinhas",
    highlights: [
      "Passeio de lancha pelo Rio Preguiças",
      "Visita à Ilha dos Macacos (Vassouras)",
      "Almoço na praia de Caburé",
      "Pernoite no oásis de Baixa Grande",
      "Nascer do sol nas dunas",
      "Lagoa Bonita e outras lagoas cristalinas",
    ],
    priceFrom: "R$ 1.550",
  },
  {
    title: "Trekking 3 Dias e 2 Noites",
    days: "3 dias / 2 noites",
    distance: "37km",
    image: "/images/trekking3diase2noites.jpeg",
    route: "Barreirinhas → Atins → Baixa Grande → Rancharia → Betânia → Santo Amaro",
    highlights: [
      "Travessia completa pelo Rio Preguiças",
      "Três oásis diferentes: Baixa Grande, Rancharia e Betânia",
      "Lagoa do Cajueiro com suas curvas famosas",
      "Convivência com comunidades tradicionais",
      "Transfer de volta para Santo Amaro",
      "Experiência cultural autêntica",
    ],
    priceFrom: "R$ 1.950",
  },
  {
    title: "Trekking 4 Dias e 3 Noites",
    days: "4 dias / 3 noites",
    distance: "70km",
    image: "/images/sunset-dunes.jpg",
    route: "Barreirinhas → Atins → Baixa Grande → Queimada dos Britos → Rancharia → Betânia → Santo Amaro",
    highlights: [
      "Travessia tradicional completa",
      "Quatro oásis: Baixa Grande, Queimada dos Britos, Rancharia e Betânia",
      "Pôr do sol em dunas exclusivas",
      "Banhos em lagoas isoladas",
      "Imersão total na natureza",
      "Experiência de 4 dias inesquecível",
    ],
    priceFrom: "R$ 2.250",
  },
  {
    title: "Trekking 5 Dias e 4 Noites",
    days: "5 dias / 4 noites",
    distance: "51km",
    image: "/images/trekking5diase4noites.jpeg",
    route: "Barreirinhas → Atins → Baixa Grande → Buriti Grosso → Rancharia → Betânia → Santo Amaro (descida de caiaque)",
    highlights: [
      "Aventura completa de 5 dias",
      "Descida de caiaque de 15km pelo Rio Alegre",
      "Cinco oásis diferentes",
      "Lagoas cristalinas e dunas douradas",
      "Convivência com nativos dos Lençóis",
      "Final épico com caiaque até Santo Amaro",
    ],
    priceFrom: "R$ 2.750",
  },
];

export default function TrekkingSection() {
  return (
    <section id="roteiros" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Roteiros de <span className="text-primary">Trekking</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Escolha sua aventura pelos Lençóis Maranhenses. Oferecemos roteiros de 2 a 5 dias, 
            com diferentes níveis de dificuldade e experiências únicas em cada travessia.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {trekkingRoutes.map((route, index) => (
            <TrekkingCard key={index} {...route} />
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-primary/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-center">O que está incluído?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🏕️</div>
              <h4 className="font-semibold mb-2">Hospedagem</h4>
              <p className="text-sm text-muted-foreground">
                Pernoites em casas de apoio com redários e energia solar
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">🍽️</div>
              <h4 className="font-semibold mb-2">Alimentação</h4>
              <p className="text-sm text-muted-foreground">
                Todas as refeições nos oásis incluídas no pacote
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">👨‍🏫</div>
              <h4 className="font-semibold mb-2">Guia Experiente</h4>
              <p className="text-sm text-muted-foreground">
                Guias locais experientes e conhecedores da região
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
