import Header from "@/components/header"
import Footer from "@/components/footer"
import MentorSection from "@/components/mentor-section"
import PageTransition from "@/components/page-transition"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"

export const metadata = {
  title: "Meet Our Mentors | BRIK",
  description: "Learn about the successful founders and executives who mentor BRIK members",
}

export default function MentorsPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col">
        <Header />

        {/* Mentors Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <AnimatedSection className="text-center mb-12">
            <p className="text-gray-600 uppercase tracking-wider mb-2">MENTORS</p>
            <h1 className="text-4xl md:text-6xl font-bold">
              Meet <span className="text-blue-500">the mentors</span>
            </h1>
            <AnimatedSection delay={0.3} className="mt-6">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                <AnimatedText
                  text="Our mentors are visionary founders and executives who have built industry-leading companies. They offer expert guidance, valuable connections, and actionable insights to help BRIK members thrive."
                  type="words"
                  wordSpacing="normal"
                />
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <MentorSection />
          </AnimatedSection>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
