"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    position: "Proprietária, Boutique Elegance",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "A Agora Vai 360 transformou completamente a presença online da minha loja. Em apenas 3 meses, aumentamos nossas vendas em 40% graças às estratégias de marketing digital implementadas pela equipe.",
  },
  {
    id: 2,
    name: "João Oliveira",
    position: "Diretor, Clínica Saúde Total",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Nosso site antigo não gerava leads qualificados. Após a reformulação feita pela Agora Vai 360, passamos a receber diariamente novos pacientes que encontram nossa clínica através do Google. Resultado excepcional!",
  },
  {
    id: 3,
    name: "Ana Pereira",
    position: "CEO, Startup Inovação",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "A equipe da Agora Vai 360 entendeu perfeitamente o que nossa startup precisava. Desenvolveram uma estratégia completa de marketing digital que nos ajudou a conquistar nossos primeiros 1000 clientes.",
  },
  {
    id: 4,
    name: "Carlos Santos",
    position: "Advogado, Santos & Associados",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Como advogado, precisava de uma presença online profissional e que transmitisse confiança. A Agora Vai 360 não só criou um site excelente, como também implementou estratégias de SEO que me posicionaram entre os primeiros resultados de busca na região.",
  },
  {
    id: 5,
    name: "Fernanda Lima",
    position: "Gerente, Restaurante Sabor Especial",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "A gestão de redes sociais realizada pela Agora Vai 360 aumentou significativamente nossa visibilidade. Nosso Instagram cresceu 200% em 6 meses e as reservas online dispararam. Recomendo fortemente!",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([])
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const endIndex = currentIndex + itemsPerView
    setVisibleTestimonials(testimonials.slice(currentIndex, endIndex))
  }, [currentIndex, itemsPerView])

  const nextSlide = () => {
    if (currentIndex + itemsPerView < testimonials.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(testimonials.length - itemsPerView)
    }
  }

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos de clientes que transformaram seus negócios com nossas soluções de marketing digital.
          </p>
        </div>

        <div className="relative">
          <div className="flex space-x-6 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
              >
                <Card className="h-full shadow-lg border-none">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-blue-500 mb-4 opacity-50" />
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 ${
                index >= currentIndex && index < currentIndex + itemsPerView ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
