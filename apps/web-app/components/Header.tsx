// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import {
//   Bell,
//   MessageCircle,
//   User,
//   Search,
//   LogOut,
//   Settings,
//   List,
//   Plus,
//   Heart,
//   LogIn,
// } from "lucide-react";

// // Reusable styles
// const btnBase =
//   "flex items-center gap-1.5 rounded-md text-sm font-medium transition-colors duration-200";
// const btnPrimary =
//   `${btnBase} bg-[#ff642d] text-white px-3.5 py-1.5 hover:bg-[#c33908]`;
// const btnSecondary =
//   `${btnBase} border border-[#38b49b] bg-white px-2.5 py-1 text-[#262626] hover:border-[#008275] hover:bg-[#f0fdfa] hover:text-[#008275]`;
// const iconBtn =
//   "relative p-2 text-gray-600 rounded-md transition-colors duration-200";

// // 🎨 Icon Hover Colors
// const hoverFavorites = "hover:text-red-600 hover:bg-red-50 hover:cursor-pointer";
// const hoverNotifications = "hover:text-[#38b49b] hover:bg-[#e6f9f5] hover:cursor-pointer";
// const hoverMessages = "hover:text-[#38b49b] hover:bg-[#e6f9f5] hover:cursor-pointer";
// const hoverUser = "hover:text-[#38b49b] hover:bg-[#e6f9f5] hover:cursor-pointer";

// export default function Header() {
//   const [isLoggedIn, ] = useState(true); // Replace with real auth
//   const [openMenu, setOpenMenu] = useState<string | null>(null);
//   const menuRef = useRef<HTMLDivElement>(null);

//   // Close menu when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setOpenMenu(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleMenu = (menuName: string) =>
//     setOpenMenu(openMenu === menuName ? null : menuName);

//   return (
//     <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white">
//       <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
//         {/* Logo */}
//         <Link href="/" className="flex flex-shrink-0 items-center gap-2">
//           <span className="text-xl font-bold text-[#ff642d] transition-colors hover:text-[#c33908]">
//             sahibinden
//           </span>
//         </Link>

//         {/* Search Bar */}
//         <div className="flex-1 max-w-lg">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="What are you looking for?"
//               className="h-9 w-full rounded-md border border-[#38b49b] pl-3 pr-10 text-sm placeholder-gray-500 outline-none transition-all duration-200 focus:border-[#008275] focus:ring-2 focus:ring-[#38b49b]/20"
//             />
//             <button
//               type="submit"
//               className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md bg-[#38b49b] text-white transition-colors duration-200 hover:bg-[#008275] hover:cursor-pointer"
//             >
//               <Search size={14} />
//             </button>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-shrink-0 items-center gap-2" ref={menuRef}>
//           {!isLoggedIn ? (
//             <>
//               {/* Sell + Login */}
//               <Link href="/addClassified" className={btnPrimary}>
//                 <Plus size={14} />
//                 Sell
//               </Link>
//               <Link href="/login" className={btnSecondary}>
//                 <LogIn size={14} />
//                 Login
//               </Link>
//             </>
//           ) : (
//             <>
//               {/* Sell */}
//               <Link href="/addClassified" className={btnPrimary}>
//                 <Plus size={14} />
//                 Sell
//               </Link>

//               {/* Favorites */}
//               <div className="relative">
//                 <button
//                   className={`${iconBtn} ${hoverFavorites}`}
//                   onClick={() => toggleMenu("favorites")}
//                 >
//                   <Heart size={18} />
//                 </button>
//                 {openMenu === "favorites" && (
//                   <Dropdown title="Favorites">
//                     <DropdownItem title="iPhone 14 Pro Max" time="Added yesterday" />
//                     <DropdownItem title="Toyota Corolla 2020" time="2 days ago" />
//                     <DropdownItem title="Apartment in Istanbul" time="3 days ago" />
//                   </Dropdown>
//                 )}
//               </div>

//               {/* Notifications */}
//               <div className="relative">
//                 <button
//                   className={`${iconBtn} ${hoverNotifications}`}
//                   onClick={() => toggleMenu("notifications")}
//                 >
//                   <Bell size={18} />
//                 </button>
//                 {openMenu === "notifications" && (
//                   <Dropdown title="Notifications">
//                     <DropdownItem title="New message from John" time="2 minutes ago" />
//                     <DropdownItem title="Your ad got 10 views" time="1 hour ago" />
//                     <DropdownItem title="Price drop alert" time="3 hours ago" />
//                   </Dropdown>
//                 )}
//               </div>

//               {/* Messages */}
//               <div className="relative">
//                 <button
//                   className={`${iconBtn} ${hoverMessages}`}
//                   onClick={() => toggleMenu("messages")}
//                 >
//                   <MessageCircle size={18} />
//                 </button>
//                 {openMenu === "messages" && (
//                   <Dropdown title="Messages">
//                     <DropdownItem
//                       title="Hey, is this still available?"
//                       time="From: Sarah • 5 min ago"
//                     />
//                     <DropdownItem
//                       title="Can you lower the price?"
//                       time="From: Mike • 1 hour ago"
//                     />
//                   </Dropdown>
//                 )}
//               </div>

