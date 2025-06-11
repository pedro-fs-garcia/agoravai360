import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Agora Vai 360</h3>
                        <p className="mb-4">
                            Estratégias de marketing digital personalizadas que geram resultados concretos e sustentáveis para seu
                            negócio.
                        </p>
                        <div className="flex space-x-4">
                            <Link to="#" aria-label="Facebook" className="hover:text-white transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link to="#" aria-label="Instagram" className="hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link to="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Serviços</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#servicos" className="hover:text-white transition-colors">
                                    Desenvolvimento de Sites
                                </Link>
                            </li>
                            <li>
                                <Link to="#servicos" className="hover:text-white transition-colors">
                                    Marketing Digital
                                </Link>
                            </li>
                            <li>
                                <Link to="#servicos" className="hover:text-white transition-colors">
                                    Otimização para SEO
                                </Link>
                            </li>
                            <li>
                                <Link to="#servicos" className="hover:text-white transition-colors">
                                    Gestão de Redes Sociais
                                </Link>
                            </li>
                            <li>
                                <Link to="#servicos" className="hover:text-white transition-colors">
                                    Design e UX/UI
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#" className="hover:text-white transition-colors">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link to="#servicos" className="hover:text-white transition-colors">
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link to="#portfolio" className="hover:text-white transition-colors">
                                    Portfólio
                                </Link>
                            </li>
                            <li>
                                <Link to="#depoimentos" className="hover:text-white transition-colors">
                                    Depoimentos
                                </Link>
                            </li>
                            <li>
                                <Link to="#precos" className="hover:text-white transition-colors">
                                    Preços
                                </Link>
                            </li>
                            <li>
                                <Link to="#contato" className="hover:text-white transition-colors">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                                <span>São José dos Campos, SP</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                                <Link to="tel:+551200000000" className="hover:text-white transition-colors">
                                    (12) 0000-0000
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                                <Link to="mailto:contato@agoravai360.com.br" className="hover:text-white transition-colors">
                                    contato@agoravai360.com.br
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-400">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {currentYear} Agora Vai 360. Todos os direitos reservados.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link to="#" className="hover:text-white transition-colors">
                                Política de Privacidade
                            </Link>
                            <Link to="#" className="hover:text-white transition-colors">
                                Termos de Uso
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
