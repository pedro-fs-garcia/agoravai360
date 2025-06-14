import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Quote, Star } from "lucide-react";

type Props = {
    testimonial: any,
    index: number
}


export default function TestimonialCard({ testimonial, index }: Props) {
    return (
        <motion.div
            key={testimonial.id}
            className="w-full md:w-1/2 lg:w-1/3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="h-full bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-slate-600/30 shadow-2xl shadow-blue-900/20 hover:shadow-yellow-500/20 transition-all duration-500 group overflow-hidden">
                {/* Efeito de brilho */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                        x: [-100, 400],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                        ease: "easeInOut",
                    }}
                />

                <CardContent className="p-8 relative z-10">
                    {/* Header do card */}
                    <div className="flex items-start justify-between mb-6">
                        {/* Quote icon */}
                        <motion.div
                            className="p-3 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-full border border-yellow-400/30"
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Quote className="h-6 w-6 text-yellow-400" />
                        </motion.div>

                        {/* Categoria */}
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/30">
                            {testimonial.category}
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                    </div>

                    {/* Conteúdo do depoimento */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 rounded-lg border border-yellow-400/20">
                        <p className="text-slate-200 mb-6 italic leading-relaxed text-lg">"{testimonial.content}"</p>
                    </div>

                    {/* Informações do cliente */}
                    <div className="flex items-center">
                        <div>
                            {/* <p className="text-sm text-yellow-400 font-medium">— {testimonial.company}</p> */}
                            <p className="text-sm text-yellow-400 font-medium">— {testimonial.name}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>

    )
}