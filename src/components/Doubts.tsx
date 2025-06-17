"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaMailBulk } from "react-icons/fa"
import { submitFormSpree, submitWpMessage } from "@/utils/sendEmail"
import RodapeContato from "./rodapeContato"
import PainelGoodSubmission from "./painelGoodSubmission"
import Formulario from "./Formulario"
import { validateForm } from "@/utils/formUtils"

interface FormData {
  name: string
  email: string
  whatsapp: string
  description: string
}

export default function Doubts() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm(formData, setErrors)) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simular envio (aqui você pode integrar com sua API)

      submitWpMessage(e, formData)

      submitFormSpree(e, formData)

      setIsSubmitted(true)
      setFormData({ name: "", email: "", whatsapp: "", description: "" })
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({ name: "", email: "", whatsapp: "", description: "" })
    setErrors({})
  }

  return (
    <motion.div
      className="mt-20 w-full text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden mx-auto max-w-4xl">
        <div className="relative z-10">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaMailBulk className="h-8 w-8 text-slate-900" />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Vamos conversar sobre seu{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  projeto
                </span>
                ?
              </h3>
              <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
                Preencha o formulário abaixo e nossa equipe entrará em contato para entender suas necessidades e
                apresentar a melhor solução para seu negócio.
              </p>

              {/* Formulário */}
              <Formulario
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                isSubmitting={isSubmitting}
                formData={formData}
                errors={errors}
              />
            </>
          ) : (
            /* Tela de Sucesso */
            <PainelGoodSubmission resetForm={resetForm} />
          )}
        </div>
      </div>
    </motion.div>
  )
}
