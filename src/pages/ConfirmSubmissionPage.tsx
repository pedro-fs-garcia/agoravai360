import { motion } from "framer-motion"
import { CheckCircle, ArrowLeft, Clock } from "lucide-react"
import { useEffect } from "react"

export default function ConfirmSubmissionPage() {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0)
    }, [])

    const handleGoBack = () => {
        window.history.back()
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6">

            <motion.div
                className="relative z-10 max-w-2xl w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Success Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                    
                    {/* Success Icon */}
                    <motion.div
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mb-8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                        <CheckCircle className="h-10 w-10 text-white" />
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Mensagem Enviada!
                        </h1>
                        
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            Recebemos seus dados com sucesso. Nossa equipe entrará em contato em breve para discutir seu projeto.
                        </p>

                        {/* Info Cards */}
                            <motion.div
                                className="flex items-center gap-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 mb-8"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <Clock className="h-5 w-5 text-blue-400" />
                                <div className="text-left">
                                    <p className="text-sm text-slate-400">Tempo de resposta</p>
                                    <p className="text-white font-medium">Até 24 horas</p>
                                </div>
                            </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <button
                                onClick={handleGoBack}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-900 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Voltar ao Site
                            </button>
                            
                            <a
                                href="/"
                                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-600/50 text-slate-300 hover:border-yellow-400/50 hover:text-yellow-400 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                            >
                                Página Inicial
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}