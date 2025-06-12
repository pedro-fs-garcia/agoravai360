"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Globe,
  BarChart2,
  Search,
  MessageSquare,
  PenTool,
  Smartphone,
  Target,
  Zap,
  Award,
  TrendingUp,
} from "lucide-react"
import CtaButton from "./ctaButton"

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Desenvolvimento de Sites",
    description: "Sites e landing pages de alta conversão, otimizados para dispositivos móveis e mecanismos de busca.",
    features: ["Responsive Design", "SEO Otimizado", "Alta Performance"],
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Otimização para SEO",
    description:
      "Estratégias avançadas de SEO para aumentar sua visibilidade nos mecanismos de busca e atrair tráfego qualificado.",
    features: ["Análise Técnica", "Palavras-chave", "Link Building"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: "Marketing Digital",
    description:
      "Estratégias personalizadas de marketing digital para aumentar sua presença online e gerar leads qualificados.",
    features: ["Google Ads", "Facebook Ads", "Analytics"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Gestão de Redes Sociais",
    description: "Criação e gerenciamento de conteúdo para suas redes sociais, aumentando o engajamento e a conversão.",
    features: ["Conteúdo Criativo", "Engajamento", "Estratégia"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Design e UX/UI",
    description: "Design profissional e experiência do usuário que convertem visitantes em clientes.",
    features: ["UI/UX Design", "Prototipagem", "Testes A/B"],
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Marketing Local",
    description: "Estratégias focadas em São José dos Campos e região do Vale do Paraíba para atrair clientes locais.",
    features: ["Google My Business", "SEO Local", "Geotargeting"],
    color: "from-blue-500 to-teal-500",
  },
]

const differentials = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Especialização Comprovada",
    description: "Especialização comprovada em geração de leads qualificados com metodologias testadas e aprovadas.",
    metric: "+300% ROI",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Metodologia Ágil",
    description: "Metodologia ágil e personalizada para atender às necessidades específicas do seu negócio.",
    metric: "30 dias",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Monitoramento Constante",
    description: "Monitoramento constante com métricas claras de performance para acompanhar resultados em tempo real.",
    metric: "24/7",
  },
]

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.08) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Formas decorativas */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-full filter blur-3xl"
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

      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-yellow-400/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Award className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium text-slate-700">Soluções Completas</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
              Nossos
            </span>{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas e personalizadas para{" "}
            <span className="text-yellow-600 font-semibold">impulsionar o crescimento</span> do seu negócio no ambiente
            digital.
          </p>
        </motion.div>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:bg-white group-hover:scale-[1.02] overflow-hidden relative">
                {/* Efeito de brilho no hover */}
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

                <CardHeader className="relative z-10">
                  {/* Ícone com gradiente */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>

                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-slate-600 text-base leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>

                  {/* Features tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full border border-slate-200 group-hover:bg-yellow-50 group-hover:text-yellow-700 group-hover:border-yellow-200 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>

                {/* Borda inferior com gradiente */}
                <div
                  className={`h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Seção de diferenciais */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">Nossos</span>{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">
              Diferenciais
            </span>
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            O que nos torna únicos no mercado de marketing digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-blue-900 text-white overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-xl">
                {/* Background decorativo */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.2) 0%, transparent 50%)`,
                    }}
                  />
                </div>

                {/* Conteúdo */}
                <div className="relative z-10">
                  {/* Ícone */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-900 mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {differential.icon}
                  </motion.div>

                  {/* Métrica */}
                  <div className="text-right mb-4">
                    <span className="text-2xl font-bold text-yellow-400">{differential.metric}</span>
                  </div>

                  {/* Título */}
                  <h4 className="font-bold text-xl mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {differential.title}
                  </h4>

                  {/* Descrição */}
                  <p className="text-slate-300 leading-relaxed">{differential.description}</p>
                </div>

                {/* Efeito de brilho */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: [-100, 400],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 mb-6 text-lg">Pronto para transformar seu negócio com nossos serviços?</p>
          <CtaButton text="Fale Conosco Agora" primaryIcon={false} />
        </motion.div>
      </div>
    </section>
  )
}
