import { Search, Megaphone, Instagram, Mail, Layout, BarChart3, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "SEO & Marketing de Busca",
    description:
      "Otimizamos seu site para os motores de busca, aumentando sua visibilidade orgânica e garantindo que sua marca seja encontrada pelo público certo.",
  },
  {
    icon: Megaphone,
    title: "Gestão de Mídia Paga",
    description:
      "Criamos e gerenciamos campanhas de anúncios altamente segmentadas no Google, Facebook, Instagram e outras plataformas para maximizar seu ROI.",
  },
  {
    icon: Instagram,
    title: "Gestão de Redes Sociais",
    description:
      "Desenvolvemos estratégias de conteúdo e engajamento para suas redes sociais, construindo uma comunidade ativa e fortalecendo sua presença digital.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Criamos campanhas de email marketing personalizadas que nutrem leads, convertem clientes e fortalecem o relacionamento com sua audiência.",
  },
  {
    icon: Layout,
    title: "Web Design & Desenvolvimento",
    description:
      "Desenvolvemos sites responsivos, landing pages e e-commerces otimizados para conversão, com design moderno e experiência de usuário excepcional.",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados & Relatórios",
    description:
      "Monitoramos e analisamos o desempenho das suas campanhas, fornecendo insights valiosos para otimizar suas estratégias e maximizar resultados.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Oferecemos soluções completas de marketing digital para impulsionar sua marca no ambiente online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transition duration-300 border-t-4 border-red-600 hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <a href="#contato" className="text-red-600 font-medium flex items-center hover:underline">
                Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
