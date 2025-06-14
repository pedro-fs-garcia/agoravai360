import { motion } from "framer-motion";

type Props = {
    benefit: any,
    index: number
}

export default function BenefitCard({ benefit, index }: Props) {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
        >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] h-full">
                <div className="flex items-center gap-x-4 mb-4">
                    <motion.div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {benefit.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                        {benefit.title}
                    </h3>
                </div>

                <p className="text-slate-600 text-md leading-relaxed">{benefit.description}</p>
            </div>

        </motion.div>
    );
}