// pages/products.js
import Layout from "../components/Layout";
import TabView from "../components/TabView";
import Image from "next/image";
import SidebarItem from "../components/SidebarItem";

const sidebarItems = [
  {
    id: 1,
    image: "/assets/dryspices.png",
    title: "Dry Spices",
  },
  {
    id: 2,
    image: "/assets/seeds.png",
    title: "Seeds",
  },
  {
    id: 3,
    image: "/assets/herbs.png",
    title: "Herbs & Dehydrates",
  },
  {
    id: 4,
    image: "/assets/fruits.png",
    title: "Dried Fruits & Nuts",
  },
  {
    id: 5,
    image: "/assets/pulses.png",
    title: "Pulses",
  },
  {
    id: 6,
    image: "/assets/grains.png",
    title: "Grains & Cereals",
  },
  {
    id: 7,
    image: "/assets/organic.png",
    title: "Organic",
  },
  // Add more items as needed
];

const tabs = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <div className="p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Overview</h2>
        <p>Company overview and mission statement.</p>
      </div>
    ),
  },
  {
    id: "products",
    title: "Products",
    content: (
      <div>
        <div className="p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Our Products</h2>
          <p>Explore our range of agricultural products.</p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <Image
            src="/assets/seeds.png"
            alt="Seeds"
            width={100}
            height={100}
            className="w-[100px] h-[100px] rounded-lg shadow"
          />
          <Image
            src="/assets/fertilizer.png"
            alt="Fertilizer"
            width={100}
            height={100}
            className="w-[100px] h-[100px] rounded-lg shadow"
          />
        </div>
      </div>
    ),
  },
  // Add more tabs as needed
];

export default function ProductsPage() {
  return (
    <Layout sidebarItems={sidebarItems}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Product Catalog</h1>
        <TabView tabs={tabs} />
      </div>
    </Layout>
  );
}
