"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  { image: "/badsheet3.jpeg", text: "Luxury Bedding for Your Home" },
  { image: "/badsheet4.jpeg", text: "Curtains that Elevate Spaces" },
  { image: "/badsheets8.jpeg", text: "Timeless Table Decor" },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <Image
        src={slides[current].image}
        alt="Banner"
        fill
        className="object-cover transition-all duration-700"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold">{slides[current].text}</h1>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
}
