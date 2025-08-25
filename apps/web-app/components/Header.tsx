// "use client";

// import { useState } from "react";
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
//   Home,
// } from "lucide-react";

// // Styles
// const styles = {
//   btn: "flex items-center gap-1.5 rounded-md text-sm font-medium transition-all duration-200",
//   btnPrimary:
//     "bg-[#ff642d] text-white px-2.5 sm:px-3.5 py-1.5 hover:bg-[#c33908] hover:scale-105",
//   btnSecondary:
//     "border border-[#38b49b] bg-white px-2 sm:px-2.5 py-1 text-[#262626] hover:border-[#008275] hover:bg-[#f0fdfa] hover:text-[#008275]",
//   menuLink:
//     "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-100",
//   dropdown:
//     "absolute right-0 mt-2 w-72 sm:w-80 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl z-50",
// };

// // Mock data
// const mockData = {
//   favorites: [
//     { id: 1, title: "iPhone 14 Pro Max", time: "Yesterday" },
//     { id: 2, title: "Toyota Corolla 2020", time: "2 days ago" },
//     { id: 3, title: "Apartment in Istanbul", time: "3 days ago" },
//   ],
//   notifications: [
//     { id: 1, title: "New message from John", time: "2 min ago" },
//     { id: 2, title: "Your ad got 10 views", time: "1 hour ago" },
//     { id: 3, title: "Price drop alert", time: "3 hours ago" },
//   ],
//   messages: [
//     {
//       id: 1,
//       title: "Hey, is this still available?",
//       time: "From: Sarah • 5 min ago",
//     },
//     {
//       id: 2,
//       title: "Can you lower the price?",
//       time: "From: Mike • 1 hour ago",
//     },
//   ],
// };

// export default function Header() {
//   const isLoggedIn = true;
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   const toggleDropdown = (key: string) => {
//     setOpenDropdown(openDropdown === key ? null : key);
//   };

//   return (
//     <>
//       {/* Top Header */}
//       <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <span className="text-4xl font-bold text-[#ff642d] transition-colors hover:text-[#c33908]">
//               sahibinden
//             </span>
//           </Link>

//           {/* Search (Desktop only, hidden on mobile/tablet) */}
//           <div className="hidden lg:block flex-1 max-w-md xl:max-w-lg mx-4">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="h-9 w-full rounded-md border border-[#38b49b] pl-3 pr-9 text-sm placeholder-gray-500 outline-none transition-all duration-200 focus:border-[#008275] focus:ring-2 focus:ring-[#38b49b]/20"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md bg-[#38b49b] text-white transition-all duration-200 hover:bg-[#008275] hover:scale-105"
//                 aria-label="Search"
//               >
//                 <Search size={14} />
//               </button>
//             </div>
//           </div>

//           {/* Desktop only actions */}
//           <div className="hidden lg:flex items-center gap-2 relative">
//             {/* Sell */}
//             <Link
//               href="/addClassified"
//               className={`${styles.btn} ${styles.btnPrimary}`}
//             >
//               <Plus size={14} />
//               <span>Sell</span>
//             </Link>

//             {!isLoggedIn ? (
//               <Link
//                 href="/login"
//                 className={`${styles.btn} ${styles.btnSecondary}`}
//               >
//                 <LogIn size={14} />
//                 <span>Login</span>
//               </Link>
//             ) : (
//               <div className="flex items-center gap-2">
//                 {/* Favorites */}
//                 <button
//                   onClick={() => toggleDropdown("favorites")}
//                   className="p-2 text-gray-600 rounded-md hover:text-red-600 hover:bg-red-50 transition relative"
//                 >
//                   <Heart size={18} />
//                 </button>
//                 {openDropdown === "favorites" && (
//                   <Dropdown title="Favorites" data={mockData.favorites} />
//                 )}

//                 {/* Notifications */}
//                 <button
//                   onClick={() => toggleDropdown("notifications")}
//                   className="p-2 text-gray-600 rounded-md hover:text-[#38b49b] hover:bg-[#e6f9f5] transition relative"
//                 >
//                   <Bell size={18} />
//                 </button>
//                 {openDropdown === "notifications" && (
//                   <Dropdown
//                     title="Notifications"
//                     data={mockData.notifications}
//                   />
//                 )}

//                 {/* Messages */}
//                 <button
//                   onClick={() => toggleDropdown("messages")}
//                   className="p-2 text-gray-600 rounded-md hover:text-[#38b49b] hover:bg-[#e6f9f5] transition relative"
//                 >
//                   <MessageCircle size={18} />
//                 </button>
//                 {openDropdown === "messages" && (
//                   <Dropdown title="Messages" data={mockData.messages} />
//                 )}

//                 {/* User */}
//                 <button
//                   onClick={() => toggleDropdown("user")}
//                   className="p-2 text-gray-600 rounded-md hover:text-[#38b49b] hover:bg-[#e6f9f5] transition relative"
//                 >
//                   <User size={18} />
//                 </button>
//                 {openDropdown === "user" && <UserDropdown />}
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Bottom Navigation (Mobile/Tablet, keep search here) */}
//       <BottomTabBar />
//     </>
//   );
// }

