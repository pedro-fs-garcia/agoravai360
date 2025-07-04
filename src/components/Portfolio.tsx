"use client"

import { motion } from "framer-motion"
import CtaButton from "./ctaButton"
import projects from "../data/projects.json"
import PortfolioCard from "./PortfolioCard"
import { Trophy } from "lucide-react"


export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-100">Projetos de Sucesso</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Nosso Portfólio
            </span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos e os{" "}
            <span className="text-yellow-400 font-semibold">resultados extraordinários</span> que alcançamos para nossos
            clientes.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <PortfolioCard project={project} index={index} key={project.title} />
          ))}
        </motion.div>

        {/* CTA final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 mb-6 text-lg">Gostou dos nossos resultados? Vamos criar algo incrível para o seu negócio também!</p>
          <CtaButton 
            text="Quero Resultados Como Esse" 
            primaryIcon={false} 
            size="lg" 
            message="Olá! Gostei do portfolio de sites da Agora Vai 360 e gostaria de um site para o meu negócio."
          />
        </motion.div>
      </div>
    </section>
  )
}
