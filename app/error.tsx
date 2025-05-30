"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Algo deu errado!</h2>
        <p className="text-gray-700 mb-6">Pedimos desculpas pelo inconveniente. Ocorreu um erro inesperado.</p>
        <Button
          onClick={reset}
          className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition duration-300"
        >
          Tentar novamente
        </Button>
      </div>
    </div>
  )
}
