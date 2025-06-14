import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import CtaButton from "./ctaButton"
import ScrollIndicator from "./ui/ScrollIndicator"

const FloatingCard = ({ delay, x, y, children }: any) => (
  <motion.div
    className="absolute bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    whileHover={{ scale: 1.05, rotate: 2 }}
  >
    {children}
  </motion.div>
)

const CodeBlock = ({ delay }: any) => (
  <motion.div
    className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 font-mono text-sm shadow-2xl max-w-xs"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.8 }}
  >
    <div className="flex items-center gap-2 mb-2">
      <div className="w-3 h-3 bg-red-400 rounded-full" />
      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
      <div className="w-3 h-3 bg-green-400 rounded-full" />
    </div>
    <div className="text-slate-300">
      <div className="text-blue-300">&lt;website&gt;</div>
      <div className="ml-2 text-green-300">status: <span className="text-yellow-300">"online"</span></div>
      <div className="ml-2 text-green-300">visitors: <span className="text-yellow-300">24/7</span></div>
      <div className="text-blue-300">&lt;/website&gt;</div>
    </div>
  </motion.div>
)

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with dynamic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 -z-20" />

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20 -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Main content */}
          <motion.div
            className="space-y-8 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 text-sm font-medium text-yellow-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              Trazendo a sua realidade para o virtual
            </motion.div>

            {/* Main title */}
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Agora Vai {" "}
              </motion.span>

              <span className="text-white">360</span>
            </motion.h1>

            {/* Subtitle with enhanced impact */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Seu negócio merece mais que um simples{" "}
              <motion.span
                className="relative font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                site
              </motion.span>
            </motion.h2>

            {/* Enhanced description */}
            <motion.div
              className="space-y-4 text-xl text-slate-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p>
                Desenvolvemos <span className="text-yellow-400 font-semibold">sites e estratégias</span> que geram resultados reais.
              </p>
            </motion.div>

            {/* CTA section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <CtaButton text="Criar Minha Presença Digital" />
              <a href="/#portfolio">
                <motion.button
                  className="px-8 py-4 border-2 border-slate-400/40 text-slate-300 font-semibold rounded-lg hover:border-yellow-400/60 hover:text-yellow-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Portfólio
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Interactive elements */}
          <div className="relative h-full hidden lg:block">
            {/* Floating cards */}
            <FloatingCard delay={1.0} x="10%" y="15%">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">📱</div>
                <div className="text-sm text-slate-300">Responsive</div>
              </div>
            </FloatingCard>

            <FloatingCard delay={1.2} x="60%" y="25%">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">⚡</div>
                <div className="text-sm text-slate-300">Ultra Rápido</div>
              </div>
            </FloatingCard>

            <FloatingCard delay={1.4} x="20%" y="60%">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">🔒</div>
                <div className="text-sm text-slate-300">100% Seguro</div>
              </div>
            </FloatingCard>

            <FloatingCard delay={1.6} x="70%" y="70%">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">🎯</div>
                <div className="text-sm text-slate-300">SEO Otimizado</div>
              </div>
            </FloatingCard>

            {/* Code block */}
            <CodeBlock delay={1.8} />

            {/* Central glowing orb */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-yellow-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}