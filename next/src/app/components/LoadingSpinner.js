// components/LoadingSpinner.js
export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="relative">
        {/* Yellow outer ring */}
        <div className="absolute inset-0 border-4 border-yellow-400 rounded-full animate-spin border-t-transparent"></div>

        {/* Green inner ring */}
        <div className="border-4 border-green-500 rounded-full h-16 w-16 animate-spin border-b-transparent"></div>

        {/* Optional center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-4 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
