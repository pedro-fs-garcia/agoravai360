import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

type Props = {
    resetForm:any
}

export default function PainelGoodSubmission({resetForm}:Props) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-8"
        >
            <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
                <CheckCircle className="h-10 w-10 text-white" />
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Solicitação Enviada!
                </span>
            </h3>

            <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
                Obrigado pelo seu interesse! Sua solicitação foi enviada com sucesso. Nossa equipe entrará em contato em
                breve para discutir seu projeto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-900 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/25"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Enviar Nova Solicitação
                </motion.button>

                <motion.a
                    href="/#portfolio"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-400/40 text-blue-100 hover:bg-blue-400/10 hover:border-blue-400/60 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Ver Nosso Portfólio
                </motion.a>
            </div>
        </motion.div>
    )
}