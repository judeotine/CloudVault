import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-3xl py-12 sm:py-20">
          <div className="text-center">
            <div className="relative">
              <Image
                src="/logo.png"
                width="200"
                height="200"
                alt="file drive logo"
                className="inline-block mb-12 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute -inset-1 blur-2xl bg-gradient-to-r from-pink-500 to-violet-500 opacity-10 -z-10 rounded-full"></div>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              The easiest way to upload and share files
            </h1>
            
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
              Make an account and start managing your files in less than a minute.
              Simple, secure and seamless sharing for your company.
            </p>

            <div className="mt-12 flex items-center justify-center gap-x-6">
              <Link
                href="/dashboard/files"
                className="rounded-full bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out hover:shadow-indigo-500/25"
              >
                Get started
              </Link>
              <a
                href="#"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}