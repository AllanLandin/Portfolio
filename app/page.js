"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import { AppContextProvider } from "@/app/contexts/appContext";
import SuspenseBar from "@/app/components/SuspenseBar";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <AppContextProvider>
      <Header />
      <div className="px-5 mx-auto">
        <div className="h-screen flex items-center justify-center h-full">
          <Hero />
        </div>
        <div className="flex flex-col gap-9">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
      <div className="mt-9">
        <Footer />
      </div>
      <SuspenseBar />
      <Toaster position="bottom-right" />
    </AppContextProvider>
  );
}
