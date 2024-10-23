import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import Header from "./components/header";
import { ThemeProvider } from "./components/theme-provider"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./components/app-sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Expert Notes",
  description: "A collection of notes on software engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <SidebarTrigger />
              <main className="w-full px-14">
                <Header></Header>
                {children}
              </main>
            </SidebarProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
