"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { MapPin, Mail, Phone, Instagram } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    nome_empresa: "",
    servicos_interesse: "",
    mensagem: "",
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ text: string; color: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.privacy) {
      setStatusMessage({
        text: "Preencha todos os campos obrigatórios e aceite a política de privacidade.",
        color: "red",
      })
      return
    }

    setIsSubmitting(true)
    setStatusMessage(null)

    try {
      // Inicializar EmailJS
      emailjs.init("nFx6ssoh064cutaUF")

      // Preparar os dados do template
      const templateParams = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        nome_empresa: formData.nome_empresa,
        servicos_interesse: formData.servicos_interesse,
        mensagem: formData.mensagem,
        to_email: "agenciamaxbrasil@gmail.com",
      }

      // Enviar email usando EmailJS
      const result = await emailjs.send("service_z1oma6g", "template_yq4ey6j", templateParams, "nFx6ssoh064cutaUF")

      console.log("EmailJS result:", result)

      setStatusMessage({
        text: "E-mail enviado com sucesso! Entraremos em contato em breve.",
        color: "green",
      })

      // Reset form
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        nome_empresa: "",
        servicos_interesse: "",
        mensagem: "",
        privacy: false,
      })
    } catch (error) {
      console.error("Error sending email:", error)
      setStatusMessage({
        text: "Erro ao enviar o e-mail. Tente novamente.",
        color: "red",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
            <p className="text-lg text-gray-700 mb-8">
              Estamos prontos para ajudar sua empresa a alcançar todo o seu potencial no ambiente digital.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                  <p className="text-gray-700">Av. César Romero, 1553, Feira de Santana - BA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-700">agenciamaxbrasil@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Telefone</h4>
                  <p className="text-gray-700">(75) 98857-6357</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/agenciamaxbr/"
                  className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/AgenciaMAX_BR"
                  className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
                >
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
          </div>

          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="telefone" className="block text-gray-700 font-medium mb-2">
                  Telefone
                </label>
                <Input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="nome_empresa" className="block text-gray-700 font-medium mb-2">
                  Empresa
                </label>
                <Input
                  type="text"
                  id="nome_empresa"
                  name="nome_empresa"
                  value={formData.nome_empresa}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="servicos_interesse" className="block text-gray-700 font-medium mb-2">
                  Serviço de Interesse
                </label>
                <Input
                  type="text"
                  id="servicos_interesse"
                  name="servicos_interesse"
                  value={formData.servicos_interesse}
                  onChange={handleChange}
                  placeholder="Serviços de interesse"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Conte-nos sobre seu projeto ou necessidade"
                  required
                />
              </div>

              <div className="mb-6 flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-1 mr-3 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  required
                />
                <label htmlFor="privacy" className="text-gray-700">
                  Concordo com a{" "}
                  <a href="#" className="text-red-600 hover:underline">
                    Política de Privacidade
                  </a>{" "}
                  e autorizo o contato da AgênciaMAX.
                </label>
              </div>

              {statusMessage && (
                <p style={{ color: statusMessage.color }} className="mb-4 font-semibold">
                  {statusMessage.text}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
              >
                {isSubmitting ? "Enviando... ⏳" : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
