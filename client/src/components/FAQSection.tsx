import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como é o clima durante o Trekking nos Lençóis Maranhenses?",
    answer:
      "O clima nos Lençóis Maranhenses é tipicamente quente e úmido, com temperaturas médias variando entre 25°C e 35°C durante o dia e podendo cair para cerca de 20°C à noite. É comum ocorrerem chuvas esporádicas, especialmente durante a estação chuvosa, entre janeiro e maio.",
  },
  {
    question: "Qual é o nível de dificuldade do Trekking?",
    answer:
      "O nível de dificuldade varia de acordo com o percurso escolhido. Em geral, o Trekking nos Lençóis Maranhenses é considerado de dificuldade moderada, devido às distâncias a serem percorridas em terrenos arenosos e à exposição ao sol. Porém, fazemos paradas durante a trilha para banho e fotos nas principais lagoas, tornando a experiência mais confortável.",
  },
  {
    question: "Quantos dias são necessários para fazer o Trekking?",
    answer:
      "Oferecemos roteiros de 2 a 5 dias, dependendo das suas preferências e disponibilidade de tempo. O roteiro de 2 dias é ideal para quem tem menos tempo, enquanto o de 5 dias oferece a experiência mais completa e imersiva pelos Lençóis Maranhenses.",
  },
  {
    question: "Existe alguma restrição de idade?",
    answer:
      "Não há restrição de idade específica para participar do Trekking nos Lençóis Maranhenses, mas é importante considerar a condição física e os limites individuais de cada pessoa. Recomendamos consultar nossos guias para avaliar o roteiro mais adequado para cada perfil.",
  },
  {
    question: "O que devo levar para o Trekking?",
    answer:
      "Recomendamos: mochila de 30-50L, roupas leves com proteção UV, protetor solar, repelente, cantil de água, lanches rápidos (castanhas, barras de cereal), sandálias ou papetes, produtos de higiene pessoal, medicamentos pessoais, câmera, lanterna e capa de chuva. Não leve mais de 10kg de bagagem.",
  },
  {
    question: "Onde ficamos hospedados durante o Trekking?",
    answer:
      "Os pernoites são em casas de apoio simples nos oásis, com redários (redes), energia solar e internet básica. As acomodações são modestas mas confortáveis, proporcionando uma experiência autêntica de convivência com as comunidades locais.",
  },
  {
    question: "As refeições estão incluídas?",
    answer:
      "Sim! Todos os roteiros de trekking incluem alimentação completa nos oásis (café da manhã, almoço e jantar). A comida é caseira e preparada pelos moradores locais, oferecendo uma experiência gastronômica regional autêntica.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Oferecemos três opções: (1) 50% antecipado via PIX/transferência + 50% no embarque; (2) 100% antecipado com 5% de desconto; (3) Para pagamentos internacionais, 50% via WeTransfer + 50% no embarque. Consulte opções de parcelamento com nosso atendimento.",
  },
  {
    question: "Qual é a política de cancelamento?",
    answer:
      "Seguimos a deliberação normativa da Embratur: desistência com até 31 dias = reembolso de 90%; 21-30 dias = 80%; 7-20 dias = 50%; menos de 7 dias = sem reembolso. Recomendamos contratar seguro viagem para maior tranquilidade.",
  },
  {
    question: "Há sinal de celular durante o Trekking?",
    answer:
      "O sinal de celular é limitado ou inexistente em grande parte do percurso. As casas de apoio possuem energia solar e internet básica, mas recomendamos aproveitar a desconexão digital para uma imersão completa na natureza.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre os trekkings e passeios nos Lençóis Maranhenses. 
            Se tiver outras perguntas, entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <button
            onClick={() => window.open("https://wa.me/5598984659626", "_blank")}
            className="text-primary font-semibold hover:underline"
          >
            Fale conosco no WhatsApp →
          </button>
        </div>
      </div>
    </section>
  );
}
