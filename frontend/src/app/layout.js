import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Haboo",
  description: "D2C eCommerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="pt-[72px]"> {/* Padding so content starts below header */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
