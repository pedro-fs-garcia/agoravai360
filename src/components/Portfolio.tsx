"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Categorias de projetos
const categories = [
  { id: "all", label: "Todos" },
  { id: "sites", label: "Sites" },
  { id: "marketing", label: "Marketing Digital" },
  { id: "seo", label: "SEO" },
]

// Projetos de exemplo
const projects = [
  {
    id: 1,
    title: "Site Institucional - Empresa XYZ",
    category: "sites",
    image: "/placeholder.svg?height=400&width=600",
    description: "Desenvolvimento de site institucional com foco em conversão e experiência do usuário.",
  },
  {
    id: 2,
    title: "Campanha de Marketing - Loja ABC",
    category: "marketing",
    image: "/placeholder.svg?height=400&width=600",
    description: "Estratégia de marketing digital que aumentou as vendas em 45% em 3 meses.",
  },
  {
    id: 3,
    title: "Otimização SEO - Clínica Saúde",
    category: "seo",
    image: "/placeholder.svg?height=400&width=600",
    description: "Estratégia de SEO que aumentou o tráfego orgânico em 200% em 6 meses.",
  },
  {
    id: 4,
    title: "E-commerce - Moda Fashion",
    category: "sites",
    image: "/placeholder.svg?height=400&width=600",
    description: "Desenvolvimento de e-commerce com integração de pagamento e gestão de estoque.",
  },
  {
    id: 5,
    title: "Gestão de Redes Sociais - Restaurante Gourmet",
    category: "marketing",
    image: "/placeholder.svg?height=400&width=600",
    description: "Estratégia de conteúdo para redes sociais que aumentou o engajamento em 80%.",
  },
  {
    id: 6,
    title: "Landing Page - Curso Online",
    category: "sites",
    image: "/placeholder.svg?height=400&width=600",
    description: "Landing page de alta conversão para captação de leads para curso online.",
  },
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Portfólio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-gray-100">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group overflow-hidden rounded-lg shadow-lg bg-white"
                  >
                    <div className="relative h-64 overflow-hidden">                        
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
