"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import {Link} from "react-router-dom"

const pricingPlans = [
  {
    name: "Essencial",
    description: "Ideal para pequenos negócios que estão começando no mundo digital",
    price: "R$ 997",
    period: "/mês",
    features: [
      "Site responsivo com até 5 páginas",
      "Otimização básica para SEO",
      "Integração com Google Analytics",
      "Integração com WhatsApp",
      "Suporte por e-mail",
    ],
    cta: "Começar agora",
    popular: false,
  },
  {
    name: "Profissional",
    description: "Perfeito para empresas que buscam crescimento consistente",
    price: "R$ 1.997",
    period: "/mês",
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
  },
  {
    name: "Empresarial",
    description: "Solução completa para empresas que buscam dominar o mercado digital",
    price: "R$ 3.997",
    period: "/mês",
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
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="precos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos e Preços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio e comece a transformar sua presença digital hoje mesmo.
          </p>

          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${!isAnnual ? "font-semibold text-blue-600" : "text-gray-500"}`}>Mensal</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
              aria-pressed={isAnnual}
              aria-label="Alternar entre planos mensais e anuais"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? "font-semibold text-blue-600" : "text-gray-500"}`}>
              Anual <span className="text-green-500 text-sm font-medium">(-20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full flex flex-col ${
                  plan.popular ? "border-blue-500 shadow-lg shadow-blue-100" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">Mais Popular</div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">
                      {isAnnual ? `R$ ${Number.parseInt(plan.price.replace(/\D/g, "")) * 0.8}` : plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                    {isAnnual && (
                      <div className="text-green-500 text-sm font-medium mt-1">Economize 20% no plano anual</div>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <button
                    className={`w-full ${
                      plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    <Link
                      to={`https://wa.me/5512000000000?text=Olá! Gostaria de saber mais sobre o plano ${plan.name} da Agora Vai 360.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                    </Link>
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Precisa de uma solução personalizada para o seu negócio?</p>
          <button className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link
              to="https://wa.me/5512000000000?text=Olá! Gostaria de uma proposta personalizada para meu negócio."
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicite uma proposta personalizada
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}
