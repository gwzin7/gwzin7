import { Button } from "./ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 bg-white bg-opacity-90 p-8 md:p-12 rounded-lg shadow-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transforme sua <span className="text-red-600">presença digital</span> com estratégias que geram resultados
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              A AgênciaMAX desenvolve soluções personalizadas de marketing digital para impulsionar seu negócio no
              ambiente online, aumentando sua visibilidade e convertendo visitantes em clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
              >
                <a href="#contato">Solicitar Proposta</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition duration-300"
              >
                <a href="#servicos">Nossos Serviços</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10"></div>
        </div>
      </div>
    </section>
  )
}
