import { motion } from "framer-motion"
import CtaButton from "./ctaButton"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 -z-20" />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-12 border">
        <div className="grid lg:grid-cols-2 gap-20 h-full">
          <motion.div
            className="space-y-10 text-white h-full flex flex-col justify-between border"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent animate-gradient bg-[length:300%_300%]"
                style={{
                  animation: "gradient 6s ease infinite"
                }}
              >
                Agora Vai 360
              </motion.span>
            </motion.h1>

            <div className="space-y-24">
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                O seu negócio precisa de um{" "}
                <span className="text-yellow-400 relative font-bold">
                  site
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </motion.h2>
            </div>

            {/* Descrição com destaque suave e claro */}
            <motion.p
              className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Ele é seu cartão de visitas digital. Seu vendedor e vitrine 24h. Ele é{" "}
              <span className="text-blue-300 font-semibold">
                sua casa online
              </span>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <CtaButton text="Criar Meu Site" primaryIcon={false} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-400/40 rounded-full flex justify-center"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-yellow-400/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
