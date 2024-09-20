import Image from "next/image";
import links from "../assets/link-img.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="bg-[url('../assets/hero-bg-top.png')] bg-no-repeat bg-cover bg-center w-full pt-20">
        <div className="w-full bg-[url('../assets/hero-bg-bottom.png')] bg-no-repeat bg-contain bg-bottom pb-20 md:pb-40">
          <div className="pt-10 w-full max-w-4xl mx-auto">
            <h1 className="text-main-text text-center text-xl font-bold w-11/12 mx-auto leading-relaxed lg:text-4xl lg:w-10/12">
              Optimize Your Online Experience with Our Advanced{" "}
              <span className="text-primary-400">URL Shortening</span> Solution
            </h1>
            <p className="w-11/12 text-justify mx-auto md:text-center md:w-3/4">
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              options to reinforce your brand presence and enhance user
              engagement.
            </p>
            <div className="flex w-1/2 mx-auto space-x-4 my-8 md:w-1/3">
              <Link
                href="/signup"
                className="text-white text-center bg-primary-300 hover:bg-white hover:text-primary-300 hover:border hover:border-primary-300 py-2 rounded-full w-1/2"
              >
                Sign up
              </Link>
              <Link
                href="/"
                className="text-primary-300 text-center hover:border hover:border-primary-300 py-2 rounded-full w-1/2"
              >
                Learn more
              </Link>
            </div>
            <div className="flex flex-col items-center w-4/5 mx-auto bg-bg-light border border-primary-100 rounded-xl p-8 md:w-1/2">
              <Image src={links} alt="links" className="h-auto" />
              <p>
                Seamlessly transform your long URLs into concise and{" "}
                <strong>shareable links</strong> with just few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg-light md:px-2">
        <div className="w-full max-w-6xl mx-auto flex flex-col justify-between items-center py-10 space-y-4 md:space-y-0 md:flex-row">
          <p className="font-bold text-2xl text-center w-full md:max-w-[230px] md:text-left">
            One Stop.
            <br /> Four{" "}
            <span className="font-bold text-primary-400">Possibilities.</span>
          </p>
          <div className="w-full grid grid-cols-[1fr_1fr] place-items-baseline px-4 md:flex md:justify-between">
            <p className="flex flex-col justify-center md:items-left">
              <span className="font-bold text-xl">3M</span>
              <span>Active users</span>
            </p>
            <p className="flex flex-col justify-center md:items-left">
              <span className="font-bold text-xl">60M</span>
              <span>
                Links & QR <br /> codes created
              </span>
            </p>
            <p className="flex flex-col justify-center md:items-left">
              <span className="font-bold text-xl">1B</span>
              <span>
                Clicked & Scanned <br /> connections
              </span>
            </p>
            <p className="flex flex-col justify-center md:items-left">
              <span className="font-bold text-xl">300k</span>
              <span>App Integrations</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
