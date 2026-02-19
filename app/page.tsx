"use client";

import { useState } from "react";
import ContactSection from "@/components/ContactSection";
import DestinationsCarousel from "@/components/DestinationsCarousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import PlanCruiseModal from "@/components/PlanCruiseModal";
import SpotlightSection from "@/components/SpotlightSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyCruisesSection from "@/components/WhyCruisesSection";
import { destinations, testimonials } from "@/lib/data";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen" id="top">
      <NavBar onPlanClick={() => setModalOpen(true)} />
      <Hero onPlanClick={() => setModalOpen(true)} />
      <WhyCruisesSection />
      <DestinationsCarousel destinations={destinations} />
      <SpotlightSection />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
      <Footer />
      <PlanCruiseModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
