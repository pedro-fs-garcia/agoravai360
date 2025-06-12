"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, TrendingUp, Eye, Award } from "lucide-react"
import CtaButton from "./ctaButton"
import projects from "../data/projects.json"

// Categorias de projetos
const categories = [
  { id: "all", label: "Todos", icon: <Award className="h-4 w-4" /> },
  { id: "sites", label: "Sites", icon: <ExternalLink className="h-4 w-4" /> },
  { id: "marketing", label: "Marketing Digital", icon: <TrendingUp className="h-4 w-4" /> },
  { id: "seo", label: "SEO", icon: <Eye className="h-4 w-4" /> },
]


export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Formas decorativas */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-yellow-100">Projetos de Sucesso</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Nosso Portfólio
            </span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos e os{" "}
            <span className="text-yellow-400 font-semibold">resultados extraordinários</span> que alcançamos para nossos
            clientes.
          </p>
        </motion.div>

        {/* Tabs personalizadas */}
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TabsList className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 p-1 rounded-xl">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TabsTrigger
                    value={category.id}
                    className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-yellow-400 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-amber-500 data-[state=active]:text-slate-900 data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/25 transition-all duration-300 rounded-lg font-medium"
                  >
                    {category.icon}
                    <span>{category.label}</span>
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </motion.div>

          {/* Conteúdo dos projetos */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Card principal */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-slate-600/30 shadow-2xl shadow-blue-900/20 hover:shadow-yellow-500/20 transition-all duration-500 group-hover:scale-[1.02]">
                      {/* Imagem do projeto */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay com gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Métrica de destaque */}
                        <motion.div
                          className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {project.metrics.value}
                        </motion.div>

                        {/* Botão de visualização no hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.button
                            className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="h-4 w-4" />
                            Ver Projeto
                          </motion.button>
                        </div>
                      </div>

                      {/* Conteúdo do card */}
                      <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Métrica detalhada */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-600/30">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm text-slate-400">Resultado:</span>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-yellow-400">{project.metrics.value}</div>
                            <div className="text-xs text-slate-400">{project.metrics.label}</div>
                          </div>
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
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 mb-6 text-lg">Gostou dos nossos resultados? Vamos criar algo incrível para o seu negócio também!</p>
          <CtaButton text="Quero Resultados Como Esse" primaryIcon={false} size="lg" />
        </motion.div>
      </div>
    </section>
  )
}
