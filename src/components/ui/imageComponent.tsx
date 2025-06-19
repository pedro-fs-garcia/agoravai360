import { motion } from "framer-motion"
type Props = {
    imageUrl: string
}

export default function ImageComponent({ imageUrl }: Props) {

    return (
        <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <img
                src={imageUrl}
                className="w-full h-[500px] lg:h-[600px] object-cover"
            />

            {/* Overlay com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

            {/* Label do vídeo */}
            {/* <motion.div
                className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2 text-sm text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
            >
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    Projetos únicos
                </div>
            </motion.div> */}

            {/* Borda decorativa */}
            <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-yellow-400/30 via-transparent to-blue-400/30 pointer-events-none" />
        </motion.div>
    )
}