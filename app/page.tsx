import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="relative">
      {/* Subtle Bloomberg-tinted background (orange highlight + warm shadow). */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(60rem 40rem at 88% -8%, rgba(250,157,52,0.38), transparent 60%),
            radial-gradient(55rem 38rem at 0% 30%, rgba(250,157,52,0.22), transparent 65%),
            radial-gradient(50rem 32rem at 50% 115%, rgba(20,24,40,0.16), transparent 70%)
          `,
        }}
      />
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
