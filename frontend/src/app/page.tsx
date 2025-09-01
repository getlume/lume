import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center pt-12 md:pt-12 md:pb-[200px]">
      <div className="container flex flex-col md:flex-row-reverse relative z-10">
        <div className="flex flex-col justify-center">
          <h1 className="heading-1 mb-8">
            <span className="text-primary">Lume insurance. </span> We don&apos;t
            just help after your watch is stolen
          </h1>

          <p className="md:text-lg text-gray-600 max-w-[550px] mb-8">
            Lume uses AI and a live stolen-watch database to reduce theft risk,
            flag fraud, and speed up recovery. Built by collectors in London,
            Lume is designed so you can wear what you love — confidently, every
            day.
          </p>

          <p className="md:text-lg text-gray-600 max-w-[550px] mb-8">
            Get early access and 20% off →
          </p>

          <form
            action="https://formspree.io/f/mpwjqary"
            method="POST"
            className="flex flex-col sm:flex-row gap-4 max-w-[600px]"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 border-[3px] border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors"
            />
            <button
              type="submit"
              className="font-bold px-6 py-3 bg-primary border-primary-600 border-[3px] text-neutral-900 rounded-xl hover:bg-primary-700 transition-colors duration-200"
            >
              Join the waiting list
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-2">
            Sign-up for 20% off an annual plan when we launch.{" "}
          </p>
        </div>

        <div className="flex items-center shrink-0 my-20 md:pr-16">
          <Image
            src="/images/hero/main-banner-image.png"
            alt="A Vacheron Constantin watch on a leather car seat"
            width={450}
            height={510}
          />
        </div>
      </div>
    </div>
  );
}