//               {/* User */}
//               <div className="relative">
//                 <button
//                   className={`${iconBtn} ${hoverUser}`}
//                   onClick={() => toggleMenu("user")}
//                 >
//                   <User size={18} />
//                 </button>
//                 {openMenu === "user" && (
//                   <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
//                     <div className="p-2">
//                       <Link href="/my-ads" className="menu-link">
//                         <List size={16} className="text-gray-500" />
//                         <span>My Ads</span>
//                       </Link>
//                       <Link href="/settings" className="menu-link">
//                         <Settings size={16} className="text-gray-500" />
//                         <span>Settings</span>
//                       </Link>
//                       <div className="mt-2 border-t border-gray-100 pt-2">
//                         <button className="menu-link text-red-600 hover:bg-red-50 w-full text-left">
//                           <LogOut size={16} className="text-red-500" />
//                           <span>Logout</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// // 🔹 Small reusable dropdown components
// function Dropdown({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div className="absolute right-0 mt-2 w-72 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
//       <div className="border-b border-gray-100 bg-gray-50 p-3">
//         <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
//       </div>
//       <div className="max-h-64 overflow-y-auto">{children}</div>
//       <div className="border-t border-gray-100 bg-gray-50 p-3">
//         <button className="text-xs font-medium text-[#38b49b] hover:text-[#008275]">
//           View all {title.toLowerCase()}
//         </button>
//       </div>
//     </div>
//   );
// }

// function DropdownItem({ title, time }: { title: string; time: string }) {
//   return (
//     <div className="cursor-pointer border-b border-gray-50 p-3 transition-colors hover:bg-gray-50">
//       <p className="text-sm font-medium text-gray-800">{title}</p>
//       <p className="mt-1 text-xs text-gray-500">{time}</p>
//     </div>
//   );
// }
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
  Menu,
  X,
  Home,
} from "lucide-react";

// Optimized styles
const styles = {
  btn: "flex items-center gap-1.5 rounded-md text-sm font-medium transition-all duration-200",
  btnPrimary:
    "bg-[#ff642d] text-white px-2.5 sm:px-3.5 py-1.5 hover:bg-[#c33908] hover:scale-105",
  btnSecondary:
    "border border-[#38b49b] bg-white px-2 sm:px-2.5 py-1 text-[#262626] hover:border-[#008275] hover:bg-[#f0fdfa] hover:text-[#008275]",
  iconBtn:
    "relative p-1.5 sm:p-2 text-gray-600 rounded-md transition-all duration-200",
  menuLink:
    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-100",
  dropdown:
    "absolute right-0 mt-2 w-72 sm:w-80 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl z-50",
};

// Mock data
const mockData = {
  favorites: [
    { id: 1, title: "iPhone 14 Pro Max", time: "Yesterday" },
    { id: 2, title: "Toyota Corolla 2020", time: "2 days ago" },
    { id: 3, title: "Apartment in Istanbul", time: "3 days ago" },
  ],
  notifications: [
    { id: 1, title: "New message from John", time: "2 min ago" },
    { id: 2, title: "Your ad got 10 views", time: "1 hour ago" },
    { id: 3, title: "Price drop alert", time: "3 hours ago" },
  ],
  messages: [
    { id: 1, title: "Hey, is this still available?", time: "From: Sarah • 5 min ago" },
    { id: 2, title: "Can you lower the price?", time: "From: Mike • 1 hour ago" },
  ],
};

