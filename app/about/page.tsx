import PageHeader from "@/components/page-header";
import Achievements from "@/components/achievements";
import { siteContent } from "@/lib/data";

export const metadata = {
  title: `About — ${siteContent.name}`,
  description: siteContent.aboutPage.subtitle,
};

export default function AboutPage() {
  const { aboutPage } = siteContent;

  return (
    <main className="relative">
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        subtitle={aboutPage.subtitle}
      />

      {/* Intro blurb */}
      <section className="px-6 sm:px-10 max-w-[90rem] mx-auto pb-4">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.25em] text-ink-muted">
              The short version
            </span>
          </div>
          <div className="md:col-span-8 space-y-5 text-base sm:text-lg leading-relaxed text-ink-muted max-w-3xl">
            {aboutPage.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <Achievements block={aboutPage.university} />
      <Achievements block={aboutPage.highSchool} />
    </main>
  );
}
