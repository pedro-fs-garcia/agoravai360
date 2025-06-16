"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import CtaButton from "./ctaButton"
import { differentials } from "../data/differentials"

export default function Cta() {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden"
    >

      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-yellow-400/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge inicial */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-yellow-100">Transforme Seu Negócio Agora</span>
          </motion.div>

          {/* Título principal */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Pronto para{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              transformar
            </span>
            <br />
            sua presença digital?
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            className="text-xl md:text-2xl mb-12 text-slate-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Entre em contato agora mesmo e descubra como podemos ajudar seu negócio a{" "}
            <span className="text-yellow-400 font-semibold">crescer exponencialmente</span> no ambiente digital.
          </motion.p>

          {/* Botões de ação */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >

            <CtaButton text={"Falar no WhatsApp"} variant="primary" />

          </motion.div>

          {/* Seção de benefícios */}
          <motion.div
            className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-slate-600/30 p-8 md:p-12 shadow-2xl shadow-blue-900/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              Por que escolher a <span className="text-yellow-400">Agora Vai 360</span>?
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {differentials.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="relative group text-center p-4 rounded-lg hover:bg-slate-900/40 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Ícone */}
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full group-hover:scale-105 transition-transform duration-300">
                    <div className="text-yellow-400">{benefit.icon}</div>
                  </div>

                  {/* Título */}
                  <h4 className="font-medium text-white text-sm sm:text-base group-hover:text-yellow-400 transition-colors duration-300">
                    {benefit.title}
                  </h4>

                  {/* Descrição oculta inicialmente, exibida no hover */}
                  <p className="absolute left-0 right-0 bottom-[-60px] bg-slate-800 text-slate-300 text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mx-4 shadow-lg pointer-events-none">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 mb-4 text-lg">
              <span className="text-yellow-400 font-semibold">São José dos Campos</span> e{" "}
              <span className="text-blue-300 font-semibold">Vale do Paraíba</span>
            </p>
            <p className="text-sm text-slate-400">
              Especialistas em transformação digital para pequenas e médias empresas
            </p>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
