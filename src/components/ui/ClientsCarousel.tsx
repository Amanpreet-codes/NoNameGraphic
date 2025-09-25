'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Manual client entries - update with actual business names and filenames
const clients = [
  { name: 'Wedding Invites', logo: '/portfolio/clients/1.png' },
  { name: 'Astrology', logo: '/portfolio/clients/2.png' },
  { name: 'Automobile', logo: '/portfolio/clients/3.png' },
  { name: 'Clothing Shops', logo: '/portfolio/clients/4.png' },
  { name: 'Education', logo: '/portfolio/clients/5.png' },
  { name: 'Fintech', logo: '/portfolio/clients/6.png' },
  { name: 'Hotel', logo: '/portfolio/clients/7.png' },
  { name: 'Jewellery', logo: '/portfolio/clients/8.png' },
  { name: 'Logistic', logo: '/portfolio/clients/9.png' },
  { name: 'Medical', logo: '/portfolio/clients/10.png' },
  { name: 'Mehendi Artists', logo: '/portfolio/clients/11.png' },
  { name: 'Music', logo: '/portfolio/clients/12.png' },
  { name: 'Politician', logo: '/portfolio/clients/13.png' },
  { name: 'Real Estate', logo: '/portfolio/clients/14.png' },
  { name: 'Restaurant', logo: '/portfolio/clients/15.png' },
  { name: 'Saloon', logo: '/portfolio/clients/16.png' },
  { name: 'Travel', logo: '/portfolio/clients/17.png' },
];

export default function ClientsCarousel() {
  if (clients.length === 0) {
    return null;
  }

  // Duplicate clients array for seamless circular loop
  const allClients = [...clients, ...clients];

  return (
    <section className="w-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-titillium">
            Trusted by Amazing Clients
          </h2>
          <p className="text-neutral-300 text-lg font-exo2 max-w-2xl mx-auto">
            We're proud to have worked with incredible brands and businesses from around the world.
          </p>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-800 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-800 to-transparent z-10" />
        
        {/* Scrolling Content */}
        <motion.div
          className="flex items-center gap-8 md:gap-12"
          animate={{
            x: [0, `-${clients.length * 15}rem`],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: clients.length * 2,
            ease: "linear",
          }}
        >
          {allClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group relative"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={150}
                height={80}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                loading="lazy"
              />
              
              {/* Hover tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {client.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}