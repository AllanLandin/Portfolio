"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import { AppContextProvider } from "@/app/contexts/appContext";
import { useEffect } from "react";
import SuspenseBar from "@/app/components/SuspenseBar";
import About from "@/app/components/About";

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

      <main className="container mx-auto">
        <SuspenseBar />
        <Hero />
        <About />
      </main>
    </AppContextProvider>
  );
}