// // Dropdown Component
// function Dropdown({
//   title,
//   data,
// }: {
//   title: string;
//   data: Array<{ id: number; title: string; time: string }>;
// }) {
//   return (
//     <div className={styles.dropdown}>
//       <div className="border-b border-gray-100 bg-gray-50 p-3">
//         <h3 className="text-sm font-semibold text-gray-800 capitalize">
//           {title}
//         </h3>
//       </div>
//       <div className="max-h-64 overflow-y-auto">
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className="cursor-pointer border-b border-gray-50 last:border-b-0 p-3 transition-colors hover:bg-gray-50"
//           >
//             <p className="text-sm font-medium text-gray-800 line-clamp-2">
//               {item.title}
//             </p>
//             <p className="mt-1 text-xs text-gray-500">{item.time}</p>
//           </div>
//         ))}
//       </div>
//       <div className="border-t border-gray-100 bg-gray-50 p-3">
//         <button className="text-xs font-medium text-[#38b49b] hover:text-[#008275] transition-colors">
//           View all {title}
//         </button>
//       </div>
//     </div>
//   );
// }

// // User Dropdown
// function UserDropdown() {
//   return (
//     <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl z-50">
//       <div className="p-2 space-y-1">
//         {[
//           { href: "/my-ads", icon: List, label: "My Ads" },
//           { href: "/settings", icon: Settings, label: "Settings" },
//         ].map(({ href, icon: Icon, label }) => (
//           <Link key={href} href={href} className={styles.menuLink}>
//             <Icon size={16} className="text-gray-500" />
//             <span>{label}</span>
//           </Link>
//         ))}
//         <div className="border-t border-gray-200 pt-2 mt-2">
//           <button
//             className={`${styles.menuLink} text-red-600 hover:bg-red-50 w-full text-left`}
//           >
//             <LogOut size={16} className="text-red-500" />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Bottom Tab Bar (Mobile only, with search kept)
// function BottomTabBar() {
//   return (
//     <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white shadow-md lg:hidden">
//       <div className="flex justify-around items-center h-14">
//         <Link
//           href="/"
//           className="flex flex-col items-center text-gray-600 hover:text-[#ff642d] transition"
//         >
//           <Home size={20} />
//           <span className="text-[10px]">Home</span>
//         </Link>

//         <Link
//           href="/search"
//           className="flex flex-col items-center text-gray-600 hover:text-[#38b49b] transition"
//         >
//           <Search size={20} />
//           <span className="text-[10px]">Search</span>
//         </Link>

//         <Link
//           href="/addClassified"
//           className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ff642d] text-white shadow-md -mt-8 hover:bg-[#c33908] transition"
//         >
//           <Plus size={24} />
//         </Link>

//         <Link
//           href="/notifications"
//           className="flex flex-col items-center text-gray-600 hover:text-[#38b49b] transition"
//         >
//           <Bell size={20} />
//           <span className="text-[10px]">Alerts</span>
//         </Link>

//         <Link
//           href="/profile"
//           className="flex flex-col items-center text-gray-600 hover:text-[#38b49b] transition"
//         >
//           <User size={20} />
//           <span className="text-[10px]">Profile</span>
//         </Link>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState, useEffect, useRef } from "react";
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
  Home,
} from "lucide-react";

// Common styles
const styles = {
  btn: "flex items-center gap-1.5 rounded-md text-sm font-medium transition-all duration-200",
  btnPrimary:
    "bg-[#ff642d] text-white px-3 py-1.5 hover:bg-[#c33908] hover:scale-105",
  btnSecondary:
    "border border-[#38b49b] bg-white px-3 py-1 text-[#262626] hover:border-[#008275] hover:bg-[#f0fdfa] hover:text-[#008275]",
  menuLink:
    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-100 cursor-pointer",
  dropdown:
    "absolute top-full mt-2 w-72 sm:w-80 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl z-50",
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
    {
      id: 1,
      title: "Hey, is this still available?",
      time: "From: Sarah • 5 min ago",
    },
    {
      id: 2,
      title: "Can you lower the price?",
      time: "From: Mike • 1 hour ago",
    },
  ],
};

