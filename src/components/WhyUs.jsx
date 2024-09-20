import Image from "next/image";
import link from "../assets/short-link.png";
import custom from "../assets/modify-link.png";
import qr from "../assets/qr-link.png";
import analysis from "../assets/link-analysis.png";

const WhyUs = () => {
  return (
    <div id="why-us" className="bg-white w-full pb-10 md:py-14">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-between  md:items-start md:flex-row md:space-x-14 md:px-4">
        <div className="w-full px-4 mb-8 space-y-4 text-justify md:text-left md:w-1/3 md:px-0 md:mb-0">
          <h2 className="font-bold text-main-text text-3xl">
            Why choose <span className="text-primary-400">Scissor</span>
          </h2>
          <p>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </div>
        <div className="flex flex-col px-4 justify-between md:w-2/3 gap-8 md:px-0">
          <div className="flex justify-between items-center gap-6">
            <div className="space-y-3 w-1/2 flex flex-col items-center text-justify md:block">
              <Image src={link} alt="link" />
              <h3 className="font-medium text-xl">URL Shortening</h3>
              <p>
                Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.
              </p>
            </div>
            <div className="space-y-3 w-1/2 flex flex-col items-center text-justify md:block md:text-left">
              <Image src={custom} alt="link" />
              <h3 className="font-medium text-xl">Custom URLs</h3>
              <p>
                With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="space-y-3 w-1/2 flex flex-col items-center text-justify md:block md:text-left">
              <Image src={qr} alt="link" />
              <h3 className="font-medium text-xl">QR Codes</h3>
              <p>
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
            <div className="space-y-3 w-1/2 flex flex-col items-center text-justify md:block md:text-left">
              <Image src={analysis} alt="link" />
              <h3 className="font-medium text-xl">Data Analytics</h3>
              <p>
                Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
