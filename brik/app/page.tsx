/**
 * Main landing page component for BRIK platform
 * 
 * This file contains the homepage implementation with various sections including:
 * - Hero section with main messaging
 * - Alumni/investors section showing partnerships
 * - Connect section highlighting community aspects
 * - FAQ section for common questions
 * - CTA sections for user conversion
 * 
 * The page uses various animation components for smooth transitions and visual appeal.
 */

// UI Component imports
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Layout component imports
import Header from "@/components/header"
import InvestorGrid from "@/components/investor-grid"
import Footer from "@/components/footer"
import Image from "next/image"

// Animation component imports
import PageTransition from "@/components/page-transition"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"

/**
 * Homepage component that renders the BRIK landing page
 * Includes multiple animated sections and content blocks
 * @returns The complete homepage with all sections and components
 */
export default function Home() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col">
        <Header />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center" id="home">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-4xl font-bold mb-4">
                <span className="text-blue-500">ONE STEP AT A TIME</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-6xl md:text-8xl font-bold mb-6">
                <AnimatedText text="India's Fast-Track for Builders" type="words" wordSpacing="normal" />
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                A selective ecosystem to grow with peers, mentors, and real-world projects.
                <br />
                No courses. No fake certificates. Just building — together.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <Button
                size="lg"
                className="rounded-full text-lg px-8 py-6 bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-105"
              >
                Request Invite
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Alumni Section */}
        <AnimatedSection className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection direction="left" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                BRIK is where India's top student builders <span className="text-blue-500">connect, create</span> and{" "}
                <span className="text-blue-500">level up.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.4}>
              <InvestorGrid />
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* BRIK Connects Section */}
        <section className="bg-blue-500 py-24 md:py-32 text-white text-center overflow-hidden">
          <AnimatedSection className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <AnimatedText
                text="you don't just learn,"
                className="text-white"
                type="words"
                wordSpacing="normal"
              />
                   <AnimatedText
                text="you grow with the ones who get it."
                className="text-white"
                type="words"
                wordSpacing="normal"
              />
            </h2>
          </AnimatedSection>
        </section>

        {/* Pattern Section - Explains BRIK's approach */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                There's a pattern among the <span className="text-blue-500">most successful Builders.</span>
              </h2>
              <p className="text-xl mb-4">
                They learn directly from those who've done it — and then they do it themselves.
              </p>
              <p className="text-xl mb-4">
                At BRIK, you get access to mentors who've shipped, scaled, and failed forward.
              </p>
              <p className="text-xl mb-4">Success leaves clues— We help you follow them by building, not watching.</p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative w-full aspect-square max-w-md mx-auto rotate-3 shadow-xl transition-transform duration-500 hover:rotate-0 hover:scale-105">
                <Image
                  src="/images/google-page-brin-01-gty-jc-191203_hpMain.jpg"
                  alt="Google founders"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 rounded-b-lg">
                  <p className="font-bold text-lg">SERGEY BRIN & LARRY PAGE</p>
                  <p className="font-bold">(FOUNDERS OF GOOGLE)</p>
                  <p className="text-sm">
                    Mentored by Andy Bechtolsheim <span className="text-blue-500">(founder of Sun Microsystems)</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Who are Z Fellows Section */}
        <section className="container mx-auto px-4 py-16 md:py-24" id="about">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              Who are <span className="text-blue-500">BRIK Builders?</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection direction="left">
              <p className="text-xl md:text-2xl font-bold mb-4">
                BRIK is for <span className="font-bold">ambitious college students who are building real things.</span>
              </p>
              <p className="text-xl mb-4">We are your first believer.</p>
              <p className="text-lg mb-5">
                Our talent comes from diverse backgrounds: engineering undergrads, self-taught coders, design
                enthusiasts, and aspiring founders — all united by one thing: they don't wait. They build. Whether it's
                AI, developer tools, consumer tech, edtech, fintech, SaaS, health, climate, or more — BRIK is where
                India's next generation of tech talent accelerates their journey.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative transition-transform duration-500 hover:scale-105">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Z Fellows group"
                  width={500}
                  height={350}
                  className="rounded-lg mx-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* About the Program Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <AnimatedSection className="text-center mb-12">
            <p className="text-gray-600 uppercase tracking-wider mb-2">ABOUT THE PROGRAM</p>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We select high-potential tech students and drop them into a fast-paced, mentorship-driven ecosystem{" "}
                <span className="text-gray-500">designed to help them grow through building.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="mt-8">
              <div className="transition-transform duration-500 hover:scale-105">
                <Image
                  src="/placeholder.svg?height=600&width=1000"
                  alt="Z Fellows program"
                  width={1000}
                  height={600}
                  className="rounded-lg mx-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQs Section - Common questions about BRIK */}
        <section className="container mx-auto px-4 py-16 md:py-24" id="faqs">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-12">FAQs</h2>
          </AnimatedSection>
          <AnimatedSection className="max-w-3xl mx-auto" delay={0.3}>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "What is BRIK?",
                  answer:
                    "BRIK is a talent accelerator designed for ambitious college students who are building real, impactful projects. It provides a community, resources, and mentorship to help students accelerate their journey into tech, whether they are working on AI, consumer tech, fintech, or any other domain.",
                },
                {
                  question: "Who can join BRIK?",
                  answer:
                    "BRIK is open to college students from diverse backgrounds — engineering undergrads, self-taught coders, design enthusiasts, and aspiring founders. If you're passionate about building and want to grow in the tech space, BRIK is for you.",
                },
                {
                  question: "What kind of support does BRIK provide to its members?",
                  answer:
                    "BRIK offers access to a vibrant community of like-minded students, expert mentors, and industry leaders. Members receive guidance on their projects, opportunities for internships and job placements, and exclusive access to hackathons and startup initiatives. We also provide resources to help you build your skills and network.",
                },
                {
                  question: "Is there any cost to joining BRIK?",
                  answer:
                    "BRIK is free for eligible students who meet the community's criteria. We want to ensure that talented individuals from all backgrounds have the opportunity to accelerate their careers without any financial barriers.",
                },
                {
                  question: "How does BRIK connect its members with job or internship opportunities?",
                  answer:
                    "BRIK partners with startups and tech companies to provide internship and job opportunities to its members. Through hackathons, networking events, and direct connections, we make sure you have a pathway to apply your skills in real-world scenarios and get hired.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border rounded-lg mb-4 bg-gray-50 transition-all duration-300 hover:shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 text-xl font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </section>

        {/* CTA Section - Final call to action for visitors */}
        <section className="bg-blue-500 py-24 md:py-32 text-white text-center">
          <AnimatedSection className="container mx-auto px-4">
            <h2 className="text-4xl md:text-7xl font-bold mb-6">
              <AnimatedText
                text="When in doubt, apply."
                
                className="text-white"
                type="words"
                wordSpacing="normal"
              />
              <AnimatedText
                text="We're all winging it :)"
                
                className="text-white"
                type="words"
                wordSpacing="normal"
              />
            </h2>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full text-lg px-8 py-6 bg-white text-blue-500 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Request Invite
            </Button>
          </AnimatedSection>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
