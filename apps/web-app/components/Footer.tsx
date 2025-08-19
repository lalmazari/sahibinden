"use client";

import { useState } from "react";
import Image from "next/image";
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
  downloads: [
    { src: "/app-store.svg", alt: "App Store", href: "#" },
    { src: "/google-play.svg", alt: "Google Play", href: "#" },
    { src: "/app-gallery.svg", alt: "AppGallery", href: "#" },
  ],
  copyright: "sahibinden",
};

const Footer = () => {
  const [language, setLanguage] = useState("English");

  return (
    <footer className="bg-[#F2F2F2] text-[#616161]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
        {/* Columns 1-3: Links */}
        {FOOTER_DATA.columns.map((col, i) => (
          <div key={i}>
            <h4 className="font-semibold teext-sm mb-2 uppercase">{col.title}</h4>
            {col.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="block font-light text-sm mb-1 hover:underline hover:text-[#181818]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        {/* Column 4 (double width): Social + Downloads */}
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <h4 className="font-semibold mb-2 uppercase">Follow Us</h4>

          {/* Social icons */}
          <div className="flex space-x-3 mb-4">
            {FOOTER_DATA.social.map(({ icon: Icon, href }, idx) => (
              <Link
                key={idx}
                href={href}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E0E0E0] hover:bg-[#D6D6D6] transition"
              >
                <Icon size={20} className="text-[#616161]" />
              </Link>
            ))}
          </div>

          {/* Download buttons */}
          <div className="flex flex-wrap gap-2">
            {FOOTER_DATA.downloads.map((app, idx) => (
              <Link
                key={idx}
                href={app.href}
                className="inline-block transition-transform"
              >
                <Image src={app.src} alt={app.alt} width={120} height={40} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright + Language Selector */}
      <div className=" mt-6 py-4 flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-4">
        <p className="text-center md:text-left font-light text-sm">
          &copy; {new Date().getFullYear()} {FOOTER_DATA.copyright}
        </p>

        {/* Language Switcher */}
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          {["English", "پښتو", "دری"].map((lang, index) => (
            <div key={lang} className="flex items-center ">
              <button
                onClick={() => setLanguage(lang)}
                className={`text-sm hover:cursor-pointer ${
                  language === lang
                    ? "font-semibold text-sm text-black"
                    : "text-gray-700"
                } hover:underline`}
              >
                {lang}
              </button>
              {index < 2 && <span className="px-2 text-gray-400">|</span>}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
