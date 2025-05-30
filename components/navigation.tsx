"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed w-full bg-white bg-opacity-95 shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src="/images/agencia-max-logo.png"
            alt="AgênciaMAX"
            className="h-16 brightness-0"
            style={{ filter: "brightness(0)" }}
          />
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="#servicos" className="text-gray-800 hover:text-red-600 font-medium transition duration-300">
            Serviços
          </a>
          <a href="#sobre" className="text-gray-800 hover:text-red-600 font-medium transition duration-300">
            Sobre
          </a>
          <a href="#portfolio" className="text-gray-800 hover:text-red-600 font-medium transition duration-300">
            Portfólio
          </a>
          <a href="#depoimentos" className="text-gray-800 hover:text-red-600 font-medium transition duration-300">
            Depoimentos
          </a>
          <Button
            asChild
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition duration-300"
          >
            <a href="#contato">Fale Conosco</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-800">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-100">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#servicos" className="text-gray-800 py-2 hover:text-red-600 font-medium" onClick={closeMenu}>
              Serviços
            </a>
            <a href="#sobre" className="text-gray-800 py-2 hover:text-red-600 font-medium" onClick={closeMenu}>
              Sobre
            </a>
            <a href="#portfolio" className="text-gray-800 py-2 hover:text-red-600 font-medium" onClick={closeMenu}>
              Portfólio
            </a>
            <a href="#depoimentos" className="text-gray-800 py-2 hover:text-red-600 font-medium" onClick={closeMenu}>
              Depoimentos
            </a>
            <Button
              asChild
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition duration-300 text-center"
            >
              <a href="#contato" onClick={closeMenu}>
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
