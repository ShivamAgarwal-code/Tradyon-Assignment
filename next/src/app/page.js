"use client";
import Image from "next/image";
import TabView from "./components/TabView";
import ProductsPage from "./components/products";
import { useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const tabs = [
    {
      id: "overview",
      title: "Overview",
      content: (
        <div className="p-4  rounded-lg ">
          <h2 className="text-xl font-bold mb-2">Overview Content</h2>
          <p>This is the overview section content.</p>
        </div>
      ),
    },
    {
      id: "products",
      title: "Products",
      content: <ProductsPage />,
    },
    {
      id: "posts",
      title: "Posts",
      content: (
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Posts</h2>
          <p>Check out our latest posts.</p>
        </div>
      ),
    },
    {
      id: "certificates",
      title: "Certificates",
      content: (
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Certificates</h2>
          <p>View our certifications and achievements.</p>
        </div>
      ),
    },
    {
      id: "representatives",
      title: "Representatives",
      content: (
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Representatives</h2>
          <p>Meet our representatives.</p>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="bg-white">
        <div className="flex gap-[95px] items-center justify-center">
          <Image
            src="/assets/back.svg"
            alt="hero"
            width={20}
            height={50}
            className="w-6 h-12"
          />
          <h1 className="text-[14px] font-extrabold">KMGRobust</h1>
          <Image
            src="/assets/whatsapp.svg"
            alt="hero"
            width={20}
            height={50}
            className="w-6 h-12"
          />
        </div>

        <div
          className=" bg-cover bg-no-repeat bg-center h-[150px] w-full flex items-bottom justify-bottom"
          style={{ backgroundImage: "url('/assets/cover.png')" }}
        >
          <Image
            src="/assets/kmglogo.png"
            alt="hero"
            width={70}
            height={70}
            className="w-[90px] h-[90px] mt-[7rem] ml-[1rem] border-rounded-full"
          />
        </div>
        <div className="flex pt-[4rem] justify-left ">
          <h1 className="font-extrabold text-[20px]  pl-10">KMG Robu</h1>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/check.png"
              alt="hero"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
            <Image
              src="/assets/pro.png"
              alt="hero"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>
        <div className="flex gap-2 items-center text-[12px] text-gray-500 font-bold pl-10">
          <h1>24M Revenue</h1>
          <Image
            src="/assets/dot.png"
            alt="dot"
            width={15}
            height={15}
            className="w-[7px] h-[7px]"
          />
          <h1>1-10 Employees</h1>
          <Image
            src="/assets/dot.png"
            alt="dot"
            width={15}
            height={15}
            className="w-[7px] h-[7px]"
          />
          <h1>15 Years Old</h1>
        </div>

        <TabView tabs={tabs} />

        <div className="fixed bottom-0 left-0 right-0 flex flex-row justify-around items-center h-[70px] bg-white border-t border-gray-200">
          <div className="flex flex-col items-center justify-center w-1/2 transition-all">
            <Image
              src="/assets/favorite.png"
              width={40}
              height={20}
              className="w-[40px] h-[40px] mb-1"
              alt="Favorite"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-1/2  transition-all">
            <Image
              src="/assets/contact.png"
              width={70}
              height={70}
              className="w-[70px] h-[40px] mb-1"
              alt="Contact"
            />
          </div>
        </div>
      </div>
    </>
  );
}
