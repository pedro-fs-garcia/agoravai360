import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import CtaButton from "./ctaButton";
import { CalendarClock } from "lucide-react";

type Props = {
    plan: any,
    index: number
}

export default function PriceCard({ plan, index }: Props) {
    return (
        <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
        >
            {/* Badge de popularidade */}
            {plan.popular && (
                <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        ⭐ Mais Popular
                    </div>
                </motion.div>
            )}

            <Card
                className={`h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${plan.popular
                    ? "border-2 border-yellow-400 shadow-xl shadow-yellow-500/20 bg-gradient-to-br from-white to-yellow-50"
                    : "border border-slate-200 shadow-lg bg-white hover:border-slate-300"
                    }`}
            >
                {/* Efeito de brilho para o plano popular */}
                {plan.popular && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent"
                        animate={{
                            x: [-100, 400],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 3,
                            ease: "easeInOut",
                        }}
                    />
                )}

                <CardHeader className="text-center pb-4">
                    {/* Ícone do plano */}
                    <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto ${plan.popular
                            ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-white"
                            : "bg-gradient-to-r from-slate-100 to-blue-100 text-slate-600"
                            }`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        {plan.icon}
                    </motion.div>

                    <CardTitle className="text-2xl font-bold text-slate-800">{plan.name}</CardTitle>
                    <CardDescription className="text-slate-600 mt-2">{plan.description}</CardDescription>

                    {/* Badge de destaque */}
                    <div
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${plan.popular ? "bg-yellow-100 text-yellow-700" : "bg-slate-100 text-slate-600"
                            }`}
                    >
                        {plan.highlight}
                    </div>
                </CardHeader>

                <CardContent className="flex-grow px-6">
                    <div className="text-center mb-8">
                        <div className="flex items-baseline justify-center">
                            <span className={`text-4xl font-bold ${plan.popular ? "text-yellow-600" : "text-slate-800"}`}>
                                {plan.price}
                            </span>
                        </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                        {plan.features.map((f: any, i: number) => (
                            <motion.li
                                key={i}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                viewport={{ once: true }}
                            >
                                <div className={` flex-shrink-0 ${plan.popular ? "text-yellow-500" : "text-blue-800"} `}>{f.icon}</div>
                                <span className="text-slate-600 leading-relaxed">{f.feature}</span>
                            </motion.li>
                        ))}
                        {plan.deadline && (
                            <motion.li
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={`flex-shrink-0 ${plan.popular ? "text-yellow-500" : "text-blue-800"}`}><CalendarClock className="h-5 w-5" /></div>
                                <span className="text-slate-600 leading-relaxed">{plan.deadline}</span>
                            </motion.li>
                        )}
                    </ul>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                    <CtaButton text={plan.buttonText} secondaryIcon={false} message={plan.wpMessage} ></CtaButton>
                </CardFooter>
            </Card>
        </motion.div>
    );
}