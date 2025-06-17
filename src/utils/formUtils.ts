interface FormData {
    name: string
    email: string
    whatsapp: string
    description: string
}

export const validateForm = (formData: any, setErrors:any): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
        newErrors.name = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
        newErrors.email = "E-mail é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "E-mail inválido"
    }

    if (!formData.whatsapp.trim()) {
        newErrors.whatsapp = "WhatsApp é obrigatório"
    } else if (!/^[\d\s$$$$\-+]+$/.test(formData.whatsapp)) {
        newErrors.whatsapp = "Número de WhatsApp inválido"
    }

    if (!formData.description.trim()) {
        newErrors.description = "Descrição do projeto é obrigatória"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
}