"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown, Zap, MessageCircle, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import CtaButton from "./ctaButton"

const pricingPlans = [
  {
    name: "Essencial",
    description: "Ideal para pequenos negócios que estão começando no mundo digital",
    price: "R$ 997",
    period: "/mês",
    icon: <Zap className="h-6 w-6" />,
    features: [
      "Site responsivo com até 5 páginas",
      "Otimização básica para SEO",
      "Integração com Google Analytics",
      "Integração com WhatsApp",
      "Suporte por e-mail",
    ],
    cta: "Começar agora",
    popular: false,
    highlight: "Perfeito para começar",
  },
  {
    name: "Profissional",
    description: "Perfeito para empresas que buscam crescimento consistente",
    price: "R$ 1.997",
    period: "/mês",
    icon: <Star className="h-6 w-6" />,
    features: [
      "Site responsivo com até 10 páginas",
      "Otimização avançada para SEO",
      "Gestão de 2 redes sociais",
      "Blog com 4 artigos mensais",
      "Relatórios mensais de performance",
      "Suporte prioritário",
    ],
    cta: "Escolher este plano",
    popular: true,
    highlight: "Mais escolhido",
  },
  {
    name: "Empresarial",
    description: "Solução completa para empresas que buscam dominar o mercado digital",
    price: "R$ 3.997",
    period: "/mês",
    icon: <Crown className="h-6 w-6" />,
    features: [
      "Site responsivo com páginas ilimitadas",
      "Estratégia completa de SEO",
      "Gestão de 4 redes sociais",
      "Blog com 8 artigos mensais",
      "Campanhas de anúncios online",
      "Relatórios semanais de performance",
      "Suporte VIP 24/7",
    ],
    cta: "Falar com consultor",
    popular: false,
    highlight: "Máximo resultado",
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section
      id="precos"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.05) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`,
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
            <Sparkles className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium text-slate-700">Planos Personalizados</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
              Planos e
            </span>{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Preços
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Escolha o plano ideal para o seu negócio e comece a{" "}
            <span className="text-yellow-600 font-semibold">transformar sua presença digital</span> hoje mesmo.
          </p>

          {/* Toggle anual/mensal */}
          <motion.div
            className="flex items-center justify-center mt-8 p-1 bg-white rounded-full shadow-lg border border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isAnnual ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold" : "text-slate-600"
              }`}
            >
              Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative mx-2 inline-flex h-6 w-12 items-center rounded-full bg-slate-200 transition-colors duration-300"
              aria-pressed={isAnnual}
              aria-label="Alternar entre planos mensais e anuais"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 transition-transform duration-300 ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isAnnual ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold" : "text-slate-600"
              }`}
            >
              Anual{" "}
              <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded-full ml-1">-20%</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Cards de preços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
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
                className={`h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
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
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto ${
                      plan.popular
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
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${
                      plan.popular ? "bg-yellow-100 text-yellow-700" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {plan.highlight}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow px-6">
                  {/* Preço */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className={`text-4xl font-bold ${plan.popular ? "text-yellow-600" : "text-slate-800"}`}>
                        {isAnnual
                          ? `R$ ${Math.round(Number.parseInt(plan.price.replace(/\D/g, "")) * 0.8)}`
                          : plan.price}
                      </span>
                      <span className="text-slate-500 ml-1">{plan.period}</span>
                    </div>
                    {isAnnual && (
                      <motion.div
                        className="text-green-600 text-sm font-medium mt-2 bg-green-50 px-3 py-1 rounded-full inline-block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        💰 Economize 20% no plano anual
                      </motion.div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        <Check
                          className={`h-5 w-5 mr-3 flex-shrink-0 mt-0.5 ${
                            plan.popular ? "text-yellow-500" : "text-green-500"
                          }`}
                        />
                        <span className="text-slate-600 leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <motion.button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40"
                        : "bg-gradient-to-r from-slate-800 to-blue-800 hover:from-slate-900 hover:to-blue-900 text-white shadow-lg"
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={`https://wa.me/5512000000000?text=Olá! Gostaria de saber mais sobre o plano ${plan.name} da Agora Vai 360.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {plan.cta}
                    </Link>
                  </motion.button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA personalizado */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.2) 0%, transparent 50%), 
                                 radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
                }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa de uma solução{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  personalizada
                </span>
                ?
              </h3>
              <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
                Cada negócio é único. Vamos criar uma estratégia sob medida para suas necessidades específicas.
              </p>

              <CtaButton text="Solicitar Proposta Personalizada" secondaryIcon={false}  />

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
