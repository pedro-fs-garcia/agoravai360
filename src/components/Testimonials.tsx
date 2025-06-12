"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote, Star, TrendingUp, Users, Award } from "lucide-react"
import CtaButton from "./ctaButton"

import testimonials from "../data/testimonials.json"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([])
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const endIndex = currentIndex + itemsPerView
    setVisibleTestimonials(testimonials.slice(currentIndex, endIndex))
  }, [currentIndex, itemsPerView])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, itemsPerView, isAutoPlaying])

  const nextSlide = () => {
    if (currentIndex + itemsPerView < testimonials.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(testimonials.length - itemsPerView)
    }
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  return (
    <section
      id="depoimentos"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.15) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Formas decorativas animadas */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-full filter blur-3xl"
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
        className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-yellow-400/10 rounded-full filter blur-3xl"
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
        {/* Header da seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Users className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-100">Clientes Satisfeitos</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              O Que Nossos
            </span>
            <br />
            <span className="text-white">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Veja os depoimentos de clientes que{" "}
            <span className="text-yellow-400 font-semibold">transformaram seus negócios</span> com nossas soluções de
            marketing digital.
          </p>
        </motion.div>

        {/* Carrossel de depoimentos */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex space-x-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-slate-600/30 shadow-2xl shadow-blue-900/20 hover:shadow-yellow-500/20 transition-all duration-500 group overflow-hidden">
                      {/* Efeito de brilho */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{
                          x: [-100, 400],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        }}
                      />

                      <CardContent className="p-8 relative z-10">
                        {/* Header do card */}
                        <div className="flex items-start justify-between mb-6">
                          {/* Quote icon */}
                          <motion.div
                            className="p-3 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-full border border-yellow-400/30"
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Quote className="h-6 w-6 text-yellow-400" />
                          </motion.div>

                          {/* Categoria */}
                          <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/30">
                            {testimonial.category}
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Conteúdo do depoimento */}
                        <p className="text-slate-200 mb-6 italic leading-relaxed text-lg">"{testimonial.content}"</p>

                        {/* Métrica de resultado */}
                        <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 rounded-lg border border-yellow-400/20">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-yellow-400" />
                            <span className="text-sm text-slate-300">Resultado:</span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-yellow-400">{testimonial.metric}</div>
                            <div className="text-xs text-slate-400">{testimonial.metricLabel}</div>
                          </div>
                        </div>

                        {/* Informações do cliente */}
                        <div className="flex items-center">
                          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                            <Avatar className="h-14 w-14 mr-4 border-2 border-yellow-400/30">
                              <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                              <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-900 font-semibold">
                                {testimonial.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          </motion.div>
                          <div>
                            <p className="font-semibold text-white text-lg group-hover:text-yellow-400 transition-colors duration-300">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-slate-400">{testimonial.position}</p>
                            <p className="text-sm text-yellow-400 font-medium">{testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles de navegação */}
          <motion.button
            onClick={() => {
              prevSlide()
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 3000)
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-gradient-to-r from-slate-800 to-blue-800 hover:from-slate-700 hover:to-blue-700 rounded-full p-3 shadow-xl border border-slate-600/30 transition-all duration-300 group"
            aria-label="Depoimento anterior"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6 text-yellow-400 group-hover:text-yellow-300" />
          </motion.button>

          <motion.button
            onClick={() => {
              nextSlide()
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 3000)
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-gradient-to-r from-slate-800 to-blue-800 hover:from-slate-700 hover:to-blue-700 rounded-full p-3 shadow-xl border border-slate-600/30 transition-all duration-300 group"
            aria-label="Próximo depoimento"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-6 w-6 text-yellow-400 group-hover:text-yellow-300" />
          </motion.button>
        </div>

        {/* Indicadores de página */}
        <div className="flex justify-center mt-12 gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index >= currentIndex && index < currentIndex + itemsPerView
                  ? "bg-gradient-to-r from-yellow-400 to-amber-400 scale-125"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Estatísticas de satisfação */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { value: "200+", label: "Clientes Atendidos", icon: <Users className="h-6 w-6" /> },
            { value: "98%", label: "Satisfação", icon: <Star className="h-6 w-6" /> },
            { value: "300%", label: "ROI Médio", icon: <TrendingUp className="h-6 w-6" /> },
            { value: "5 Anos", label: "Experiência", icon: <Award className="h-6 w-6" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-full border border-yellow-400/30 mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-yellow-400">{stat.icon}</div>
              </motion.div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 mb-6 text-lg">Quer ser o próximo case de sucesso? Fale conosco agora mesmo!</p>
          <CtaButton text="Quero Resultados Como esses" primaryIcon={false}  />
        </motion.div>
      </div>
    </section>
  )
}
