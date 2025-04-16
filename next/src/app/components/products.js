"use client";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Image from "next/image";

const sidebarItems = [
  {
    id: "dryspices",
    image: "/assets/dryspices.png",
    title: "Dry Spices",
  },
  {
    id: "seeds",
    image: "/assets/seeds.png",
    title: "Seeds",
  },
  {
    id: "herbs",
    image: "/assets/herbs.png",
    title: "Herbs & Dehydrates",
  },
  {
    id: "fruits",
    image: "/assets/fruits.png",
    title: "Dried Fruits & Nuts",
  },
  {
    id: "pulses",
    image: "/assets/pulses.png",
    title: "Pulses",
  },
  {
    id: "grains",
    image: "/assets/grains.png",
    title: "Grains & Cereals",
  },
  {
    id: "organic",
    image: "/assets/organic.png",
    title: "Organic",
  },
];

export default function ProductsPage() {
  const [activeItem, setActiveItem] = useState("dryspices");

  useEffect(() => {
    console.log("Active item changed to:", activeItem);
  }, [activeItem]);

  return (
    <Layout
      sidebarItems={sidebarItems}
      setActiveItem={setActiveItem}
      activeItem={activeItem}
    >
      <div className="max-w-4xl mx-auto">
        {activeItem === "dryspices" && (
          <div className="space-y-6">
            <div className="space-y-6">
              <div>
                <Image
                  src="/assets/blackpepper.svg"
                  alt="Black Pepper"
                  width={100}
                  height={100}
                  className="w-full h-120 rounded-lg transition-all"
                />
              </div>
              <div className="flex gap-5 items-center justify-between">
                <h1 className="text-[10px]  text-gray-400">Origin</h1>
                <h1 className="text-[10px] font-bold">Tanzania</h1>
              </div>
              <div className="flex gap-5 items-center justify-between">
                <h1 className="text-[10px]  text-gray-400">Grade</h1>
                <h1 className="text-[10px]  font-bold">
                  Choice, Export Quality
                </h1>
              </div>
              <div className="flex gap-5 items-center justify-between">
                <h1 className="text-[10px]  text-gray-400">Packaging Type</h1>
                <h1 className="text-[10px]  font-bold">Carton Box (50kg)</h1>
              </div>
              <Image
                src={"/assets/details.svg"}
                alt="Details"
                width={20}
                height={20}
                className="w-28 h-38 rounded-lg transition-all"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Image
                  src="/assets/whitepepper.svg"
                  alt="Black Pepper"
                  width={100}
                  height={100}
                  className="w-full h-120 rounded-lg transition-all"
                />
              </div>
              <div className="flex gap-5 items-center justify-between">
                <h1 className="text-[10px]  text-gray-400">Origin</h1>
                <h1 className="text-[10px] font-bold">Tanzania</h1>
              </div>
              <div className="flex gap-5 items-center justify-between">
                <h1 className="text-[10px]  text-gray-400">Grade</h1>
                <h1 className="text-[10px]  font-bold">
                  Choice, Export Quality
                </h1>
              </div>
              <div className="flex gap-5 items-center justify-between">
                <h1 className="text-[10px]  text-gray-400">Packaging Type</h1>
                <h1 className="text-[10px]  font-bold">Carton Box (50kg)</h1>
              </div>
              <Image
                src={"/assets/details.svg"}
                alt="Details"
                width={20}
                height={20}
                className="w-28 h-38 rounded-lg transition-all"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Image
                  src="/assets/cloves.svg"
                  alt="Black Pepper"
                  width={100}
                  height={100}
                  className="w-full h-120 rounded-lg transition-all"
                />
              </div>
              <div className="flex gap-5 items-center justify-between">
                <h1 className="text-[10px]  text-gray-400">Origin</h1>
                <h1 className="text-[10px] font-bold">Tanzania</h1>
              </div>
              <div className="flex gap-5 items-center justify-between">
                <h1 className="text-[10px]  text-gray-400">Grade</h1>
                <h1 className="text-[10px]  font-bold">
                  Choice, Export Quality
                </h1>
              </div>
              <div className="flex gap-5 items-center justify-between">
                <h1 className="text-[10px]  text-gray-400">Packaging Type</h1>
                <h1 className="text-[10px]  font-bold">Carton Box (50kg)</h1>
              </div>
              <Image
                src={"/assets/details.svg"}
                alt="Details"
                width={20}
                height={20}
                className="w-28 h-38 rounded-lg transition-all"
              />
            </div>
          </div>
        )}
        {activeItem === "seeds" && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h1 className="text-3xl font-bold text-gray-800">
                Quality Seeds Selection
              </h1>
              <div className="mt-4 text-gray-600">
                Browse our premium quality seeds for all planting needs
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-3">Seed Types</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="border p-3 rounded">Vegetable Seeds</div>
                <div className="border p-3 rounded">Flower Seeds</div>
                <div className="border p-3 rounded">Herb Seeds</div>
                <div className="border p-3 rounded">Fruit Seeds</div>
              </div>
            </div>
          </div>
        )}
        {activeItem === "herbs" && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h1 className="text-3xl font-bold text-gray-800">
                Herbs & Dehydrated Products
              </h1>
              <div className="mt-4 text-gray-600">
                Discover our collection of fresh and dried herbs
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-3">Available Forms</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="border p-3 rounded">Dried Herbs</div>
                <div className="border p-3 rounded">Fresh Herbs</div>
                <div className="border p-3 rounded">Herbal Blends</div>
                <div className="border p-3 rounded">Medicinal Herbs</div>
              </div>
            </div>
          </div>
        )}
        {activeItem === "fruits" && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h1 className="text-3xl font-bold text-gray-800">
                Dried Fruits & Nuts Assortment
              </h1>
              <div className="mt-4 text-gray-600">
                Enjoy our selection of premium dried fruits and nuts
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-3">Popular Items</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="border p-3 rounded">Almonds</div>
                <div className="border p-3 rounded">Cashews</div>
                <div className="border p-3 rounded">Raisins</div>
                <div className="border p-3 rounded">Apricots</div>
              </div>
            </div>
          </div>
        )}
        {activeItem === "pulses" && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h1 className="text-3xl font-bold text-gray-800">
                Nutritious Pulses Variety
              </h1>
              <div className="mt-4 text-gray-600">
                High-quality pulses for healthy living
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-3">Pulse Types</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="border p-3 rounded">Lentils</div>
                <div className="border p-3 rounded">Chickpeas</div>
                <div className="border p-3 rounded">Beans</div>
                <div className="border p-3 rounded">Peas</div>
              </div>
            </div>
          </div>
        )}
        {activeItem === "grains" && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h1 className="text-3xl font-bold text-gray-800">
                Grains & Cereals Selection
              </h1>
              <div className="mt-4 text-gray-600">
                Wholesome grains for your dietary needs
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-3">Grain Varieties</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="border p-3 rounded">Wheat</div>
                <div className="border p-3 rounded">Rice</div>
                <div className="border p-3 rounded">Quinoa</div>
                <div className="border p-3 rounded">Oats</div>
              </div>
            </div>
          </div>
        )}
        {activeItem === "organic" && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h1 className="text-3xl font-bold text-gray-800">
                Organic Products Range
              </h1>
              <div className="mt-4 text-gray-600">
                Certified organic products for conscious living
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-3">Organic Categories</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="border p-3 rounded">Spices</div>
                <div className="border p-3 rounded">Grains</div>
                <div className="border p-3 rounded">Sweeteners</div>
                <div className="border p-3 rounded">Superfoods</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
