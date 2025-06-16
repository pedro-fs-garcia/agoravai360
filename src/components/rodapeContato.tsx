import { motion } from "framer-motion";
import { Clock, MessageCircle, Shield } from "lucide-react";

export default function RodapeContato() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-600/30">
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
    )
}