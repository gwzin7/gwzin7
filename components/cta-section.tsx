import { Button } from "./ui/button"
import { Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="bg-white p-10 rounded-lg shadow-xl border border-red-200 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pronto para impulsionar seu negócio?</h2>
            <p className="text-lg text-gray-700">
              Agende uma consultoria gratuita e descubra como podemos ajudar sua empresa a crescer no ambiente digital.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              <a href="#contato">Agendar Consultoria</a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition duration-300"
            >
              <a href="https://wa.me/qr/HBQHBXUI4OFKA1" className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> (75) 98857-6357
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
