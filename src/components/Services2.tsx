"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import CtaButton from "./ctaButton"
import { services } from "../data/services"
import ServiceCard from "./ServiceCard"
import VideoComponent from "./ui/videoComponent"

export default function Services() {
    return (
        <section
            id="servicos"
            className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Layout Hero com Vídeo */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
                    {/* Conteúdo Principal */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Award className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm font-medium text-slate-200">Soluções Completas</span>
                        </motion.div>

                        {/* Título Principal */}
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                                Transformamos
                            </span>
                            <br />
                            <span className="text-white">Ideias em</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Resultados
                            </span>
                        </motion.h2>

                        {/* Descrição */}
                        <motion.p
                            className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl lg:max-w-none"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Oferecemos soluções completas e personalizadas para{" "}
                            <span className="text-yellow-400 font-semibold">impulsionar o crescimento</span> do seu negócio no
                            ambiente digital.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <CtaButton
                                text="Descobrir Soluções"
                                primaryIcon={false}
                                message="Olá! Gostaria de conhecer as soluções da Agora Vai 360 para meu negócio."
                            />
                        </motion.div>
                    </motion.div>

                    {/* Seção do Vídeo com Elementos Interativos */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {/* Container principal do vídeo */}
                        <div className="relative">
                            {/* Vídeo principal */}
                            <VideoComponent videoUrl="https://videos.pexels.com/video-files/6804128/6804128-uhd_2732_1440_25fps.mp4" />
                        </div>
                    </motion.div>
                </div>

                {/* Seção de Serviços */}
                <motion.h3
                    className="text-3xl text-center md:text-4xl font-bold text-white mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Nossos <span className="text-yellow-400">Serviços</span>   
                </motion.h3>

                {/* Grid de serviços */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ServiceCard service={service} index={index} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA final */}
                <motion.div
                    className="text-center mt-12 sm:mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
                        Pronto para transformar seu negócio com nossos serviços?
                    </p>
                    <div className="px-4">
                        <CtaButton
                            text="Fale Conosco Agora"
                            primaryIcon={false}
                            message="Olá! Gostaria de saber mais sobre os serviços de desenvolvimento de sites da Agora Vai 360."
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
