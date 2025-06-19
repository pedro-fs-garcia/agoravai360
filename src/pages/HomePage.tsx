import ArgumentsSection from "@/components/ArgumentsSection";
import Cta from "../components/Cta";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsappButton";
import Hero from "@/components/Hero";
import Services2 from "@/components/Services2";
import FAQ2 from "@/components/FAQ2";

export default function HomePage() {
    return (
        <main className="min-h-screen">
            {/* <Hero /> */}
            {/* <Hero2></Hero2> */}
            <Hero/>
            <Services2/>
            <Cta />
            <Portfolio />
            <Testimonials />
            <ArgumentsSection/>
            {/* <Services /> */}
            <Pricing />
            {/* <FAQ/> */}
            <FAQ2/>
            <WhatsAppButton />
        </main>
    )
}