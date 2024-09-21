"use client";
import { useState, useRef } from "react";
import { db } from "../firebase";
import { nanoid } from "nanoid";
import { ImMagicWand } from "react-icons/im";
import { MdOutlineCopyAll } from "react-icons/md";
import CopyToClipboard from "./Copy";

const Form = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const shortCode = customCode || generateShortCode();

    try {
      await db.collection("urls").doc(shortCode).set({
        originalUrl,
        shortCode,
      });
      setShortenedUrl(`https://mini-url-kappa.vercel.app/${shortCode}`);
      // https://scissor-url-shortner.vercel.app/
    } catch (error) {
      console.error("Error creating short URL:", error);
    }
  };

  const generateShortCode = () => {
    const code = nanoid(6);
    return code;
  };

  return (
    <div className="form-gradient w-full">
      <div className="form-bg-img w-full flex items-center px-6 justify-center py-20 md:px-0">
        <div className="bg-white rounded-xl p-10 sm:w-1/2 lg:w-1/3 space-y-6 text-sm">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col justify-between space-y-4"
          >
            <input
              type="text"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              placeholder="Paste URL here..."
              className="border border-primary-100 placeholder:text-primary-100 placeholder:text-xs p-4 rounded-xl focus:outline-none"
            />
            <input
              type="text"
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
              placeholder="Customize short URL (optional)"
              className="border border-primary-100 placeholder:text-primary-100 placeholder:text-xs p-4 rounded-xl focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center space-x-4 bg-primary-400 rounded-full w-full text-white py-4 hover:bg-white hover:text-primary-400 hover:border hover:border-primary-400 transition ease-in-out"
            >
              Trim URL{" "}
              <span className="text-white">
                <ImMagicWand />
              </span>
            </button>
          </form>
          {shortenedUrl && (
            <div className="flex items-center space-x-2">
              <span>
                Shortened URL:{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-foundation-red"
                  href={shortenedUrl}
                >
                  {shortenedUrl}
                </a>
              </span>
              <CopyToClipboard textToCopy={shortenedUrl}>
                <MdOutlineCopyAll width={20} className="text-primary-400 cursor-pointer" />
              </CopyToClipboard>
            </div>
          )}
          <p className="text-primary-100">
            By clicking Trim URL, I agree to the{" "}
            <strong className="text-primary-100">
              Terms of Service, Privacy Policy
            </strong>{" "}
            and Use of Cookies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
