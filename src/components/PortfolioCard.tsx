import { motion } from "framer-motion";

type Props = {
    project: any,
    index: number
}

export default function PortfolioCard({ project, index }: Props) {
    return (
        <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative"
        >
            {/* Card principal */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-slate-600/30 shadow-2xl shadow-blue-900/20 hover:shadow-yellow-500/20 transition-all duration-500 group-hover:scale-[1.02]">
                {/* Imagem do projeto */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="absolute w-full h-auto animate-scroll-image"
                    />
                    {/* Overlay com gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Conteúdo do card */}
                <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                        <a href={project.image} target="_blank"  > 
                            <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                                {project.title}
                            </h3>
                        </a>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/30"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>

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
            </div>
        </motion.div>
    )
}