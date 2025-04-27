import React from 'react';
import { motion } from 'framer-motion';
import bioImage from '../assets/Bio.jpg';

export default function Bio() {
  const paragraphs = [
    `Will Rogers & Clint Buffington have performed as a live acoustic duo in Salt Lake City, Park City, and the wider Salt Lake region since 2012.

Their fun selection of beloved covers from the past several decades combines with their unique vocal harmonies and instrumentation (guitar, banjo, harmonica) to deliver a professional and highly enjoyable performance, every time.

Each live show features songs performed as duets as well as individual performances by Will and Clint.

Rogers & Buffington perform at events of all kinds, including parties, weddings, cocktail hours, corporate events, and more.`
  ];

  return (
    <section className="bg-[#181818] text-gray-100 py-16" aria-labelledby="bio-heading">
      <div className="max-w-5xl mx-auto px-4">
        <h1 id="bio-heading" className="text-center text-4xl font-bold uppercase mb-8">
          Bio
        </h1>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Photo */}
          <figure>
            <motion.img
              src={bioImage}
              alt="Will Rogers on stage playing guitar"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            />
            <figcaption className="sr-only">
              Will Rogers performing live with his guitar and banjo.
            </figcaption>
          </figure>

          {/* Right: Text */}
          <article>
            <motion.div
              className="space-y-8 font-serif text-base leading-loose whitespace-pre-line"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {paragraphs.map((para, idx) => (
                <p key={idx}>
                  {para}
                </p>
              ))}
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
}
