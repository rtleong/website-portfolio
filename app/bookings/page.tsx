import PageHeader from "@/components/page-header";
import Bookings from "@/components/bookings";
import { siteContent } from "@/lib/data";

export const metadata = {
  title: `Bookings — ${siteContent.name}`,
  description: siteContent.bookingsPage.subtitle,
};

export default function BookingsPage() {
  const { bookingsPage } = siteContent;

  return (
    <main className="relative">
      <PageHeader
        eyebrow={bookingsPage.eyebrow}
        title={bookingsPage.title}
        subtitle={bookingsPage.subtitle}
      />
      <Bookings />
    </main>
  );
}
