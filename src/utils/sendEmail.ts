import contactInfo from "../data/contactInfo.json"

type FormData = {
    name: string,
    email:string,
    whatsapp: string,
    description: string
}

export const submitWpMessage = async (e: React.FormEvent, formData:FormData) => {
    try {
        // Simular envio (aqui você pode integrar com sua API)
        await new Promise((resolve) => setTimeout(resolve, 500))
        console.log(e)

        // Criar mensagem para WhatsApp
        const message = `*Nova solicitação de orçamento - Agora Vai 360*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*WhatsApp:* ${formData.whatsapp}

*Descrição do Projeto:*
${formData.description}

---
Enviado através do site da Agora Vai 360`

        // Abrir WhatsApp em nova aba
        const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    } catch (error) {
        console.error("Erro ao enviar formulário:", error)
    }
}


export const submitFormSpree = async (
  e: React.FormEvent,
  formData: FormData
) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/SEU_ID_AQUI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        message: formData.description,
      }),
    });

    if (response.ok) {
      console.log("Formulário enviado com sucesso via FormSpree")
    } else {
      console.error("Erro ao enviar formulário via FormSpree")
    }
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
  }
};


export const submitComFormSubmit = async (
  e: React.FormEvent,
  formData: FormData
) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formsubmit.co/ajax/contato@agoravai.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        message: formData.description,
      }),
    });

    if (response.ok) {
      console.log("Formulário enviado com sucesso via FormSubmit")
    } else {
      console.error("Erro ao enviar formulário via FormSubmit")
    }
  } catch (err) {
    console.error("Erro ao enviar:", err);
  }
};
