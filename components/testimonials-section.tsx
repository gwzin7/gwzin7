import { Star, User } from "lucide-react"

const testimonials = [
  {
    name: "Renata Oliveira",
    position: "Diretora de Marketing, Moda Sustentável",
    content:
      "A AgênciaMAX transformou completamente nossa presença digital. Em apenas 3 meses, aumentamos nossas vendas online em 70% e expandimos nossa base de clientes. A equipe é extremamente profissional e atenciosa.",
  },
  {
    name: "Carlos Mendes",
    position: "CEO, TechSolutions",
    content:
      "As campanhas de Google Ads desenvolvidas pela AgênciaMAX superaram todas as nossas expectativas. Conseguimos reduzir o custo por lead em 40% e aumentar a taxa de conversão em 25%. Recomendo sem hesitar!",
  },
  {
    name: "Fernanda Costa",
    position: "Proprietária, Rede Sabor Gourmet",
    content:
      "A estratégia de conteúdo desenvolvida pela AgênciaMAX para nossas redes sociais foi um divisor de águas. Nosso engajamento aumentou significativamente e conseguimos construir uma comunidade fiel ao redor da nossa marca.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Conheça a experiência de quem já transformou seu negócio com nossas soluções de marketing digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="text-red-600 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
