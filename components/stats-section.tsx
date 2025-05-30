const stats = [
  { number: "150+", label: "Clientes Satisfeitos" },
  { number: "500+", label: "Campanhas Realizadas" },
  { number: "15M+", label: "Impressões Geradas" },
  { number: "300%", label: "ROI Médio" },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-red-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <p className="text-white text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
