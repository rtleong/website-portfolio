import Header from "@/components/header";
import "./globals.css";
import { Inter, DM_Serif_Display } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { siteContent } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata = {
  title: `${siteContent.name} — Software Engineer`,
  description: siteContent.hero.subtitle,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${inter.variable} ${dmSerif.variable}`}>
      <body className="bg-bg text-ink relative">
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />

          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                background: "#1a1a1a",
                color: "#f6f4ef",
                borderRadius: "9999px",
                padding: "10px 18px",
                fontSize: "0.9rem",
              },
            }}
          />
        </ActiveSectionContextProvider>

        <div className="noise" />
      </body>
    </html>
  );
}
