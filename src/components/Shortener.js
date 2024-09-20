"use client";
import { useState, useRef } from "react";
import { db } from "../firebase";
import { nanoid } from "nanoid";
import QRCode from "qrcode.react";

const Shortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const qrCodeRef = useRef(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const shortCode = customCode || generateShortCode();

    try {
      await db.collection("urls").doc(shortCode).set({
        originalUrl,
        shortCode,
      });
      setShortenedUrl(`http://localhost:3000/${shortCode}`);
    } catch (error) {
      console.error("Error creating short URL:", error);
    }
  };

  const generateShortCode = () => {
    const code = nanoid(6);
    return code;
  };

  const handleDownloadQRCode = () => {
    if (qrCodeRef.current) {
      const canvas = qrCodeRef.current.querySelector("canvas");
      const dataUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = "qrcode.png";
      downloadLink.click();
    }
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col justify-between items-center gap-10"
      >
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter a URL"
        />
        <input
          type="text"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
          placeholder="Customize short URL (optional)"
        />
        <button type="submit">Shorten</button>
      </form>
      {shortenedUrl && (
        <div>
          Shortened URL: <a href={shortenedUrl}>{shortenedUrl}</a>
        </div>
      )}
      {shortenedUrl && (
        <div>
          QR Code:
          <div ref={qrCodeRef}>
            <QRCode
              value={shortenedUrl}
              size={128}
              level="H"
              includeMargin={true}
            />
          </div>
          <button onClick={handleDownloadQRCode}>Download QR Code</button>
        </div>
      )}
    </div>
  );
};

export default Shortener;
