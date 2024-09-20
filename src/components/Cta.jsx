import Link from "next/link";

const Cta = () => {
  return (
    <div className="form-gradient w-full h-[299px]">
      <div className="cta-bg-img h-full w-full text-center grid place-items-center">
        <div className="lg:w-[50.375rem] max-w-3xl mx-auto grid place-items-center gap-8">
          <h2 className="lg:text-4xl text-white w-full">
            Revolutionizing Link Optimization
          </h2>
          <Link
            href="/login"
            className=" bg-primary-400 text-white hover:bg-white hover:text-primary-300 hover:border hover:border-primary-300 py-2 rounded-full w-48"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