export default function Header() {
  const [isLoggedIn] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpenMenu(null);
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const toggleMenu = useCallback((menuName: string) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setOpenMenu(null);
  }, []);

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3">
          {/* Left: Logo + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isLoggedIn && (
              <button
                onClick={toggleMobileMenu}
                className="p-1.5 sm:p-2 text-gray-600 rounded-md hover:bg-gray-100 transition-colors lg:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            )}
            <Link href="/" className="flex items-center">
              <span className="text-base sm:text-lg lg:text-xl font-bold text-[#ff642d] transition-colors hover:text-[#c33908]">
                sahibinden
              </span>
            </Link>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg mx-2 sm:mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="h-8 sm:h-9 w-full rounded-md border border-[#38b49b] pl-2.5 sm:pl-3 pr-7 sm:pr-9 text-xs sm:text-sm placeholder-gray-500 outline-none transition-all duration-200 focus:border-[#008275] focus:ring-2 focus:ring-[#38b49b]/20"
              />
              <button
                type="submit"
                className="absolute right-1 sm:right-1.5 top-1/2 flex h-5 w-5 sm:h-6 sm:w-6 -translate-y-1/2 items-center justify-center rounded-md bg-[#38b49b] text-white transition-all duration-200 hover:bg-[#008275] hover:scale-105"
                aria-label="Search"
              >
                <Search size={12} />
              </button>
            </div>
          </div>

          {/* Right: Desktop only */}
          <div className="hidden lg:flex items-center gap-1.5 sm:gap-2" ref={menuRef}>
            {/* Sell Button */}
            <Link href="/addClassified" className={`${styles.btn} ${styles.btnPrimary}`}>
              <Plus size={14} />
              <span>Sell</span>
            </Link>

            {!isLoggedIn ? (
              <Link href="/login" className={`${styles.btn} ${styles.btnSecondary}`}>
                <LogIn size={14} />
                <span>Login</span>
              </Link>
            ) : (
              <>
                {/* Desktop Icons */}
                <div className="flex items-center gap-1">
                  {Object.entries({
                    favorites: { icon: Heart, color: "hover:text-red-600 hover:bg-red-50" },
                    notifications: { icon: Bell, color: "hover:text-[#38b49b] hover:bg-[#e6f9f5]" },
                    messages: { icon: MessageCircle, color: "hover:text-[#38b49b] hover:bg-[#e6f9f5]" },
                    user: { icon: User, color: "hover:text-[#38b49b] hover:bg-[#e6f9f5]" },
                  }).map(([key, { icon: Icon, color }]) => (
                    <div key={key} className="relative">
                      <button
                        className={`${styles.iconBtn} ${color}`}
                        onClick={() => toggleMenu(key)}
                        aria-label={key}
                      >
                        <Icon size={18} />
                      </button>
                      {openMenu === key &&
                        (key === "user" ? (
                          <UserDropdown />
                        ) : (
                          <Dropdown
                            title={key}
                            data={mockData[key as keyof typeof mockData] || []}
                          />
                        ))}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Bottom Navigation (Mobile/Tablet) */}
      <BottomTabBar />
    </>
  );
}

// Dropdown Component
function Dropdown({
  title,
  data,
}: {
  title: string;
  data: Array<{ id: number; title: string; time: string }>;
}) {
  return (
    <div className={styles.dropdown}>
      <div className="border-b border-gray-100 bg-gray-50 p-3">
        <h3 className="text-sm font-semibold text-gray-800 capitalize">{title}</h3>
      </div>
      <div className="max-h-64 overflow-y-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer border-b border-gray-50 last:border-b-0 p-3 transition-colors hover:bg-gray-50"
          >
            <p className="text-sm font-medium text-gray-800 line-clamp-2">
              {item.title}
            </p>
            <p className="mt-1 text-xs text-gray-500">{item.time}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 bg-gray-50 p-3">
        <button className="text-xs font-medium text-[#38b49b] hover:text-[#008275] transition-colors">
          View all {title}
        </button>
      </div>
    </div>
  );
}

// User Dropdown
function UserDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl z-50">
      <div className="p-2 space-y-1">
        {[
          { href: "/my-ads", icon: List, label: "My Ads" },
          { href: "/settings", icon: Settings, label: "Settings" },
        ].map(({ href, icon: Icon, label }) => (
          <Link key={href} href={href} className={styles.menuLink}>
            <Icon size={16} className="text-gray-500" />
            <span>{label}</span>
          </Link>
        ))}
        <div className="border-t border-gray-200 pt-2 mt-2">
          <button
            className={`${styles.menuLink} text-red-600 hover:bg-red-50 w-full text-left`}
          >
            <LogOut size={16} className="text-red-500" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Bottom Tab Bar (Mobile only)
function BottomTabBar() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white shadow-md lg:hidden">
      <div className="flex justify-around items-center h-14">
        {/* Home */}
        <Link
          href="/"
          className="flex flex-col items-center text-gray-600 hover:text-[#ff642d] transition"
        >
          <Home size={20} />
          <span className="text-[10px]">Home</span>
        </Link>

        {/* Search */}
        <Link
          href="/search"
          className="flex flex-col items-center text-gray-600 hover:text-[#38b49b] transition"
        >
          <Search size={20} />
          <span className="text-[10px]">Search</span>
        </Link>

        {/* Sell (+ button) */}
        <Link
          href="/addClassified"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ff642d] text-white shadow-md -mt-8 hover:bg-[#c33908] transition"
        >
          <Plus size={24} />
        </Link>

        {/* Notifications */}
        <Link
          href="/notifications"
          className="flex flex-col items-center text-gray-600 hover:text-[#38b49b] transition"
        >
          <Bell size={20} />
          <span className="text-[10px]">Alerts</span>
        </Link>

        {/* User */}
        <Link
          href="/profile"
          className="flex flex-col items-center text-gray-600 hover:text-[#38b49b] transition"
        >
          <User size={20} />
          <span className="text-[10px]">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
