
// export default function index() {
//   return (
//     // <>
//     // Main Marketplace Page ad sidebar categories listings 
//     // The main content should be Categorylisting like properties, electronics, vehicles, etc.
//     // </>


//   );
// }
"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Car, Tv, Building, Smartphone } from "lucide-react";

// Sidebar categories
const categories = [
  { name: "Properties", icon: Home, link: "/properties" },
  { name: "Vehicles", icon: Car, link: "/vehicles" },
  { name: "Electronics", icon: Tv, link: "/electronics" },
  { name: "Home & Furniture", icon: Building, link: "/home-furniture" },
  { name: "Mobile Phones", icon: Smartphone, link: "/mobile-phones" },
];

// Example items for main content
const categoryItems = [
  { id: 1, title: "iPhone 14 Pro", category: "Electronics", price: "$999" },
  { id: 2, title: "BMW X5", category: "Vehicles", price: "$45,000" },
  { id: 3, title: "3 Bedroom Apartment", category: "Properties", price: "$150,000" },
  { id: 4, title: "Sofa Set", category: "Home & Furniture", price: "$500" },
];

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState("Properties");

  // Filter items based on selected category
  const filteredItems = categoryItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <li key={cat.name}>
                <button
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center w-full p-2 rounded hover:bg-gray-100 transition ${
                    activeCategory === cat.name ? "bg-gray-200 font-semibold" : ""
                  }`}
                >
                  <Icon className="mr-2" size={18} />
                  {cat.name}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">{activeCategory}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.price}</p>
              <Link
                href={`/${activeCategory.toLowerCase()}/${item.id}`}
                className="mt-2 inline-block text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
