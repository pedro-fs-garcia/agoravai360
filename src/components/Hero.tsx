"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 -z-10" />

      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-teal-500/10 rounded-full">
              <p className="text-sm font-medium text-blue-700">Marketing Digital & Desenvolvimento Web</p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Agora Vai 360
              </span>
              <br />
              <span className="text-gray-900">Trazendo sua realidade para o virtual</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Estratégias de marketing digital personalizadas que geram resultados concretos e sustentáveis, ajudando
              negócios a crescerem consistentemente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-medium px-8"
              >
                <Link
                  to="https://wa.me/5512000000000?text=Olá! Gostaria de saber mais sobre os serviços da Agora Vai 360."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </Link>
              </button>

              <button className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link to="#servicos">Conheça nossos serviços</Link>
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <p className="text-sm text-gray-500">Confiado por empresas em:</p>
              <p className="font-semibold text-gray-700">São José dos Campos</p>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <p className="font-semibold text-gray-700">Vale do Paraíba</p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Marketing Digital e Desenvolvimento Web"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
