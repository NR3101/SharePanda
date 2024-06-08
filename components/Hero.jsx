import constants from "../utils/constants";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl dark:text-white">
            <span className="text-primary">Upload, Save </span>
            and easily <span className="text-primary">Share</span> your files
            from one place
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-500 dark:text-gray-300">
            {constants.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto dark:bg-primary dark:hover:bg-blue-700 dark:text-white"
              href="/upload"
            >
              Get Started
            </Link>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-blue-700 focus:outline-none focus:ring active:text-primary sm:w-auto dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:shadow-lg"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
