"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, MessageCircle, Clock, Shield } from "lucide-react"
import { faqData } from "@/data/faq"
import Doubts from "./Doubts"
import FaqCard from "./FaqCard"

export default function FAQ2() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const filteredFAQ = faqData

    const toggleItem = (id: number) => {
        setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    }

    const isOpen = (id: number) => openItems.includes(id)

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.05) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`,
                    }}
                />
            </div>

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
                {/* Header da seção - Centralizado */}
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
                        <HelpCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm font-medium text-slate-700">Dúvidas Frequentes</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
                            Perguntas
                        </span>{" "}
                        <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                            Frequentes
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Encontre respostas para as principais dúvidas sobre nossos{" "}
                        <span className="text-yellow-600 font-semibold">serviços de marketing digital</span> e como podemos ajudar
                        seu negócio a crescer.
                    </p>
                </motion.div>

                {/* Layout Principal - FAQ com Imagem Lateral */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {/* Coluna Principal - FAQs (2/3 do espaço) */}
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                {filteredFAQ.map((item, index) => (
                                    <FaqCard key={item.id} item={item} isOpen={isOpen} toggleItem={toggleItem} index={index} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Coluna Lateral - Imagem e Informações de Suporte (1/3 do espaço) */}
                    <motion.div
                        className="lg:col-span-1 space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >

                        {/* Card de Suporte com Imagem */}
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-8">

                            {/* Imagem do suporte */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                                    alt="Equipe de suporte Agora Vai 360"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Conteúdo do card */}
                            <div className="p-6">
                                {/* <h3 className="text-lg font-semibold text-slate-800 mb-4">Precisa de Ajuda?</h3> */}

                                {/* Estatísticas de atendimento */}
                                <div className="space-y-4 mb-6">
                                    {[
                                        { icon: <MessageCircle className="h-5 w-5" />, title: "WhatsApp", info: "Resposta em minutos" },
                                        { icon: <Clock className="h-5 w-5" />, title: "Horário", info: "Seg-Sex 8h às 18h" },
                                        { icon: <Shield className="h-5 w-5" />, title: "Suporte", info: "Atendimento especializado" },
                                    ].map((item) => (
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 text-white bg-gradient-to-r from-blue-500 to-slate-800 rounded-full flex items-center justify-center">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <div className="text-sm text-slate-600">{item.title}</div>
                                                    <div className="text-lg font-bold text-slate-600">{item.info}</div>
                                                </div>
                                            </div>

                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card adicional - Dica */}
                        <motion.div
                            className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <HelpCircle className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">💡 Dica</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Não encontrou sua dúvida? Nossa equipe está sempre pronta para criar soluções personalizadas para
                                        seu negócio.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Seção de contato */}
                <Doubts />
            </div>
        </section>
    )
}
