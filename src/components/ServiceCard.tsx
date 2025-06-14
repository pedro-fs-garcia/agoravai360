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
            className="group"
        >
            <Card className="h-full border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:bg-white group-hover:scale-[1.02] overflow-hidden relative">
                <CardHeader className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white mb-4 shadow-lg`}>
                        {service.icon}
                    </div>

                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                        {service.title}
                    </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                    <CardDescription className="text-slate-600 text-base leading-relaxed mb-4">
                        {service.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2">
                        {service.features.map((feature:any, i:number) => (
                            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full border border-slate-200 group-hover:bg-yellow-50 group-hover:text-yellow-700 group-hover:border-yellow-200 transition-all duration-300">
                                {feature}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}