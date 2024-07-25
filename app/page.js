"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import { AppContextProvider } from "@/app/contexts/appContext";
import { useEffect } from "react";
import SuspenseBar from "@/app/components/SuspenseBar";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  useEffect(() => {
    let selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });

  return (
    <AppContextProvider>
      <Header />
      <div className="container mx-auto">
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
    </AppContextProvider>
  );
}
