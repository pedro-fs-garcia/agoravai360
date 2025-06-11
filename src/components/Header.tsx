import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={
                `fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`
            }
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                        Agora Vai 360
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link to="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
                        Serviços
                    </Link>
                    <Link to="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
                        Portfólio
                    </Link>
                    <Link to="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">
                        Depoimentos
                    </Link>
                    <Link to="#precos" className="text-gray-700 hover:text-blue-600 transition-colors">
                        Preços
                    </Link>
                    <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                        <Link to="#contato">Fale Conosco</Link>
                    </button>
                </nav>

                {/* Mobile Menu button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <Link
                            to="#servicos"
                            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Serviços
                        </Link>
                        <Link
                            to="#portfolio"
                            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Portfólio
                        </Link>
                        <Link
                            to="#depoimentos"
                            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Depoimentos
                        </Link>
                        <Link
                            to="#precos"
                            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Preços
                        </Link>
                        <button
                            className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 w-full"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Link to="#contato">Fale Conosco</Link>
                        </button>
                    </nav>
                </div>
            )}
        </header>
    )
}
