import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt=""
            fill
            src="https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <Image src={"/logo.svg"} width={250} height={200} alt="logo" />
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to SharePanda 🐼
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Your one-stop shop for sharing files, images, and text. SharePanda
              is the easiest way to share your files with anyone in the world.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
                href="#"
              >
                <span className="sr-only">Home</span>
                <Image src={"/logo.svg"} width={150} height={100} alt="logo" />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                Welcome to SharePanda 🐼
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                Your one-stop shop for sharing files, images, and text.
                SharePanda is the easiest way to share your files with anyone in
                the world.
              </p>
            </div>

            {/* Sign in from clerk */}
            <div className="w-full max-w-md mx-auto sm:px-6 lg:px-8 mt-4">
              <SignIn className="mt-8 space-y-6" />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
