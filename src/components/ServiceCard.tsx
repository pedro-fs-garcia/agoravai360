import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Props = {
    service: any,
    index: number
}

export default function ServiceCard({ service, index }: Props) {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group h-full"
        >
            <Card className="h-full border border-slate-600/30 shadow-xl hover:shadow-2xl transition-all duration-500 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 group-hover:scale-[1.02] overflow-hidden relative">
                {/* Elemento decorativo de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Borda animada */}
                <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-yellow-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <CardHeader className="relative z-10 pb-4 sm:pb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 text-white mb-3 sm:mb-4 shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300 group-hover:scale-110`}>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7">
                            {service.icon}
                        </div>
                    </div>

                    <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                        {service.title}
                    </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                    <CardDescription className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-slate-200 transition-colors duration-300">
                        {service.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {service.features.map((feature: any, i: number) => (
                            <span 
                                key={i} 
                                className="px-2 py-1 sm:px-3 sm:py-1.5 bg-slate-700/60 text-slate-300 text-xs sm:text-sm rounded-full border border-slate-600/40 group-hover:bg-yellow-500/20 group-hover:text-yellow-300 group-hover:border-yellow-400/30 transition-all duration-300 backdrop-blur-sm"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </CardContent>

                {/* Efeito de brilho no hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
        </motion.div>
    )
}