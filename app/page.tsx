import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1200px] px-6">
        <Navbar />
        <main className="space-y-24 py-8">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}

