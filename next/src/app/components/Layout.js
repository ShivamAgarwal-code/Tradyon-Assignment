"use client";
import SidebarItem from "./SidebarItem";

export default function Layout({
  sidebarItems,
  children,
  setActiveItem,
  activeItem,
}) {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 border-r border-gray-200 overflow-y-auto bg-gray-50">
        <div className="p-4">
          {/* <h2 className="text-xl font-bold mb-4">Product Categories</h2> */}
          <div className="space-y-3">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.id}
                image={item.image}
                title={item.title}
                isActive={activeItem === item.id}
                onClick={() => setActiveItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6">{children}</div>
    </div>
  );
}
