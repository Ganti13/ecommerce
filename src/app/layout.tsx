import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { QueryProvider } from "./components/QueryProvider";
import { Hydrate } from "./components/Hydrate";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MS Emporium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={mont.className}>
        <QueryProvider>
          <Hydrate>
            <Header />
            {children}
            <Footer />
          </Hydrate>
        </QueryProvider>
      </body>
    </html>
  );
}
