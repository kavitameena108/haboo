"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="text-gray-800">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-gray-100 overflow-hidden">
        <Image
          src="/aboutimage3.jpeg"
          alt="Haboo Home Furnishing"
          fill
          className="object-cover opacity-70"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-6xl font-bold text-white text-center drop-shadow-xl"
        >
          Home, with Soul
        </motion.h1>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg mb-8"
        >
          Haboo was born out of love, family, and the desire to create a home that feels warm, safe, and beautifully personal.
        </motion.p>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">🌿 The Story of Haboo</h2>

          <p className="mb-4">
            Founded by <strong>Sankeet and Kirti</strong>, the journey began when they welcomed their son, <strong>Chaarith</strong>, into their lives. Like every parent, they dreamed of giving him a childhood wrapped in comfort, purity, and joy. But in their search for home furnishings that were both premium in quality and soulful in design, they found a gap—products were either mass-made and impersonal or luxurious but disconnected from everyday emotions.

          </p>

          <p className="mb-4">
           So, they decided to create something of their own. Something that wasn’t just fabric stitched together, but a canvas of memories, care, and culture. That’s how <strong>Haboo</strong> was born—a name that carries the warmth of home and the embrace of love.

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <Image
              src="/story1.webp"
              width={600}
              height={400}
              className="rounded-xl object-cover"
              alt="Haboo Story Image 1"
            />
            <Image
              src="/story2.webp"
              width={600}
              height={400}
              className="rounded-xl object-cover"
              alt="Haboo Story Image 2"
            />
          </div>

          <p className="mb-6">
            Every <strong>Haboo</strong> product—whether it’s a bedsheet, quilt, dohar, runner, or fabric painting—is crafted to bring more than just beauty to your space. It brings stories. The soft folds of a comforter that turn ordinary evenings into cozy movie nights. The vibrant prints of a bedsheet that spark festive laughter and family chatter. The delicate strokes of a fabric painting that remind you of tradition and togetherness.

          </p>
          <p className="mb-6">
           At Haboo, we believe a home is not built by walls, but by the comfort and emotions you wrap around your loved ones. That’s why every piece we create blends artistry, heritage, and premium quality—so your home feels like a reflection of love.
          </p>
          <p className="mb-6">
           <strong>Haboo isn’t just about furnishing homes. It’s about furnishing moments, memories, and magic—one fabric at a time.</strong>
          </p>
        </motion.section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {[ 
              { title: "Artistry", desc: "Every pattern and stroke carries emotion and intention." },
              { title: "Heritage", desc: "Designs inspired by Indian culture, roots, and traditions." },
              { title: "Premium Quality", desc: "Crafted using the finest fabrics for comfort and durability." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-6 border rounded-xl shadow-sm bg-white"
              >
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-10 text-gray-600 text-lg">
          “A home isn’t built by walls. It’s built by the comfort and emotions you wrap around those you love.”
        </blockquote>

        <div className="my-12">
          <Image
            src="/fabric-banner.jpg"
            alt="Haboo Products"
            width={1200}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mt-12">
          ✨ Haboo — "Home, with Soul"
        </h2>
      </div>
    </main>
  );
}
