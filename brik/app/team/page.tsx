import Header from "@/components/header"
import Footer from "@/components/footer"
import TeamSection from "@/components/team-section"
import PageTransition from "@/components/page-transition"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"

export const metadata = {
  title: "Our Team | BRIK",
  description: "Meet the dedicated team behind BRIK",
}

export default function TeamPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col">
        <Header />

        {/* Team Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <AnimatedSection className="text-center mb-12">
            <p className="text-gray-600 uppercase tracking-wider mb-2">OUR TEAM</p>
            <h1 className="text-4xl md:text-6xl font-bold">
              Meet <span className="text-blue-500">our team</span>
            </h1>
            <AnimatedSection delay={0.3} className="mt-6">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                <AnimatedText
                  text="The BRIK team is committed to empowering the next generation of founders. We're passionate about helping technical builders transform their ideas into thriving, successful companies."
                  type="words"
                  wordSpacing="normal"
                />
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <TeamSection />
          </AnimatedSection>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
