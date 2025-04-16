// components/TabHeader.js
export default function TabHeader({ title, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 ml-3 mt-5 px-1  py-2 font-medium text-sm transition-colors duration-200 relative ${
        isActive
          ? "text-black-600 font-semibold"
          : "font-semibold text-gray-600 hover:text-gray-900"
      }`}
    >
      {title}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-green-600 rounded-t"></div>
      )}
    </button>
  );
}
