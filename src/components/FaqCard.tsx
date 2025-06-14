import { AnimatePresence, motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"

type Props = {
    item: any,
    isOpen(id:number):any,
    toggleItem(id:number): any
    index: number
}

export default function FaqCard({ item, isOpen, toggleItem, index }: Props) {
    return (
        <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
            {/* Pergunta */}
            <motion.button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-300"
                whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.5)" }}
            >
                <div className="flex items-start gap-4 flex-1">
                    <h3 className="text-md font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                        {item.question}
                    </h3>
                </div>

                {/* Ícone */}
                <motion.div
                    animate={{ rotate: isOpen(item.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                >
                    {isOpen(item.id) ? (
                        <Minus className="h-6 w-6 text-yellow-600" />
                    ) : (
                        <Plus className="h-6 w-6 text-slate-400 group-hover:text-yellow-600 transition-colors duration-300" />
                    )}
                </motion.div>
            </motion.button>

            {/* Resposta */}
            <AnimatePresence>
                {isOpen(item.id) && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-0">
                            <div className="">
                                <div className="h-px bg-gradient-to-r from-yellow-400/30 to-blue-400/30 mb-4" />
                                <p className="text-slate-600 leading-relaxed text-base">{item.answer}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}