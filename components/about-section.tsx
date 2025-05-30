import { Check } from "lucide-react"

const features = [
  {
    title: "Estratégia Personalizada",
    description: "Soluções sob medida para seu negócio",
  },
  {
    title: "Foco em Resultados",
    description: "Métricas claras e objetivas",
  },
  {
    title: "Equipe Especializada",
    description: "Profissionais certificados",
  },
  {
    title: "Transparência",
    description: "Comunicação clara e direta",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="/images/agencia-max-team.png"
              alt="Equipe AgênciaMAX trabalhando em reunião estratégica"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre a AgênciaMAX</h2>
            <p className="text-lg text-gray-700 mb-6">
              Somos uma agência de marketing digital focada em resultados. Desde 2018, ajudamos empresas de todos os
              portes a expandir sua presença online e alcançar seus objetivos de negócio através de estratégias
              personalizadas e inovadoras.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nossa equipe é formada por especialistas apaixonados por marketing digital, sempre atualizados com as
              últimas tendências e tecnologias do mercado. Trabalhamos em parceria com nossos clientes, entendendo suas
              necessidades e desenvolvendo soluções sob medida.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-full mr-4">
                    <Check className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
