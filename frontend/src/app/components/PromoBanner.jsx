import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="relative container mx-auto px-4 py-12">
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
        <Image
          src="/bed linen5.jpeg"
          alt="Special Offer"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold">Flat 20% Off</h2>
          <p className="mt-2 text-base md:text-lg">On your first purchase</p>
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 py-2 px-5 rounded-lg transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
