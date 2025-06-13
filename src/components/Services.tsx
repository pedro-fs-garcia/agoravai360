"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Award,
} from "lucide-react"
import CtaButton from "./ctaButton"
import {services} from "../data/services"

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
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

          <h2 className="text-slate-800 text-4xl md:text-5xl font-bold mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas e personalizadas para{" "}
            <span className="text-yellow-600 font-semibold">impulsionar o crescimento</span> do seu negócio no ambiente
            digital.
          </p>
        </div>

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
                <CardHeader className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white mb-4 shadow-lg`}>
                    {service.icon}
                  </div>

                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-slate-600 text-base leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full border border-slate-200 group-hover:bg-yellow-50 group-hover:text-yellow-700 group-hover:border-yellow-200 transition-all duration-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 mb-6 text-lg">Pronto para transformar seu negócio com nossos serviços?</p>
          <CtaButton text="Fale Conosco Agora" primaryIcon={false} message="Olá! Estou vindo do seu site e gostaria de saber mais sobre os serviços de desenvolvimento de sites da Agora Vai 360." />
        </motion.div>
      </div>
    </section>
  )
}
