import PageHeader from "@/components/page-header";
import Hobbies from "@/components/hobbies";
import { siteContent } from "@/lib/data";

export const metadata = {
  title: `Hobbies — ${siteContent.name}`,
  description: siteContent.hobbiesPage.subtitle,
};

export default function HobbiesPage() {
  const { hobbiesPage } = siteContent;

  return (
    <main className="relative">
      <PageHeader
        eyebrow={hobbiesPage.eyebrow}
        title={hobbiesPage.title}
        subtitle={hobbiesPage.subtitle}
      />
      <Hobbies />
    </main>
  );
}
