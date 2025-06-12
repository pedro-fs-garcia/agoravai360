"use client"

import { motion } from "framer-motion"
import { Star, CheckCircle, Award } from "lucide-react"
import CtaButton from "./ctaButton"

export default function Cta() {
  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Atendimento Personalizado",
      description: "Entendemos as necessidades específicas do seu negócio e criamos soluções sob medida.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Resultados Comprovados",
      description: "Estratégias que geram leads qualificados e aumentam suas vendas de forma consistente.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Foco Regional",
      description: "Especialistas no mercado de São José dos Campos e Vale do Paraíba com conhecimento local.",
    },
  ]

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 50%), 
                           radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Formas animadas de fundo */}
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

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
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

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-full border border-yellow-400/30 mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-yellow-400">{benefit.icon}</div>
                  </motion.div>
                  <h4 className="font-semibold text-lg mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Estatísticas rápidas */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-600/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              {[
                { value: "200+", label: "Clientes Satisfeitos" },
                { value: "300%", label: "Aumento Médio ROI" },
                { value: "24/7", label: "Suporte Disponível" },
                { value: "5 Anos", label: "de Experiência" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA final */}
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

      {/* Efeito de brilho */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/3 to-transparent"
        animate={{
          x: [-100, window.innerWidth + 100],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          repeatDelay: 3,
        }}
      />
    </section>
  )
}
