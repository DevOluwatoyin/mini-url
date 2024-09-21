"use client";

import BotBubble from "@/components/BotComponents/Bot";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Price from "@/components/Price";
import WhyUs from "@/components/WhyUs";
import { BotContext } from "@/context/BotContext";
import { useContext, useState } from "react";

export default function Home() {
  const [showBot, toggleBot] = useState(false);

  const { buttonStyle, botPosition } = useContext(BotContext);
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <WhyUs />
      <Price />
      <Form />
      <Faq />
      <Cta />

      <div
        className={`fixed flex flex-col gap-4 z-20 ${
          botPosition ? botPosition : "bottom-8 right-4 items-end"
        }`}
      >
        {showBot && <BotBubble />}

        <button
          onClick={() => toggleBot((prev) => !prev)}
          className={`bg-primary-300 w-20 h-20 hover:bg-[#1E3448] transition-all rounded-full text-white ${
            showBot ? "animate-none" : "animate-pulse"
          } ${buttonStyle ? buttonStyle : "align-self-end"}`}
        >
          Chat
        </button>
      </div>
    </main>
  );
}
