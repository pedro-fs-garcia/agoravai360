import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { faqData } from "@/data/faq"
import Doubts from "./Doubts"
import FaqCard from "./FaqCard"

export default function FAQ() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const filteredFAQ = faqData;

    const toggleItem = (id: number) => {
        setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    }

    const isOpen = (id: number) => openItems.includes(id)

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header da seção */}
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
                    <p className="text-lg text-slate-600 mx-auto leading-relaxed">
                        Encontre respostas para as principais dúvidas sobre nossos{" "}
                        <span className="text-yellow-600 font-semibold">serviços de marketing digital</span> e como podemos ajudar
                        seu negócio a crescer.
                    </p>
                </motion.div>

                {/* Lista de FAQs */}
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {filteredFAQ.map((item, index) => (
                                <FaqCard item={item} isOpen={isOpen} toggleItem={toggleItem} index={index} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Seção de contato */}
                <Doubts />
            </div>
        </section>
    )
}
