"use client";

import BotBubble from "@/components/BotComponents/Bot";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Price from "@/components/Price";
import WhyUs from "@/components/WhyUs";
import { useState } from "react";

export default function Home() {
  const [showBot, toggleBot] = useState(false);
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <WhyUs />
      <Price />
      <Form />
      <Faq />
      <Cta />

      <div className="fixed bottom-8 right-4 flex flex-col gap-4 items-end z-20">
        {showBot && <BotBubble />}

        <button
          onClick={() => toggleBot((prev) => !prev)}
          className={`bg-primary-300 w-20 h-20 hover:bg-[#1E3448] transition-all rounded-full text-white align-self-end ${
            showBot ? "animate-none" : "animate-pulse"
          }`}
        >
          Chat
        </button>
      </div>
    </main>
  );
}
