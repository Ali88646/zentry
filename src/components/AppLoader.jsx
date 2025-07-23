export default function AppLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-900 z-50">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-6" />

      {/* Loading Text */}
      <div className="flex space-x-1 text-2xl font-bold text-white">
        {["L", "o", "a", "d", "i", "n", "g"].map((char, i) => (
          <span
            key={i}
            className={`${
              char === "o" ? "special-font" : ""
            } animate-bounce delay-${i * 100}`}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
