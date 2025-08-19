"use client";

import Image from "next/image";
import Link from "next/link";

const APP_PROMO = {
  title: "Discover incredible offers anywhere.",
  subtitle: "Download the app now!",
  downloads: [
    { src: "/app-store.svg", alt: "App Store", href: "#" },
    { src: "/google-play.svg", alt: "Google Play", href: "#" },
    { src: "/app-gallery.svg", alt: "AppGallery", href: "#" },
  ],
  screenshot: "/appscreen.webp", // replace with actual
};

const UpperFooter = () => {
  return (
    <section className="bg-[#F2F2F2] pt-8 sm:pt-12 border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-6">
          
          {/* Text Section */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              {APP_PROMO.title}
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-[#ff642d] mt-2 sm:mt-3">
              {APP_PROMO.subtitle}
            </p>
          </div>

          {/* Screenshot Section */}
          <div className="flex justify-center order-3 lg:order-2">
            <div className="relative">
              <Image
                src={APP_PROMO.screenshot}
                alt="App Screenshot"
                width={150}
                height={150}
                className="object-contain w-32 h-32 sm:w-40 sm:h-40 lg:w-36 lg:h-36 xl:w-44 xl:h-44"
              />
            </div>
          </div>

          {/* Download Buttons Section */}
          <div className="order-2 lg:order-3">
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center lg:justify-end gap-3 sm:gap-4">
              {APP_PROMO.downloads.map((btn, idx) => (
                <Link
                  key={idx}
                  href={btn.href}
                  className="transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded"
                >
                  <Image 
                    src={btn.src} 
                    alt={btn.alt} 
                    width={140} 
                    height={42}
                    className="w-32 sm:w-36 lg:w-32 xl:w-36 h-auto"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpperFooter;