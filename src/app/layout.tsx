import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/features/navbar";
import { ThemeProvider } from "@/context/theme-provider";
import { Footer } from "@/features/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benjamin Toh's Website",
  description: "Benjamin's developer portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-zinc-50 dark:bg-black", inter.className)}>
        <ThemeProvider
          attribute="class" 
          defaultTheme='system' 
          enableSystem 
          disableTransitionOnChange
        >
          <div className=" mx-auto max-w-6xl px-4 bg-zinc-50 dark:bg-black">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
              <Navbar/>
              <div className="flex min-h-screen md:px-24 px-8 pt-8 pb-12">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
