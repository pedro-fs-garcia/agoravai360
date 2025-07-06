"use client"

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import { useEffect, useRef } from "react"
import { Code2, Sparkles, Zap } from "lucide-react"
import CtaButton from "./ctaButton"
import ScrollIndicator from "./ui/ScrollIndicator"
import ImageComponent from "./ui/imageComponent"

const FloatingOrb = ({ delay, size, color, duration }: any) => (
    <motion.div
        className={`absolute rounded-full blur-xl opacity-30 ${size} ${color}`}
        initial={{ x: Math.random() * 800, y: Math.random() * 600, scale: 0 }}
        animate={{
            x: Math.random() * 800,
            y: Math.random() * 600,
            scale: [0, 1, 0.8, 1],
            rotate: [0, 180, 360]
        }}
        transition={{
            delay,
            duration: duration || 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
        }}
    />
)

const TechBadge = ({ icon: Icon, label, delay, color }: any) => {
    const borderColor: Record<string, string> = {
      emerald: "border-emerald-400/30 text-emerald-300",
      blue: "border-blue-400/30 text-blue-300",
      amber: "border-amber-400/30 text-amber-300",
    };
  
    return (
      <motion.div
        className={
          `flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm 
          ${borderColor[color]}
        `}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{
          scale: 1.1,
          backgroundColor:
            color === "emerald"
              ? "rgba(16, 185, 129, 0.1)"
              : color === "blue"
              ? "rgba(59, 130, 246, 0.1)"
              : "rgba(245, 158, 11, 0.1)",
        }}
      >
        <Icon className="h-4 w-4" />
        <span className="text-sm font-medium">{label}</span>
      </motion.div>
    );
  };

const AnimatedText = ({ children, delay = 0 }: any) => {
    const letters = Array.from(children)

    return (
        <motion.span className="inline-block">
            {letters.map((letter: any, index: number) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: delay + index * 0.05,
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    className="inline-block"
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.span>
    )
}

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll()

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect()
            if (rect) {
                mouseX.set(e.clientX - rect.left - rect.width / 2)
                mouseY.set(e.clientY - rect.top - rect.height / 2)
            }
        }

        const container = containerRef.current
        container?.addEventListener('mousemove', handleMouseMove)
        return () => container?.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])


    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black"
        >
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 opacity-40"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.1),transparent_50%)]" />
            </motion.div>

            {/* Floating Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <FloatingOrb delay={0} size="w-32 h-32" color="bg-emerald-500" duration={25} />
                <FloatingOrb delay={2} size="w-20 h-20" color="bg-blue-500" duration={30} />
                <FloatingOrb delay={4} size="w-16 h-16" color="bg-amber-500" duration={20} />
                <FloatingOrb delay={6} size="w-24 h-24" color="bg-purple-500" duration={35} />
                <FloatingOrb delay={8} size="w-12 h-12" color="bg-cyan-500" duration={15} />
            </div>



            {/* Main Content Container */}
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="space-y-8 text-center lg:text-left"
                        style={{ y: textY }}
                    >
                        {/* Tech Badges */}
                        <motion.div
                            className="flex flex-wrap gap-3 justify-center lg:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <TechBadge icon={Code2} label="Tecnologia" delay={0.3} color="blue" />
                            <TechBadge icon={Zap} label="Velocidade" delay={0.4} color="emerald" />
                            <TechBadge icon={Sparkles} label="Resultado" delay={0.5} color="amber" />
                        </motion.div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <motion.h1
                                className="text-3xl md:text-3xl lg:text-4xl font-black leading-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="text-white">
                                    <AnimatedText delay={0.8}>Seu Negócio Precisa Vender Mais?{" "}</AnimatedText>
                                </div>
                                <motion.div
                                    className="bg-gradient-to-r from-yellow-500  to-amber-600 bg-clip-text text-transparent"
                                    // className="text-white mt-2"
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, duration: 0.8 }}
                                >
                                    Crie um Site Profissional, Moderno e Que Converte!
                                </motion.div>
                            </motion.h1>
                        </div>

                        {/* Description */}
                        <motion.p
                            className="text-lg text-slate-300 max-w-2xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.2 }}
                        >
                            Na Agora Vai 360, desenvolvemos Sites, Landing Pages e Estratégias de
                            Marketing Digital que geram resultados reais para o seu negócio.

                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 pt-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.6 }}
                        >
                            <CtaButton
                                primaryIcon={false}
                                text={"Solicitar Orçamento"}
                                message="Olá! Gostaria de solicitar um orçamento para um site. Vamos conversar?"
                            />
                            <a href="/#portfolio">
                                <motion.button
                                    className="px-8 py-4 border-2 border-slate-400/30 text-slate-300 font-semibold rounded-2xl backdrop-blur-sm hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-300"
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(16,185,129,0.1)" }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Acessa Portfolio"
                                >
                                    Ver Portfólio
                                </motion.button>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Interactive Demo */}
                    <div className="relative h-full hidden lg:block">
                        {/* <LiveCodeEditor /> */}
                        <ImageComponent imageUrl={"/images/ai_img_from_pixabay.png"} />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="sm:mt-12 hidden lg:block">
                <ScrollIndicator />
            </div>
        </section>
    )
}