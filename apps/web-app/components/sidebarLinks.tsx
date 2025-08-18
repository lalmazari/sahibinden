"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Home, Maximize, Car, Gauge, Smartphone, Tag, ChevronRight, Building2, Wrench, Shirt, Utensils, Tractor, Hammer, Sparkles, Gamepad2, TreePine } from "lucide-react";
import { useState } from "react";

// Categories with icons
const categories = [
  { name: "Property", icon: Home, count: 1234 },
  { name: "Vehicles", icon: Car, count: 856 },
  { name: "Technology", icon: Smartphone, count: 2341 },
  { name: "Home & Furniture", icon: Building2, count: 674 },
  { name: "Food Products", icon: Utensils, count: 432 },
  { name: "Machines & Equipment", icon: Wrench, count: 298 },
  { name: "Construction & Building Materials", icon: Hammer, count: 187 },
  { name: "Clothing & Accessories", icon: Shirt, count: 945 },
  { name: "Textile", icon: Sparkles, count: 156 },
  { name: "Beauty & Personal Care", icon: Sparkles, count: 623 },
  { name: "Entertainment & Sports", icon: Gamepad2, count: 789 },
  { name: "Agriculture & Animals", icon: TreePine, count: 234 },
  { name: "Auto Accessories", icon: Gauge, count: 345 },
];

const mockData = [
  {
    category: "Electronics",
    seeMoreLink: "/electronics",
    items: [
      { 
        id: 1, 
        title: "iPhone 14 Pro", 
        price: "$999", 
        image: "/mock/iphone.jpg",
        location: "New York, NY",
        publishedDate: "2024-08-15"
      },
      { 
        id: 2, 
        title: "Samsung Galaxy S23", 
        price: "$899", 
        image: "/mock/samsung.jpg",
        location: "Los Angeles, CA",
        publishedDate: "2024-08-14"
      },
      { 
        id: 3, 
        title: "MacBook Pro", 
        price: "$1,999", 
        image: "/mock/macbook.jpg",
        location: "Chicago, IL",
        publishedDate: "2024-08-13"
      },
      { 
        id: 4, 
        title: "Sony WH-1000XM5", 
        price: "$349", 
        image: "/mock/headphones.jpg",
        location: "Miami, FL",
        publishedDate: "2024-08-12"
      },
    ],
  },
  {
    category: "Properties",
    seeMoreLink: "/properties",
    items: [
      { 
        id: 1, 
        title: "2BR Apartment Downtown", 
        price: "$1,200/mo", 
        image: "/mock/apartment.jpg",
        location: "Seattle, WA",
        publishedDate: "2024-08-16"
      },
      { 
        id: 2, 
        title: "Luxury Villa", 
        price: "$950,000", 
        image: "/mock/villa.jpg",
        location: "Austin, TX",
        publishedDate: "2024-08-11"
      },
      { 
        id: 3, 
        title: "Beach House", 
        price: "$1,500,000", 
        image: "/mock/beachhouse.jpg",
        location: "San Diego, CA",
        publishedDate: "2024-08-10"
      },
      { 
        id: 4, 
        title: "Office Space", 
        price: "$2,000/mo", 
        image: "/mock/office.jpg",
        location: "Boston, MA",
        publishedDate: "2024-08-09"
      },
    ],
  },
  {
    category: "Cars",
    seeMoreLink: "/cars",
    items: [
      { 
        id: 1, 
        title: "Tesla Model 3", 
        price: "$35,000", 
        image: "/mock/tesla.jpg",
        location: "Phoenix, AZ",
        publishedDate: "2024-08-17"
      },
      { 
        id: 2, 
        title: "BMW 3 Series", 
        price: "$40,000", 
        image: "/mock/bmw.jpg",
        location: "Denver, CO",
        publishedDate: "2024-08-08"
      },
      { 
        id: 3, 
        title: "Toyota Corolla", 
        price: "$20,000", 
        image: "/mock/toyota.jpg",
        location: "Portland, OR",
        publishedDate: "2024-08-07"
      },
      { 
        id: 4, 
        title: "Mercedes C-Class", 
        price: "$45,000", 
        image: "/mock/mercedes.jpg",
        location: "Atlanta, GA",
        publishedDate: "2024-08-06"
      },
    ],
  },
];

// Calculate total ads count
const totalAds = mockData.reduce((total, category) => total + category.items.length, 0);

export default function CategoryListings() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden md:block w-72 bg-white border rounded-lg p-6 h-fit sticky top-4">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Categories</h2>
          
          {/* All Categories Option */}
          <div 
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors mb-2 ${
              selectedCategory === "All Categories" 
                ? "bg-blue-50 border-l-4 border-blue-500" 
                : "hover:bg-gray-50"
            }`}
            onClick={() => setSelectedCategory("All Categories")}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 size={16} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">All Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                {totalAds}
              </span>
              <ChevronRight size={14} className="text-gray-400" />
            </div>
          </div>

          {/* Category List */}
          <div className="space-y-1">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.name}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedCategory === cat.name 
                      ? "bg-blue-50 border-l-4 border-blue-500" 
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <IconComponent size={16} className="text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{cat.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {cat.count}
                    </span>
                    <ChevronRight size={14} className="text-gray-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-12">
      {/* Main heading with total ads count */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Elektronik ({totalAds})
        </h1>
      </div>

      {mockData.map((cat) => (
        <div key={cat.category}>
          {/* Category Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {cat.category} ({cat.items.length})
            </h2>
            <Link
              href={cat.seeMoreLink}
              className="text-sm text-blue-600 hover:underline"
            >
              See more →
            </Link>
          </div>

          {/* Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {cat.items.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-800 truncate">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.price}</p>
                  
                  {/* Category-specific upper footer */}
                  {cat.category === "Properties" && (
                    <div className="flex justify-between items-center text-xs text-gray-400 mb-2 pb-2 border-b">
                      <div className="flex items-center gap-1">
                        <Home size={12} />
                        <span>{item.rooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Maximize size={12} />
                        <span>{item.squareFeet}</span>
                      </div>
                    </div>
                  )}
                  
                  {cat.category === "Cars" && (
                    <div className="flex justify-between items-center text-xs text-gray-400 mb-2 pb-2 border-b">
                      <div className="flex items-center gap-1">
                        <Gauge size={12} />
                        <span>{item.kilometers}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car size={12} />
                        <span>{item.modelYear}</span>
                      </div>
                    </div>
                  )}
                  
                  {cat.category === "Electronics" && (
                    <div className="flex justify-center items-center text-xs text-gray-400 mb-2 pb-2 border-b">
                      <div className="flex items-center gap-1">
                        <Tag size={12} />
                        <span className={item.condition === "New" ? "text-green-600" : "text-orange-600"}>
                          {item.condition}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Bottom footer with location and published date */}
                  <div className="text-xs text-gray-400 border-t pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{item.publishedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
}