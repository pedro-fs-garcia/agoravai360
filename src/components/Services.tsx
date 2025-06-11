"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, BarChart2, Search, MessageSquare, PenTool, Smartphone } from "lucide-react"

const services = [
  {
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    title: "Desenvolvimento de Sites",
    description: "Sites e landing pages de alta conversão, otimizados para dispositivos móveis e mecanismos de busca.",
  },
  {
    icon: <Search className="h-10 w-10 text-blue-600" />,
    title: "Otimização para SEO",
    description:
      "Estratégias avançadas de SEO para aumentar sua visibilidade nos mecanismos de busca e atrair tráfego qualificado.",
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-blue-600" />,
    title: "Marketing Digital",
    description:
      "Estratégias personalizadas de marketing digital para aumentar sua presença online e gerar leads qualificados.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
    title: "Gestão de Redes Sociais",
    description: "Criação e gerenciamento de conteúdo para suas redes sociais, aumentando o engajamento e a conversão.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-blue-600" />,
    title: "Design e UX/UI",
    description: "Design profissional e experiência do usuário que convertem visitantes em clientes.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-blue-600" />,
    title: "Marketing Local",
    description: "Estratégias focadas em São José dos Campos e região do Vale do Paraíba para atrair clientes locais.",
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas e personalizadas para impulsionar o crescimento do seu negócio no ambiente
            digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Nossos Diferenciais</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-blue-50">
              <h4 className="font-semibold text-lg mb-2">Especialização Comprovada</h4>
              <p className="text-gray-600">
                Especialização comprovada em geração de leads qualificados para seu negócio.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-teal-50">
              <h4 className="font-semibold text-lg mb-2">Metodologia Ágil</h4>
              <p className="text-gray-600">
                Metodologia ágil e personalizada para atender às necessidades específicas do seu negócio.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <h4 className="font-semibold text-lg mb-2">Monitoramento Constante</h4>
              <p className="text-gray-600">
                Monitoramento constante com métricas claras de performance para acompanhar resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
