export default function JewelleryEssentials({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  return (
    <div className="w-full max-w-[1440px] mx-auto px-[120px]">
      {/* Section Title */}
      <div className="flex flex-col items-center gap-2.5 px-2.5 py-2.5 mb-10">
        <h2 className="text-2xl font-semibold text-[#141416] text-center">2026 Jewellery Essentials</h2>
      </div>

      {/* Essentials Grid */}
      <div className="flex items-center gap-[52px] justify-center">
        {data.map((item) => (
          <div 
            key={item.id}
            className="relative w-[363px] h-[240px] rounded-[20px] overflow-hidden group cursor-pointer"
          >
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-gradient-to-b from-transparent to-[#160421]"></div>
            {/* Title */}
            <div className="absolute bottom-[15px] left-1/2 transform -translate-x-1/2">
              <span className="text-base font-bold text-white">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
