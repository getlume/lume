import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center pt-[150px] pb-[200px]">
      <div className="container flex">
        <div>
          <h1 className="heading-1 text-gray-900 max-w-[850px] mb-8">
            Watch insurance. <br />
            <span className="text-[#F4B942]">
              Built for collectors, enthusiasts, and everyday wearers.
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-[550px] mb-6">
            Lume is watch insurance made simple. Get fast online quotes, instant
            cover, and peace of mind — whether you’re insuring a single Rolex or
            your entire collection.
          </p>

          <p className="text-lg text-gray-600 max-w-[550px] mb-12">
            Join our early access list and get 20% off when we launch.
          </p>

          <form
            action="https://formspree.io/f/mpwjqary"
            method="POST"
            className="flex flex-col sm:flex-row gap-4 max-w-[700px]"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 border-[3px] border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E2AB3A] focus:border-[#E2AB3A] outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#F4B942] border-[#E2AB3A] border-[3px] text-[#0A0E12] rounded-xl hover:bg-primary-700 transition-colors duration-200"
            >
              Join the waiting list
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-2">
            Spaces on the waiting list are limited.
          </p>
        </div>

        <div className="flex items-center">
          <Image
            src="/images/hero/main-banner-image.png"
            alt="A Vacheron Constantin watch on a leather car seat"
            width={500}
            height={505}
            className="ml-12"
          />
        </div>
      </div>
    </div>
  );
}
