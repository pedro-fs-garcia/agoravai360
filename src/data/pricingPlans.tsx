import {
  Crown,
  Star,
  Zap,
  Layout,
  Layers,
  Image,
  MessageCircle,
  PenLine,
  ShoppingCart,
  Globe,
  BookOpen,
  Home,
} from "lucide-react"

export const pricingPlans = [
  {
    name: "Landing Page",
    description: "Site perfeito para se apresentar e construir novas oportunidades.",
    price: "R$ 647",
    icon: <Zap className="h-6 w-6" />,
    features: [
      { icon: <Layout className="h-5 w-5" />, feature: "1 página" },
      { icon: <Layers className="h-5 w-5" />, feature: "Até 10 dobras" },
      { icon: <Image className="h-5 w-5" />, feature: "Banner e artes visuais" },
      { icon: <PenLine className="h-5 w-5" />, feature: "Copywriting e textos otimizados" },
      { icon: <MessageCircle className="h-5 w-5" />, feature: "Botão para WhatsApp" },
      { icon: <Globe className="h-5 w-5" />, feature: "Portfólio de projetos" }
    ],
    buttonText: "Quero uma landing page",
    wpMessage: "Olá! Vi que vocês constroem Landing Pages e gostaria de começar agora!",
    deadline: "3 dias úteis",
    popular: false,
    highlight: "Perfeito para começar",
  },
  {
    name: "Site Institucional",
    description: "Perfeito para empresas que buscam crescimento consistente.",
    price: "R$ 1749",
    icon: <Star className="h-6 w-6" />,
    features: [
      { icon: <Layout className="h-5 w-5" />, feature: "Até 5 páginas" },
      { icon: <Image className="h-5 w-5" />, feature: "Banner e artes profissionais" },
      { icon: <PenLine className="h-5 w-5" />, feature: "Copy e textos institucionais" },
      { icon: <MessageCircle className="h-5 w-5" />, feature: "Botão para WhatsApp" },
      { icon: <ShoppingCart className="h-5 w-5" />, feature: "Integração com WooCommerce" },
      { icon: <BookOpen className="h-5 w-5" />, feature: "Seção de blog" }
    ],
    buttonText: "Solicitar meu site institucional",
    wpMessage: "Olá! Gostaria de criar um site institucional para o meu negócio!",
    deadline: "7 dias úteis",
    popular: true,
    highlight: "Tenha presença online",
  },
  {
    name: "Loja Virtual",
    description: "Solução completa para empresas que buscam dominar o mercado digital.",
    price: "R$ 2549",
    icon: <Crown className="h-6 w-6" />,
    features: [
      { icon: <Layout className="h-5 w-5" />, feature: "Até 10 páginas" },
      { icon: <Image className="h-5 w-5" />, feature: "Banner e artes para e-commerce" },
      { icon: <PenLine className="h-5 w-5" />, feature: "Textos e descrições de produtos" },
      { icon: <MessageCircle className="h-5 w-5" />, feature: "Botão WhatsApp para suporte e vendas" },
      { icon: <ShoppingCart className="h-5 w-5" />, feature: "Loja com WooCommerce" },
      { icon: <BookOpen className="h-5 w-5" />, feature: "Blog para conteúdos e SEO" }
    ],
    buttonText: "Alavancar minhas vendas online",
    wpMessage: "Olá! Gostaria de criar uma loja virtual completa para vender meus produtos!",
    deadline: "15 dias úteis",
    popular: false,
    highlight: "E-commerce que vende",
  },
  {
    name: "Vitrine Virtual",
    description: "Solução ideal para mostrar seus produtos ou serviços sem vender online.",
    price: "R$ 3.249",
    icon: <Crown className="h-6 w-6" />,
    features: [
      { icon: <Layout className="h-5 w-5" />, feature: "Até 15 páginas" },
      { icon: <Image className="h-5 w-5" />, feature: "Imagens e banners atrativos" },
      { icon: <PenLine className="h-5 w-5" />, feature: "Textos institucionais e comerciais" },
      { icon: <MessageCircle className="h-5 w-5" />, feature: "Contato via WhatsApp" },
      { icon: <ShoppingCart className="h-5 w-5" />, feature: "WooCommerce modo catálogo" },
      { icon: <Home className="h-5 w-5" />, feature: "Ideal para hotéis, imobiliárias e clínicas" }
    ],
    buttonText: "Exibir meus produtos online",
    wpMessage: "Olá! Gostaria de criar uma vitrine virtual para mostrar meus serviços e produtos!",
    deadline: "15 dias úteis",
    popular: false,
    highlight: "Imobiliárias, hotéis e clínicas",
  }
]
