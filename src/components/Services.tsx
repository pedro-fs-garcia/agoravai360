"use client"

import { motion } from "framer-motion"
import {
  Award,
} from "lucide-react"
import CtaButton from "./ctaButton"
import { services } from "../data/services"
import ServiceCard from "./ServiceCard"

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <motion.div
        className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-full filter blur-2xl sm:blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-4 sm:right-20 w-16 h-16 sm:w-28 sm:h-28 bg-gradient-to-r from-blue-400/10 to-yellow-400/10 rounded-full filter blur-2xl sm:blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Award className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium text-slate-200">Soluções Completas</span>
          </motion.div>

          <motion.h2 
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Oferecemos soluções completas e personalizadas para{" "}
            <span className="text-yellow-400 font-semibold">impulsionar o crescimento</span> do seu negócio no ambiente
            digital.
          </motion.p>
        </div>

        {/* Grid de serviços */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA final */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Pronto para transformar seu negócio com nossos serviços?
          </p>
          <div className="px-4">
            <CtaButton 
              text="Fale Conosco Agora" 
              primaryIcon={false} 
              message="Olá! Gostaria de saber mais sobre os serviços de desenvolvimento de sites da Agora Vai 360." 
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}