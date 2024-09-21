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
      <div
        className={`fixed flex flex-col gap-4 z-20 ${
          botPosition ? botPosition : "bottom-8 right-4 items-end"
        }`}
      >
        {showBot && <BotBubble />}

        <button
          onClick={() => toggleBot((prev) => !prev)}
          className={`bg-primary-300 w-20 h-20 hover:bg-[#1E3448] transition-all rounded-full text-white flex items-center justify-center focus:outline-2 focus:outline-offset-2 ${
            showBot ? "animate-none" : "animate-pulse"
          } ${buttonStyle ? buttonStyle : "align-self-end"}`}
          tabIndex={0} // Ensures the button is focusable
          aria-label="Chat with us"
          aria-expanded={showBot} // Indicates if the chat is open or closed
        >
          <svg
            className="w-8 h-8"
            role="img"
            aria-label="Chat icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.371 0 0 4.641 0 10.368c0 2.94 1.507 5.606 3.959 7.457C3.662 21.451 1.231 23.809 1.094 23.927c-.155.14-.181.376-.069.562.098.158.273.246.454.246.068 0 .137-.012.204-.035.177-.061 4.369-1.494 6.961-3.234 1.086.271 2.221.413 3.356.413 6.629 0 12-4.641 12-10.368C24 4.641 18.629 0 12 0zm0 19.929c-1.07 0-2.135-.132-3.17-.394-.121-.03-.253-.005-.358.067-2.086 1.448-4.682 2.57-5.892 3.062.656-.944 1.705-2.76 2.08-3.743.077-.199.007-.423-.173-.55C2.4 17.167 1.4 14.762 1.4 12.368 1.4 7.05 6.041 2.7 12 2.7c5.959 0 10.6 4.35 10.6 9.667 0 5.317-4.641 9.667-10.6 9.667z" />
          </svg>
          <span className="sr-only">
            Click to chat with us and get support for URL shortening or any
            other inquiries.
          </span>
        </button>
      </div>
      <Hero />
      <WhyUs />
      <Price />
      <Form />
      <Faq />
      <Cta />
    </main>
  );
}
