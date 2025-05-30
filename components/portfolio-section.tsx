import { Button } from "./ui/button"

const portfolioItems = [
  {
    image: "/images/portfolio-ecommerce-shopee.png",
    title: "E-commerce Moda Sustentável",
    description:
      "Desenvolvimento de plataforma de e-commerce estilo Shopee com banners promocionais, flash sales, sistema de cupons e interface otimizada para conversão. Aumento de 85% nas vendas online.",
    tags: ["E-commerce", "UX/UI", "Conversão", "Mobile-first"],
  },
  {
    image: "/images/portfolio-social-media.jpg",
    title: "Campanha Redes Sociais",
    description:
      "Estratégia de conteúdo e gestão de redes sociais para rede de restaurantes, com aumento de 150% no engajamento.",
    tags: ["Redes Sociais", "Conteúdo", "Engajamento"],
  },
  {
    image: "/images/portfolio-google-ads.jpg",
    title: "Campanha Google Ads",
    description:
      "Gestão de campanhas de Google Ads para empresa de tecnologia, com redução de 40% no custo por aquisição.",
    tags: ["Google Ads", "SEM", "Conversão"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nosso Portfólio</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-64 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300"
          >
            <a href="#contato">Ver Mais Projetos</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
