import { motion } from "framer-motion"
import CtaButton from "./ctaButton"

export default function CtaPersonalizado() {
    return(
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.2) 0%, transparent 50%), 
                                 radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
                }}
              />
            </div>

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