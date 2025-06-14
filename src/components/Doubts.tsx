import { motion } from "framer-motion";
import { Clock, MessageCircle, Shield } from "lucide-react";
import CtaButton from "./ctaButton";
import contactInfo from "../data/contactInfo.json"

export default function Doubts() {
    return (
        <motion.div
            className="mt-20 w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
        >
            <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden mx-auto">
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
                    <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mb-6"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        <MessageCircle className="h-8 w-8 text-slate-900" />
                    </motion.div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Não encontrou sua{" "}
                        <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                            dúvida
                        </span>
                        ?
                    </h3>
                    <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
                        Nossa equipe está pronta para esclarecer qualquer questão sobre nossos serviços e como podemos ajudar
                        seu negócio a crescer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CtaButton text="Falar no Whatsapp" secondaryIcon={false} message="Olá! Tenho algumas dúvidas a respeito dos serviços da Agora Vai 360." />

                        <motion.a
                            href={`mailto:${contactInfo.email}?subject=Dúvidas sobre serviços`}
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-400/40 text-blue-100 hover:bg-blue-400/10 hover:border-blue-400/60 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Clock className="h-5 w-5" />
                            Agendar Reunião
                        </motion.a>
                    </div>

                    {/* Informações de contato */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-600/30">
                        {[
                            { icon: <MessageCircle className="h-5 w-5" />, title: "WhatsApp", info: "Resposta em minutos" },
                            { icon: <Clock className="h-5 w-5" />, title: "Horário", info: "Seg-Sex 8h às 18h" },
                            { icon: <Shield className="h-5 w-5" />, title: "Suporte", info: "Atendimento especializado" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-700/50 rounded-full mb-3 text-yellow-400">
                                    {item.icon}
                                </div>
                                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                <p className="text-slate-400 text-sm">{item.info}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}