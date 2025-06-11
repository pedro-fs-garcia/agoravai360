import Cta from "../components/Cta";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsappButton";

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Services />
            <Cta />
            <Portfolio />
            <Testimonials />
            <Pricing />
            <WhatsAppButton />
        </main>
    )
}