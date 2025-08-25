"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

// Footer config
const FOOTER_DATA = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Business",
      links: [
        { label: "Business Solutions", href: "/business" },
        { label: "Advertise with Us", href: "/advertise" },
        { label: "Partnerships", href: "/partnerships" },
      ],
    },
    {
      title: "Sahibinden",
      links: [
        { label: "Help", href: "/help" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Use", href: "/terms-of-use" },
        { label: "Sitemap", href: "/sitemap" },
      ],
    },
  ],
  social: [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ],
  // downloads: [
  //   { src: "/app-store.svg", alt: "App Store", href: "#" },
  //   { src: "/google-play.svg", alt: "Google Play", href: "#" },
  //   { src: "/app-gallery.svg", alt: "AppGallery", href: "#" },
  // ],
  copyright: "sahibinden",
};

const Footer = () => {
  const [language, setLanguage] = useState("English");

  return (
    <footer className="bg-[#F2F2F2] text-[#616161]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 lg:py-10">
          {/* Columns 1-3: Links */}
          {FOOTER_DATA.columns.map((col, i) => (
            <div key={i} className="space-y-3">
              <h4 className="font-semibold text-sm mb-3 uppercase text-[#333]">
                {col.title}
              </h4>
              <div className="space-y-2">
                {col.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="block font-light text-sm hover:underline hover:text-[#181818] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Column 4: Social + Downloads */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
            {/* Social Section */}
            <div>
              <h4 className="font-semibold text-sm mb-3 uppercase text-[#333]">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3 mb-6">
                {FOOTER_DATA.social.map(({ icon: Icon, href }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E0E0E0] hover:bg-[#D6D6D6] transition-colors duration-200 hover:scale-105 transform"
                  >
                    <Icon size={18} className="text-[#616161]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Download buttons */}
            {/* <div>
              <h4 className="font-semibold text-sm mb-3 uppercase text-[#333]">
                Download App
              </h4>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2">
                {FOOTER_DATA.downloads.map((app, idx) => (
                  <Link
                    key={idx}
                    href={app.href}
                    className="inline-block transition-transform"
                  >
                    <Image 
                      src={app.src} 
                      alt={app.alt} 
                      width={120} 
                      height={40}
                      className="w-28 sm:w-32 h-auto"
                    />
                  </Link>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom section - Copyright + Language Selector */}
        <div className="border-t border-[#E0E0E0] pt-6 pb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-center sm:text-left font-light text-sm order-2 sm:order-1">
              &copy; {new Date().getFullYear()} {FOOTER_DATA.copyright}
            </p>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 order-1 sm:order-2">
              {["English", "پښتو", "دری"].map((lang, index) => (
                <div key={lang} className="flex items-center">
                  <button
                    onClick={() => setLanguage(lang)}
                    className={`text-sm px-2 py-1 rounded transition-colors duration-200 ${
                      language === lang
                        ? "font-semibold text-black"
                        : "text-gray-700 hover:text-black hover:cursor-pointer"
                    }`}
                  >
                    {lang}
                  </button>
                  {index < 2 && (
                    <span className="px-2 text-gray-400 select-none">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;