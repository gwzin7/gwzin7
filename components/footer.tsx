import { Instagram } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="block mb-6">
              <img
                src="/images/agencia-max-logo.png"
                alt="AgênciaMAX"
                className="h-20 brightness-0 invert"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <p className="text-gray-400 mb-6">
              Transformando negócios através de estratégias digitais inovadoras e resultados mensuráveis.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/agenciamaxbr/"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/AgenciaMAX_BR" className="text-gray-400 hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  SEO & Marketing de Busca
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Gestão de Mídia Paga
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Gestão de Redes Sociais
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Web Design & Desenvolvimento
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Análise de Dados & Relatórios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber dicas, novidades e conteúdos exclusivos sobre marketing digital.
            </p>
            <form className="mb-4">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Seu email"
                  className="rounded-r-none border-gray-600 bg-gray-800 text-white"
                />
                <Button type="submit" className="bg-red-600 text-white rounded-l-none hover:bg-red-700">
                  Inscrever
                </Button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              Ao se inscrever, você concorda com nossa{" "}
              <a href="#" className="text-red-600 hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 AgênciaMAX. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
