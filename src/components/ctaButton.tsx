"use client"

import contactInfo from "../data/contactInfo.json";
import { motion } from "framer-motion"
import { MessageCircle, ArrowRight } from 'lucide-react'


interface CtaButtonProps {
    text: string
    message?: string
    primaryIcon?: boolean
    secondaryIcon?: boolean
    variant?: "primary" | "secondary" | "dark"
    size?: "sm" | "md" | "lg" | "xl"
    hoverScale?: number
    hoverY?: number
    tapScale?: number
}

const variants = {
    primary: "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-900 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40",
    dark: "hidden xl:flex items-center bg-slate-900/90 gap-3 px-6 py-3 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 border border-yellow-400/30 rounded-lg hover:border-yellow-400/50 backdrop-blur-sm hover:bg-slate-800/90",
    secondary: "border-2 border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/60 backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-400/20",
}

const sizes = {
    sm: "px-4 py-2.5 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2.5",
    lg: "px-8 py-4 text-lg gap-3",
    xl: "px-10 py-5 text-xl gap-3.5"
}

const iconSizes = {
    sm: "h-4 w-4",
    md: "h-4 w-4", 
    lg: "h-5 w-5",
    xl: "h-6 w-6"
}


export default function CtaButton({
    text,
    message = "Olá! Gostaria de saber mais sobre os serviços da Agora Vai 360.",
    variant = "primary",
    size = "lg",
    primaryIcon = true,
    secondaryIcon = true,
    hoverScale = 1.05,
    hoverY = -2,
    tapScale = 0.95
}: CtaButtonProps) {

    // Gerar URL baseado no tipo de contato
    const generateUrl = () => {
        const phone = contactInfo.whatsapp;
        const url = new URL(`https://web.whatsapp.com/send`);
        url.searchParams.append('phone', phone);
        url.searchParams.append('text', message);
        return url.toString();
    }

    const renderPrimaryIcon = () => {
        return (
            <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
            >
                <MessageCircle className={iconSizes[size]} />
            </motion.div>
        )
    }

    const renderSecondaryIcon = () => {
        return (
            <motion.div 
                className="flex-shrink-0"
                animate={{ x: [0, 4, 0] }} 
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
                <ArrowRight className={iconSizes[size]} />
            </motion.div>
        )
    }

    const baseClasses = `
        inline-flex items-center justify-center font-semibold rounded-lg 
        transition-all duration-300 cursor-pointer select-none
        ${variants[variant]} 
        ${sizes[size]}
    `.trim();


    return (
        <motion.a
            href={generateUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClasses}
            whileHover={{ scale: hoverScale, y: hoverY }}
            whileTap={{ scale: tapScale }}
        >
            {primaryIcon && renderPrimaryIcon()}

            <span className="whitespace-nowrap">{text}</span>

            {secondaryIcon && renderSecondaryIcon()}
        </motion.a>
    )
}