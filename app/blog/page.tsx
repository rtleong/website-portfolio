import PageHeader from "@/components/page-header";
import Blog from "@/components/blog";
import { siteContent } from "@/lib/data";

export const metadata = {
  title: `Blog — ${siteContent.name}`,
  description: siteContent.blogPage.subtitle,
};

export default function BlogPage() {
  const { blogPage } = siteContent;

  return (
    <main className="relative">
      <PageHeader
        eyebrow={blogPage.eyebrow}
        title={blogPage.title}
        subtitle={blogPage.subtitle}
      />
      <Blog />
    </main>
  );
}
