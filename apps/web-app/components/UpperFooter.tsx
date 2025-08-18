"use client";

import Image from "next/image";
import Link from "next/link";

const APP_PROMO = {
  title: "Find amazing deals on the go.",
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
    <section className="bg-[#F2F2F2] pt-12 border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center px-4 gap-6">

        {/* Left: Text */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {APP_PROMO.title}
          </h2>
          <p className="text-xl font-semibold text-red-600 mt-2">
            {APP_PROMO.subtitle}
          </p>
        </div>

        {/* Middle: Screenshot */}
        <div className="flex justify-center">
          <Image
            src={APP_PROMO.screenshot}
            alt="App Screenshot"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Right: Download Buttons in a row */}
        <div className="flex justify-center md:justify-end gap-3">
          {APP_PROMO.downloads.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              className="transition-transform"
            >
              <Image src={btn.src} alt={btn.alt} width={200} height={50} />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UpperFooter;
