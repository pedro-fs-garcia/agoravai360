import { motion } from "framer-motion";
import { FileText, Mail, Phone, Send, User } from "lucide-react";

type Props = {
    handleSubmit:any,
    handleInputChange: any,
    isSubmitting:any,
    formData:any,
    errors: any
}


export default function Formulario({handleSubmit, handleInputChange, isSubmitting, formData, errors}:Props) {
    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Nome */}
                <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        <User className="h-4 w-4 inline mr-2" />
                        Nome completo *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.name
                            ? "border-red-400 focus:ring-red-400/50"
                            : "border-slate-600/50 focus:ring-yellow-400/50 focus:border-yellow-400/50"
                            }`}
                        placeholder="Seu nome completo"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </motion.div>

                {/* E-mail */}
                <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        <Mail className="h-4 w-4 inline mr-2" />
                        E-mail *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.email
                            ? "border-red-400 focus:ring-red-400/50"
                            : "border-slate-600/50 focus:ring-yellow-400/50 focus:border-yellow-400/50"
                            }`}
                        placeholder="seu@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </motion.div>
            </div>

            {/* WhatsApp */}
            <motion.div
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
            >
                <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-300 mb-2">
                    <Phone className="h-4 w-4 inline mr-2" />
                    WhatsApp *
                </label>
                <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.whatsapp
                        ? "border-red-400 focus:ring-red-400/50"
                        : "border-slate-600/50 focus:ring-yellow-400/50 focus:border-yellow-400/50"
                        }`}
                    placeholder="(12) 99999-9999"
                />
                {errors.whatsapp && <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>}
            </motion.div>

            {/* Descrição do Projeto */}
            <motion.div
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
            >
                <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">
                    <FileText className="h-4 w-4 inline mr-2" />
                    Descreva sua necessidade e objetivos do projeto *
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${errors.description
                        ? "border-red-400 focus:ring-red-400/50"
                        : "border-slate-600/50 focus:ring-yellow-400/50 focus:border-yellow-400/50"
                        }`}
                    placeholder="Conte-nos sobre seu projeto: que tipo de site precisa, quais são seus objetivos, público-alvo, funcionalidades desejadas, prazo, orçamento aproximado, etc."
                />
                {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
            </motion.div>

            {/* Botão de Envio */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-lg font-semibold text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting
                        ? "bg-slate-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40"
                        }`}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        <>
                            <Send className="h-5 w-5" />
                            Enviar Solicitação
                        </>
                    )}
                </motion.button>
            </motion.div>
        </form>
    )
}