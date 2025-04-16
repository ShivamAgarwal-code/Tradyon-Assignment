import Image from "next/image";

export default function SidebarItem({ image, title, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer p-3 rounded-lg transition-all"
    >
      <div className="relative w-20 h-20">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <span
        className={`mt-2 text-sm text-center text-black ${
          isActive ? "font-extrabold" : "font-normal"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
