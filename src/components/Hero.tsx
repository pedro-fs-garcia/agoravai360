"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Play, Star, Users, TrendingUp, Award, CheckCircle } from "lucide-react"
import CtaButton from "./ctaButton"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const stats = [
    { icon: <Users className="h-5 w-5" />, value: "200+", label: "Clientes Atendidos" },
    { icon: <TrendingUp className="h-5 w-5" />, value: "300%", label: "Aumento Médio em Leads" },
    { icon: <Award className="h-5 w-5" />, value: "5 Anos", label: "de Experiência" },
  ]

  const features = [
    "Estratégias personalizadas para seu negócio",
    "Resultados mensuráveis em até 30 dias",
    "Suporte especializado 24/7",
    "Foco em ROI e conversão",
  ]

  return (
    <>
    <header>
        <title>Agora Vai 360 | Marketing Digital em São José dos Campos</title>
        <meta name="description" content="Transforme seu negócio com estratégias de marketing digital personalizadas. Aumente suas vendas e visibilidade online com a Agora Vai 360, a agência líder em São José dos Campos." />
        <meta name="keywords" content="marketing digital, agência digital, São José dos Campos, marketing de resultados, SEO, mídias sociais" />
        <meta property="og:title" content="Agora Vai 360 | Marketing Digital em São José dos Campos" />
        <meta property="og:description" content="Transforme seu negócio com estratégias de marketing digital personalizadas. Aumente suas vendas e visibilidade online." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <link rel="canonical" href="https://agoravai360.com.br" />
    </header>
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com gradiente azul escuro elegante */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 -z-20" />

      {/* Overlay com padrão dourado e azul */}
      <div className="absolute inset-0 opacity-8 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.08) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Formas animadas de fundo com tons dourados e azuis */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      >
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-yellow-400/15 to-blue-400/10 rounded-full filter blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-yellow-400/15 rounded-full filter blur-3xl"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-500/8 to-blue-600/8 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Grid pattern overlay sutil */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo principal */}
          <motion.div
            className="space-y-8 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge animado com dourado e azul */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/15 to-blue-500/15 backdrop-blur-sm rounded-full border border-yellow-400/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-yellow-100">Agência #1 em São José dos Campos</span>
            </motion.div>

            {/* Título principal com efeito dourado */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent bg-300%"
                  style={{
                    backgroundSize: "300% 300%",
                    animation: "gradient 3s ease infinite",
                  }}
                >
                  Agora Vai 360
                </motion.span>
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Trazendo sua realidade para o{" "}
                <span className="text-yellow-400 relative">
                  virtual
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </motion.h2>
            </div>

            {/* Descrição com destaque dourado e azul */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
                Transformamos pequenas e médias empresas em{" "}
                <span className="text-yellow-400 font-semibold">líderes digitais</span> através de estratégias
                personalizadas que geram{" "}
                <span className="text-blue-300 font-semibold">resultados reais e mensuráveis</span>.
              </p>

              {/* Lista de features com ícones dourados */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Botões de ação com tema dourado e azul */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <CtaButton text="Quero Crescer Agora" primaryIcon={false} />

              <motion.button
                className="group px-8 py-4 border-2 border-blue-400/40 rounded-lg font-semibold text-blue-100 backdrop-blur-sm hover:bg-blue-400/10 hover:border-blue-400/60 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="#portfolio" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Ver Nossos Resultados
                </Link>
              </motion.button>
            </motion.div>

            {/* Estatísticas com tema dourado e azul */}
            <motion.div
              className="flex flex-wrap gap-8 pt-8 border-t border-slate-600/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <div className="p-2 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-yellow-400/20">
                    <div className="text-yellow-400">{stat.icon}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Lado direito - Visual interativo com tema dourado e azul */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Container principal da imagem */}
            <div className="relative">
              {/* Círculos decorativos animados */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full opacity-20"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* Imagem principal com efeitos elegantes */}
              <motion.div
                className="relative h-[500px] md:h-[600px] w-full bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm rounded-3xl border border-slate-600/30 overflow-hidden shadow-2xl shadow-blue-900/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder para imagem */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <motion.div
                      className="w-32 h-32 mx-auto bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-400/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <TrendingUp className="h-16 w-16 text-white" />
                    </motion.div>
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2 text-yellow-400">Crescimento Garantido</h3>
                      <p className="text-sm text-slate-300">Resultados reais para seu negócio</p>
                    </div>
                  </div>
                </div>

                {/* Elementos flutuantes com tema elegante */}
                <motion.div
                  className="absolute top-20 right-10 bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-yellow-400/30"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="text-yellow-400 text-sm font-medium">+300% ROI</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-20 left-10 bg-blue-900/60 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="text-blue-300 text-sm font-medium">24/7 Suporte</div>
                </motion.div>

                {/* Efeito de brilho sutil */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent"
                  animate={{
                    x: [-100, 600],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatDelay: 2,
                  }}
                />

                {/* Padrão de pontos decorativo */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(255,215,0,0.3) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll elegante */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-400/40 rounded-full flex justify-center"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-3 bg-yellow-400/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
    </>
  )
}
