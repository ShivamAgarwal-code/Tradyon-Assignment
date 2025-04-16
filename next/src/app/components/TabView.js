// components/TabView.js
"use client";
import TabHeader from "./TabHeader";
import { useState } from "react";

export default function TabView({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full">
      {/* Scrollable Tab Headers */}
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {tabs.map((tab) => (
            <TabHeader
              key={tab.id}
              title={tab.title}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>
      </div>

      {/* Active Tab Content */}
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
