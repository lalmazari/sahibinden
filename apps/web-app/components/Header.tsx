"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Bell,
  MessageCircle,
  User,
  Search,
  LogOut,
  Settings,
  List,
  Plus,
  Heart,
  LogIn,
} from "lucide-react";

// Reusable styles
const btnBase =
  "flex items-center gap-1.5 rounded-md text-sm font-medium transition-colors duration-200";
const btnPrimary =
  `${btnBase} bg-green-600 text-white px-3.5 py-1.5 hover:bg-green-700`;
const btnSecondary =
  `${btnBase} border border-gray-200 bg-white px-2.5 py-1 text-[#262626] hover:bg-gray-50`;
const iconBtn =
  "relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with real auth
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menuName: string) =>
    setOpenMenu(openMenu === menuName ? null : menuName);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex flex-shrink-0 items-center gap-2">
          <span className="text-xl font-bold text-gray-800 transition-colors hover:text-blue-600">
            sahibinden
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="h-9 w-full rounded-md border border-gray-200 pl-3 pr-10 text-sm placeholder-gray-500 outline-none transition-all duration-200 focus:border-gray-800 focus:ring-2 focus:ring-blue-100"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md bg-gray-800 text-white transition-colors duration-200 hover:bg-gray-700 hover:cursor-pointer"
            >
              <Search size={14} />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-shrink-0 items-center gap-2" ref={menuRef}>
          {!isLoggedIn ? (
            <>
              {/* Sell + Login */}
              <Link href="/addClassified" className={btnPrimary}>
                <Plus size={14} />
                Sell
              </Link>
              <Link href="/login" className={btnSecondary}>
                <LogIn size={14} />
                Login
              </Link>
            </>
          ) : (
            <>
              {/* Sell */}
              <Link href="/addClassified" className={btnPrimary}>
                <Plus size={14} />
                Sell
              </Link>

              {/* Favorites */}
              <div className="relative">
                <button
                  className={`${iconBtn} hover:text-red-600 hover:bg-red-50 hover:cursor-pointer`}
                  onClick={() => toggleMenu("favorites")}
                >
                  <Heart size={18} />
                </button>
                {openMenu === "favorites" && (
                  <Dropdown title="Favorites">
                    <DropdownItem title="iPhone 14 Pro Max" time="Added yesterday" />
                    <DropdownItem title="Toyota Corolla 2020" time="2 days ago" />
                    <DropdownItem title="Apartment in Istanbul" time="3 days ago" />
                  </Dropdown>
                )}
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  className={`${iconBtn} hover:text-blue-600 hover:bg-blue-50 hover:cursor-pointer`}
                  onClick={() => toggleMenu("notifications")}
                >
                  <Bell size={18} />
                </button>
                {openMenu === "notifications" && (
                  <Dropdown title="Notifications">
                    <DropdownItem title="New message from John" time="2 minutes ago" />
                    <DropdownItem title="Your ad got 10 views" time="1 hour ago" />
                    <DropdownItem title="Price drop alert" time="3 hours ago" />
                  </Dropdown>
                )}
              </div>

              {/* Messages */}
              <div className="relative">
                <button
                  className={`${iconBtn} hover:text-blue-600 hover:bg-blue-50 hover:cursor-pointer`}
                  onClick={() => toggleMenu("messages")}
                >
                  <MessageCircle size={18} />
                </button>
                {openMenu === "messages" && (
                  <Dropdown title="Messages">
                    <DropdownItem
                      title="Hey, is this still available?"
                      time="From: Sarah • 5 min ago"
                    />
                    <DropdownItem
                      title="Can you lower the price?"
                      time="From: Mike • 1 hour ago"
                    />
                  </Dropdown>
                )}
              </div>

              {/* User */}
              <div className="relative">
                <button
                  className={`${iconBtn} hover:text-blue-600 hover:bg-blue-50 hover:cursor-pointer`}
                  onClick={() => toggleMenu("user")}
                >
                  <User size={18} />
                </button>
                {openMenu === "user" && (
                  <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                    <div className="p-2">
                      <Link href="/my-ads" className="menu-link">
                        <List size={16} className="text-gray-500" />
                        <span>My Ads</span>
                      </Link>
                      <Link href="/settings" className="menu-link">
                        <Settings size={16} className="text-gray-500" />
                        <span>Settings</span>
                      </Link>
                      <div className="mt-2 border-t border-gray-100 pt-2">
                        <button className="menu-link text-red-600 hover:bg-red-50 w-full text-left">
                          <LogOut size={16} className="text-red-500" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

// 🔹 Small reusable dropdown components
function Dropdown({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="absolute right-0 mt-2 w-72 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
      <div className="border-b border-gray-100 bg-gray-50 p-3">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="max-h-64 overflow-y-auto">{children}</div>
      <div className="border-t border-gray-100 bg-gray-50 p-3">
        <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
          View all {title.toLowerCase()}
        </button>
      </div>
    </div>
  );
}

function DropdownItem({ title, time }: { title: string; time: string }) {
  return (
    <div className="cursor-pointer border-b border-gray-50 p-3 transition-colors hover:bg-gray-50">
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="mt-1 text-xs text-gray-500">{time}</p>
    </div>
  );
}
