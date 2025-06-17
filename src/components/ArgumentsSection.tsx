"use client"

import { motion } from "framer-motion"
import { Globe } from 'lucide-react'
import CtaButton from "./ctaButton"
import { benefits } from "../data/benefits"
import BenefitCard from "./BenefitCard"

const features = [
    "Liberdade total de conteúdo",
    "Otimização para o Google",
    "Conversão de leads",
    "Marca mais forte e memorável",
    "Controle completo",
    "Presença profissional",
]

export default function ArgumentsSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
            <motion.div
                className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-full filter blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16 max-w-4xl mx-auto"
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
                        <Globe className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm font-medium text-slate-700">Seu espaço, suas regras</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
                            Seu negócio precisa de
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                            um site profissional
                        </span>
                    </h2>

                    <p className="text-md text-slate-600 mb-8 leading-relaxed">
                        Seu site é seu vendedor mais eficiente. Trabalha por você dia e noite, sem pedir folga e sem depender do algoritmo.
                    </p>

                    <motion.div
                        className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-slate-200 leading-relaxed">
                            Enquanto você aposta nas redes, o jogo muda. Algoritmos mudam. Regras mudam. Mas seu site continua firme — vendendo, apresentando e fortalecendo sua marca.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Grid de benefícios */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, i) => (
                        <BenefitCard index={i} benefit={benefit} />
                    ))}
                </div>

                {/* Contraste com redes sociais */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="text-slate-800">Não dependa do algoritmo</span>
                        </h3>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            As redes sociais são só o caminho. O destino é o seu site — seu espaço profissional, confiável, e sempre acessível.
                        </p>
                    </div>
                </motion.div>

                {/* Features */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200 hover:bg-white/80 transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex-shrink-0" />
                            <span className="text-slate-700 font-medium">{feature}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA final */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <CtaButton
                        text="Quero Meu Site Profissional"
                        message="Olá! Quero criar um site profissional para meu negócio. Vamos conversar?"
                        size="xl"
                    />
                </motion.div>
            </div>
        </section>
    )
}
