import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center pt-[100px] pb-[200px]">
      <section className="bg-white">
        <div className="container flex">
          <div>
            <h1 className="heading-1 text-gray-900 max-w-[750px] mb-6">
              Watch insurance. <br />
              <span className="text-[#F4B942]">
                Built for collectors, enthusiasts, and everyday wearers.
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-[550px] mb-6">
              Lume is watch insurance made simple. Get fast online quotes,
              instant cover, and peace of mind — whether you’re insuring a
              single Rolex or your entire collection.
            </p>

            <p className="text-lg text-gray-600 max-w-[550px]">
              Join our early access list and get 20% off when we launch.
            </p>
          </div>

          <Image
            src="/images/hero/main-banner-image.png"
            alt="A Vacheron Constantin watch on a leather car seat"
            width={536}
            height={545}
            className=""
          />
        </div>
      </section>
    </div>
  );
}
