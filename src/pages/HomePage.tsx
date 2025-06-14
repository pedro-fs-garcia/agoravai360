import ArgumentsSection from "@/components/ArgumentsSection";
import Cta from "../components/Cta";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsappButton";
import Hero from "@/components/Hero";

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <ArgumentsSection/>
            <Services />
            <Cta />
            <Portfolio />
            <Testimonials />
            <Pricing />
            <WhatsAppButton />
        </main>
    )
}