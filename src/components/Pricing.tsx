import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { pricingPlans } from "../data/pricingPlans"
import CtaPersonalizado from "./ctaPersonalizado"
import PriceCard from "./PriceCard"

export default function Pricing() {

  return (
    <section
      id="precos"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden"
    >
      {/* Formas decorativas */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

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
            <Sparkles className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium text-slate-700">Planos Personalizados</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
              Preços e Benefícios
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Escolha o site ideal para o seu negócio e comece a{" "}
            <span className="text-yellow-600 font-semibold">transformar sua presença digital</span> hoje mesmo.
          </p>

        </motion.div>

        {/* Cards de preços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PriceCard plan={plan} index={index} key={plan.name} />
          ))}
        </div>

        <CtaPersonalizado />
      </div>
    </section>
  )
}
