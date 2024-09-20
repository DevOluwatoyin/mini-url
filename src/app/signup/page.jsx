import Link from "next/link";
import Head from "next/head";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Sign up on Scissor</title>
        <meta name="description" content="Log in with Google or Apple" />
      </Head>
      <div className="w-full flex items-center justify-center bg-white">
        <div className="text-center mx-auto w-full max-w-md my-28 space-y-4 px-4 md:px-0">
          <p className="text-neutral-500">Sign up with:</p>
          <div className="flex items-center space-x-6 justify-center">
            <button className="flex space-x-1 bg-primary-400 px-4 py-2 text-white text-base items-center rounded">
              <FcGoogle className="text-xl" />
              <span>Google</span>
            </button>
            <button className="flex space-x-1 bg-primary-400 px-4 py-2 text-white text-base items-center rounded">
              <DiApple className="text-xl" />
              <span>Apple</span>
            </button>
          </div>
          <div className="flex items-center justify-center space-x-6">
            <hr className="w-80 text-neutral-400" />
            <span className="text-neutral-500 text-base">Or</span>
            <hr className="w-80 text-neutral-400" />
          </div>
          <div className="flex flex-col justify-center space-y-5 w-full">
            <input
              type="email"
              placeholder="Username"
              className="border-2 border-primary-400 px-4 py-3 focus:outline-dashed  focus:outline-primary-400 placeholder:text-base placeholder:text-neutral-400 rounded-lg w-full"
            />
            <input
              type="password"
              placeholder="Email"
              className="border-2 border-primary-400 px-4 py-3 focus:outline-dashed  focus:outline-primary-400 placeholder:text-base placeholder:text-neutral-400 rounded-lg w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-primary-400 px-4 py-3 focus:outline-dashed  focus:outline-primary-400 placeholder:text-base placeholder:text-neutral-400 rounded-lg w-full"
            />
            <input
              type="password"
              placeholder="Retype Password"
              className="border-2 border-primary-400 px-4 py-3 focus:outline-dashed  focus:outline-primary-400 placeholder:text-base placeholder:text-neutral-400 rounded-lg w-full"
            />
            <span className="text-neutral-400 text-left text-xs">
              6 or more characters, one number, one uppercase & one lower case.
            </span>
            <button className="w-full rounded-full bg-primary-400 text-white text-base py-3 hover:border hover:border-primary-400 hover:bg-white hover:text-primary-400">
              Signup with Email
            </button>
          </div>
          <p className="text-neutral-500">
            Already have an account?{" "}
            <Link href="/login" className="text-primary-400">
              Log in
            </Link>
          </p>
          <p className="text-neutral-400">
            By signing up, you agree to <br /> Sciccor&apos;s{" "}
            <span className="text-neutral-500">
              Terms of Service, Privacy Policy{" "}
            </span>
            and <span className="text-neutral-500">Acceptable Use Policy.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
