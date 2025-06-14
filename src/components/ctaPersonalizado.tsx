import { motion } from "framer-motion"
import CtaButton from "./ctaButton"

export default function CtaPersonalizado() {
    return(
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa de uma solução{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  personalizada
                </span>
                ?
              </h3>
              <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
                Cada negócio é único. Vamos criar uma estratégia sob medida para suas necessidades específicas.
              </p>

              <CtaButton text="Solicitar Proposta Personalizada" secondaryIcon={false}  />

            </div>
          </div>
        </motion.div>
    )
}