// Reusable Icon Button
function IconButton({
  icon: Icon,
  onClick,
  className,
}: {
  icon: typeof Heart;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-2 text-gray-600 rounded-md transition relative cursor-pointer ${className}`}
    >
      <Icon size={18} />
    </button>
  );
}

export default function Header() {
  const isLoggedIn = true;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleDropdown = (key: string) =>
    setOpenDropdown(openDropdown === key ? null : key);

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <span className="text-4xl font-bold text-[#ff642d] transition-colors hover:text-[#c33908]">
              sahibinden
            </span>
          </Link>

          {/* Search (Desktop only) */}
          <div className="hidden lg:block flex-1 max-w-md xl:max-w-lg mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="h-9 w-full rounded-md border border-[#38b49b] pl-3 pr-9 text-sm placeholder-gray-500 outline-none focus:border-[#008275] focus:ring-2 focus:ring-[#38b49b]/20"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md bg-[#38b49b] text-white hover:bg-[#008275] hover:scale-105 cursor-pointer"
                aria-label="Search"
              >
                <Search size={14} />
              </button>
            </div>
          </div>

          {/* Desktop only actions */}
          <div className="hidden lg:flex items-center gap-2" ref={dropdownRef}>
            {/* Sell */}
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
              <div className="flex items-center gap-2">
                {/* Favorites */}
                <div className="relative">
                  <IconButton
                    icon={Heart}
                    onClick={() => toggleDropdown("favorites")}
                    className="hover:text-red-600 hover:bg-red-50"
                  />
                  {openDropdown === "favorites" && (
                    <Dropdown title="Favorites" data={mockData.favorites} />
                  )}
                </div>

                {/* Notifications */}
                <div className="relative">
                  <IconButton
                    icon={Bell}
                    onClick={() => toggleDropdown("notifications")}
                    className="hover:text-[#38b49b] hover:bg-[#e6f9f5]"
                  />
                  {openDropdown === "notifications" && (
                    <Dropdown title="Notifications" data={mockData.notifications} />
                  )}
                </div>

                {/* Messages */}
                <div className="relative">
                  <IconButton
                    icon={MessageCircle}
                    onClick={() => toggleDropdown("messages")}
                    className="hover:text-[#38b49b] hover:bg-[#e6f9f5]"
                  />
                  {openDropdown === "messages" && (
                    <Dropdown title="Messages" data={mockData.messages} />
                  )}
                </div>

                {/* User */}
                <div className="relative">
                  <IconButton
                    icon={User}
                    onClick={() => toggleDropdown("user")}
                    className="hover:text-[#38b49b] hover:bg-[#e6f9f5]"
                  />
                  {openDropdown === "user" && <UserDropdown />}
                </div>
              </div>
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
            className="cursor-pointer border-b border-gray-50 last:border-b-0 p-3 hover:bg-gray-50"
          >
            <p className="text-sm font-medium text-gray-800 line-clamp-2">{item.title}</p>
            <p className="mt-1 text-xs text-gray-500">{item.time}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 bg-gray-50 p-3">
        <button className="text-xs font-medium text-[#38b49b] hover:text-[#008275] cursor-pointer">
          View all {title}
        </button>
      </div>
    </div>
  );
}

// User Dropdown
function UserDropdown() {
  return (
    <div className="absolute top-full mt-2 right-0 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl z-50">
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
          <button className={`${styles.menuLink} text-red-600 hover:bg-red-50 w-full text-left`}>
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
        <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-[#ff642d] transition cursor-pointer">
          <Home size={20} />
          <span className="text-[10px]">Home</span>
        </Link>

        <Link href="/search" className="flex flex-col items-center text-gray-600 hover:text-[#38b49b] transition cursor-pointer">
          <Search size={20} />
          <span className="text-[10px]">Search</span>
        </Link>

        <Link
          href="/addClassified"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ff642d] text-white shadow-md -mt-8 hover:bg-[#c33908] transition cursor-pointer"
        >
          <Plus size={24} />
        </Link>

        <Link href="/notifications" className="flex flex-col items-center text-gray-600 hover:text-[#38b49b] transition cursor-pointer">
          <Bell size={20} />
          <span className="text-[10px]">Alerts</span>
        </Link>

        <Link href="/profile" className="flex flex-col items-center text-gray-600 hover:text-[#38b49b] transition cursor-pointer">
          <User size={20} />
          <span className="text-[10px]">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
