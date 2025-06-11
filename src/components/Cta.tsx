"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Cta() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua presença digital?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Entre em contato agora mesmo e descubra como podemos ajudar seu negócio a crescer no ambiente digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100">
              <Link
                to="https://wa.me/5512000000000?text=Olá! Gostaria de saber mais sobre os serviços da Agora Vai 360."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Falar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </button>

            <button className="border-white text-white hover:bg-white/10">
              <Link to="tel:+551200000000">Ligar Agora</Link>
            </button>
          </div>

          <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Por que escolher a Agora Vai 360?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-medium mb-2">Atendimento Personalizado</h4>
                <p className="text-white/80">Entendemos as necessidades específicas do seu negócio.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Resultados Comprovados</h4>
                <p className="text-white/80">Estratégias que geram leads qualificados e aumentam suas vendas.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Foco Regional</h4>
                <p className="text-white/80">Especialistas no mercado de São José dos Campos e Vale do Paraíba.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
